// Número de WhatsApp de contacto de la marca.
// TODO: reemplazar por el número real de WhatsApp de Luis (con lada de país, sin + ni espacios).
export const WHATSAPP = "5210000000000";

export const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
