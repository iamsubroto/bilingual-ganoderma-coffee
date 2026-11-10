import { describe, expect, it } from "vitest";
import { productPrices, usd } from "@/lib/product-pricing";

const products = Object.entries(productPrices) as [string, (typeof productPrices)[keyof typeof productPrices]][];

describe("Product prices", () => {
  it("has prices for the three products", () => {
    expect(products.map(([name]) => name)).toEqual([
      "GanoCafé Classic",
      "GanoCafé 3 en 1",
      "GanoCafé Schokolade",
    ]);
  });

  it("lists the original price as 50 USD for both options of every product", () => {
    for (const [, pricing] of products) {
      expect(pricing.subscribe.originalUsd).toBe(50);
      expect(pricing.oneTime.originalUsd).toBe(50);
    }
  });

  it("offers 50% off when subscribing", () => {
    for (const [, pricing] of products) {
      expect(pricing.subscribe.savePercent).toBe(50);
    }
  });

  it("offers 34% off on a one-time purchase", () => {
    for (const [, pricing] of products) {
      expect(pricing.oneTime.savePercent).toBe(34);
    }
  });

  it("charges 25 USD for Classic and 3 en 1, 26 USD for Schokolade on subscription", () => {
    expect(productPrices["GanoCafé Classic"].subscribe.finalUsd).toBe(25);
    expect(productPrices["GanoCafé 3 en 1"].subscribe.finalUsd).toBe(25);
    expect(productPrices["GanoCafé Schokolade"].subscribe.finalUsd).toBe(26);
  });

  it("charges 33 USD for Classic and 3 en 1, 34 USD for Schokolade on a one-time purchase", () => {
    expect(productPrices["GanoCafé Classic"].oneTime.finalUsd).toBe(33);
    expect(productPrices["GanoCafé 3 en 1"].oneTime.finalUsd).toBe(33);
    expect(productPrices["GanoCafé Schokolade"].oneTime.finalUsd).toBe(34);
  });

  it("formats prices with two decimals and the usd suffix", () => {
    expect(usd(25)).toBe("$25.00 usd");
    expect(usd(33)).toBe("$33.00 usd");
  });
});
