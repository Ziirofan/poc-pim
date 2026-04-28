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

export const products: PimProduct[] = [
  {
    identifier: "summer-top-black",
    enabled: true,
    family: "tshirt",
    categories: ["summer_collection", "tops"],
    groups: [],
    created: "2024-01-15T10:30:00+01:00",
    updated: "2024-03-20T14:22:00+01:00",
    values: {
      name: [{ data: "Summer Top", locale: "en_US", scope: null }],
      description: [
        {
          data: "Lightweight breathable summer top, perfect for warm days.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "black", locale: null, scope: null }],
      size: [{ data: "M", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "29.90", currency: "EUR" },
            { amount: "34.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "classic-polo-navy",
    enabled: true,
    family: "polo",
    categories: ["classic_collection", "tops"],
    groups: [],
    created: "2024-02-01T09:00:00+01:00",
    updated: "2024-03-18T11:45:00+01:00",
    values: {
      name: [{ data: "Classic Polo", locale: "en_US", scope: null }],
      description: [
        {
          data: "Timeless navy polo shirt with a comfortable fit and premium cotton fabric.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "navy", locale: null, scope: null }],
      size: [{ data: "L", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "49.90", currency: "EUR" },
            { amount: "54.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1625910513413-5fc421e0fd6d?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "linen-shirt-white",
    enabled: true,
    family: "shirt",
    categories: ["summer_collection", "shirts"],
    groups: [],
    created: "2024-01-20T08:15:00+01:00",
    updated: "2024-04-01T16:30:00+01:00",
    values: {
      name: [{ data: "Linen Shirt", locale: "en_US", scope: null }],
      description: [
        {
          data: "Elegant white linen shirt, ideal for both casual and semi-formal occasions.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "white", locale: null, scope: null }],
      size: [{ data: "S", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "69.90", currency: "EUR" },
            { amount: "79.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "denim-jacket-blue",
    enabled: true,
    family: "jacket",
    categories: ["winter_collection", "outerwear"],
    groups: [],
    created: "2024-02-10T13:00:00+01:00",
    updated: "2024-03-25T10:10:00+01:00",
    values: {
      name: [{ data: "Denim Jacket", locale: "en_US", scope: null }],
      description: [
        {
          data: "Classic blue denim jacket with a modern slim fit. A wardrobe essential.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "blue", locale: null, scope: null }],
      size: [{ data: "M", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "89.90", currency: "EUR" },
            { amount: "99.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "wool-sweater-grey",
    enabled: true,
    family: "sweater",
    categories: ["winter_collection", "knitwear"],
    groups: [],
    created: "2024-02-15T11:20:00+01:00",
    updated: "2024-04-05T09:00:00+01:00",
    values: {
      name: [{ data: "Wool Sweater", locale: "en_US", scope: null }],
      description: [
        {
          data: "Soft merino wool sweater in heather grey. Warm and comfortable for cooler days.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "grey", locale: null, scope: null }],
      size: [{ data: "XL", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "79.90", currency: "EUR" },
            { amount: "89.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "running-shorts-red",
    enabled: false,
    family: "shorts",
    categories: ["summer_collection", "bottoms"],
    groups: [],
    created: "2024-03-10T10:00:00+01:00",
    updated: "2024-04-12T15:30:00+01:00",
    values: {
      name: [{ data: "Running Shorts", locale: "en_US", scope: null }],
      description: [
        {
          data: "Lightweight red running shorts with moisture-wicking fabric. Discontinued.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "red", locale: null, scope: null }],
      size: [{ data: "M", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "9.90", currency: "EUR" },
            { amount: "12.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "basic-tee-white",
    enabled: true,
    family: "tshirt",
    categories: ["summer_collection", "tops"],
    groups: [],
    created: "2024-03-12T09:30:00+01:00",
    updated: "2024-04-15T11:00:00+01:00",
    values: {
      name: [{ data: "Basic Tee", locale: "en_US", scope: null }],
      description: [
        {
          data: "Essential white t-shirt made from 100% organic cotton.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "white", locale: null, scope: null }],
      size: [{ data: "S", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "9.90", currency: "EUR" },
            { amount: "12.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
  {
    identifier: "chino-pants-beige",
    enabled: true,
    family: "pants",
    categories: ["classic_collection", "bottoms"],
    groups: [],
    created: "2024-03-01T14:00:00+01:00",
    updated: "2024-04-10T08:45:00+01:00",
    values: {
      name: [{ data: "Chino Pants", locale: "en_US", scope: null }],
      description: [
        {
          data: "Versatile beige chino pants with a tailored fit. Perfect for smart-casual looks.",
          locale: "en_US",
          scope: "ecommerce",
        },
      ],
      color: [{ data: "beige", locale: null, scope: null }],
      size: [{ data: "32", locale: null, scope: null }],
      price: [
        {
          data: [
            { amount: "59.90", currency: "EUR" },
            { amount: "64.00", currency: "USD" },
          ],
          locale: null,
          scope: null,
        },
      ],
      image: [
        {
          data: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
          locale: null,
          scope: null,
        },
      ],
    },
  },
];

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
