/**
 * Currency utilities for multi-locale support
 * All prices in USD ($)
 */

export function getCurrencyForLocale(locale?: string): string {
  return "USD";
}

export function getCurrencySymbol(locale?: string): string {
  return "$";
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
 * All prices are now in USD
 */
export function getPriceForLocale(
  price: number | { GBP: number; EUR: number },
  locale?: string
): number {
  // Always return the number price (USD)
  if (typeof price === "number") {
    return price;
  }

  // Fallback for old format - not used anymore
  return 0;
}
