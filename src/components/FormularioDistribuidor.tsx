import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Handshake } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function FormularioDistribuidor() {
  const { t } = useLang();
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = nombre.trim();
    const w = whatsapp.trim();
    const m = email.trim();
    if (!n || !w || !m) {
      setEstado("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
      setEstado("error");
      return;
    }
    setEstado("enviando");
    const { error } = await supabase
      .from("distribuidor_leads")
      .insert({ nombre: n.slice(0, 100), whatsapp: w.slice(0, 30), email: m.slice(0, 255) });
    setEstado(error ? "error" : "ok");
  };

  if (estado === "ok") {
    return (
      <div className="mx-auto mt-8 max-w-md rounded-xl bg-card p-8 text-center shadow-sm">
        <Handshake className="mx-auto h-10 w-10 text-primary" strokeWidth={1.75} />
        <p className="mt-4 font-serif text-2xl font-semibold text-primary">{t("¡Gracias, ", "Thank you, ")}{nombre.trim().split(" ")[0]}!</p>
        <p className="mt-2 leading-relaxed">
          {t(
            "Recibimos tus datos. Muy pronto te contactamos para contarte cómo distribuir la marca en tu país.",
            "We received your details. We'll contact you soon to explain how to distribute the brand in your country.",
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-left">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold uppercase tracking-wider">{t("Nombre completo", "Full name")}</label>
        <input
          id="nombre"
          type="text"
          required
          maxLength={100}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={t("Tu nombre", "Your name")}
          className="mt-1 w-full rounded-lg border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="text-sm font-semibold uppercase tracking-wider">WhatsApp</label>
        <input
          id="whatsapp"
          type="tel"
          required
          maxLength={30}
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+52 000 000 0000"
          className="mt-1 w-full rounded-lg border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">{t("Correo electrónico", "Email")}</label>
        <input
          id="email"
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("tucorreo@ejemplo.com", "you@example.com")}
          className="mt-1 w-full rounded-lg border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {estado === "error" && (
        <p className="text-center text-sm font-semibold text-destructive">
          {t("Revisa tus datos e inténtalo de nuevo, por favor.", "Please check your details and try again.")}
        </p>
      )}
      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
      >
        <Handshake className="h-6 w-6" />
        {estado === "enviando" ? t("Enviando...", "Sending...") : t("Quiero distribuir la marca", "I want to distribute the brand")}
      </button>
    </form>
  );
}
