// Número de WhatsApp de contacto de la marca (México, lada 52).
export const WHATSAPP = "528110169320";

export const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
