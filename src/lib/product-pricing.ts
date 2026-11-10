export type ProductPrice = {
  originalUsd: number;
  finalUsd: number;
  savePercent: number;
};

export type ProductPricing = {
  subscribe: ProductPrice;
  oneTime: ProductPrice;
};

// Precios por producto. "subscribe" = suscripción mensual, "oneTime" = compra una vez.
export const productPrices = {
  "GanoCafé Classic": {
    subscribe: { originalUsd: 50, finalUsd: 25, savePercent: 50 },
    oneTime: { originalUsd: 50, finalUsd: 33, savePercent: 34 },
  },
  "GanoCafé 3 en 1": {
    subscribe: { originalUsd: 50, finalUsd: 25, savePercent: 50 },
    oneTime: { originalUsd: 50, finalUsd: 33, savePercent: 34 },
  },
  "GanoCafé Schokolade": {
    subscribe: { originalUsd: 50, finalUsd: 26, savePercent: 50 },
    oneTime: { originalUsd: 50, finalUsd: 34, savePercent: 34 },
  },
} as const satisfies Record<string, ProductPricing>;

export type ProductName = keyof typeof productPrices;

export const usd = (n: number) => `$${n.toFixed(2)} usd`;
