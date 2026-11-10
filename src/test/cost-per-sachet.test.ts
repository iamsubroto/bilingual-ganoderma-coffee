import { describe, it, expect } from "vitest";
import { costPerSachet } from "@/lib/product-pricing";

describe("costo por sobre", () => {
  it("Classic suscripción: $25 / 30 = 0.83", () => expect(costPerSachet("GanoCafé Classic", "subscribe")).toBe(0.83));
  it("3 en 1 suscripción: $25 / 20 = 1.25", () => expect(costPerSachet("GanoCafé 3 en 1", "subscribe")).toBe(1.25));
  it("Schokolade suscripción: $26 / 20 = 1.30", () => expect(costPerSachet("GanoCafé Schokolade", "subscribe")).toBe(1.3));
});
