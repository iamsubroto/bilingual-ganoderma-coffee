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

// Sobres por caja de cada producto.
export const sachetsPerBox: Record<ProductName, number> = {
  "GanoCafé Classic": 30,
  "GanoCafé 3 en 1": 20,
  "GanoCafé Schokolade": 20,
};

export const costPerSachet = (producto: ProductName, opcion: keyof ProductPricing) =>
  Math.round((productPrices[producto][opcion].finalUsd / sachetsPerBox[producto]) * 100) / 100;
