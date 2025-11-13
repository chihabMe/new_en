/**
 * Currency utilities for multi-locale support
 * English -> GBP (£), French -> EUR (€), default -> USD ($)
 */

export function getCurrencyForLocale(locale?: string): string {
  if (!locale) return "USD";
  const lang = locale.split("-")[0].toLowerCase();

  switch (lang) {
    case "en":
      return "GBP"; // English -> UK currency
    case "fr":
      return "EUR"; // French -> Euro
    default:
      return "USD";
  }
}

export function getCurrencySymbol(locale?: string): string {
  const currency = getCurrencyForLocale(locale);

  switch (currency) {
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "USD":
    default:
      return "$";
  }
}

export function formatCurrency(amount: number, locale?: string): string {
  const currency = getCurrencyForLocale(locale);
  const resolvedLocale = getLocaleForCurrency(currency);

  return new Intl.NumberFormat(resolvedLocale, {
    style: "currency",
    currency,
  }).format(amount);
}

export function getLocaleForCurrency(currency: string): string {
  switch (currency) {
    case "GBP":
      return "en-GB";
    case "EUR":
      return "fr-FR";
    case "USD":
    default:
      return "en-US";
  }
}

/**
 * Get the price for a specific locale from a price object
 * Supports both old format (number) and new format (object with GBP/EUR keys)
 */
export function getPriceForLocale(
  price: number | { GBP: number; EUR: number },
  locale?: string
): number {
  // Handle old format (just a number)
  if (typeof price === "number") {
    return price;
  }

  // Handle new format (object with currency-specific prices)
  const currency = getCurrencyForLocale(locale);

  switch (currency) {
    case "GBP":
      return price.GBP;
    case "EUR":
      return price.EUR;
    default:
      // Fallback to EUR if currency not found
      return price.EUR;
  }
}
