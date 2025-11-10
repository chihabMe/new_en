"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { publicActionsClient } from "@/lib/safe-actions";
import { prisma } from "@/lib/db";
import { getClientCountry } from "@/lib/ip-tools";
import { WebhookService } from "@/lib/webhook";
import { t } from "@/lib/i18n";

const contactFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  message: z.string().min(10),
  locale: z.enum(["en", "fr"]).default("en"),
});

export const submitContactAction = publicActionsClient
  .schema(contactFormSchema)
  .action(async ({ parsedInput }) => {
    try {
      const { locale, ...contactData } = parsedInput;
      const country = await getClientCountry();

      // Create the contact in the database
      const newContact = await prisma.contact.create({
        data: {
          fullName: contactData.fullName,
          email: contactData.email,
          country: country ?? "None",
          phoneNumber: contactData.phoneNumber,
          message: contactData.message,
        },
      });

      // Send webhook notification
      try {
        await WebhookService.sendContactWebhook({
          contact: {
            id: newContact.id,
            fullName: newContact.fullName,
            email: newContact.email,
            phoneNumber: newContact.phoneNumber,
            message: newContact.message,
            subject: newContact.subject,
            country: newContact.country,
            createdAt: newContact.createdAt,
          },
        });
      } catch (webhookError) {
        // Log webhook error but don't fail the contact creation
        console.error("Failed to send contact webhook:", webhookError);
      }

      console.log("Contact form submitted and webhook sent");

      // Revalidate any relevant paths if needed
      revalidatePath("/");
      revalidatePath("/admin");
      revalidatePath("/admin/contacts");

      return { success: true, message: t("contactSuccess", locale) };
    } catch (error) {
      console.error("Error submitting contact form:", error);

      if (error instanceof z.ZodError) {
        return {
          success: false,
          message: t("requiredField", locale),
          errors: error.errors,
        };
      }

      return {
        success: false,
        message: t("contactError", locale),
      };
    }
  });
