export interface PimProductValue {
  data: string | { amount: string; currency: string }[];
  locale: string | null;
  scope: string | null;
}

export interface PimProduct {
  identifier: string;
  enabled: boolean;
  family: string;
  categories: string[];
  groups: string[];
  created: string;
  updated: string;
  values: Record<string, PimProductValue[]>;
}

// Helper to extract a simple attribute value from PIM product values
export function getProductValue(
  product: PimProduct,
  attribute: string,
  locale: string = "en_US",
): string | undefined {
  const values = product.values[attribute];
  if (!values) return undefined;

  // Try locale-specific first, then null locale
  const match =
    values.find((v) => v.locale === locale) ??
    values.find((v) => v.locale === null);
  if (!match) return undefined;

  return typeof match.data === "string" ? match.data : undefined;
}

// Helper to extract price from PIM product values
export function getProductPrice(
  product: PimProduct,
  currency: string = "EUR",
): string | undefined {
  const prices = product.values.price;
  if (!prices?.[0]) return undefined;

  const data = prices[0].data;
  if (!Array.isArray(data)) return undefined;

  const match = data.find(
    (p) => typeof p === "object" && p.currency === currency,
  );
  return match ? (match as { amount: string; currency: string }).amount : undefined;
}
