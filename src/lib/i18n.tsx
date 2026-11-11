import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";
export type Texto = { es: string; en: string };

const STORAGE_KEY = "omc-lang";

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: "es", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  // El servidor siempre renderiza en español; el idioma guardado se aplica después de hidratar.
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = useCallback((es: string, en: string) => (lang === "en" ? en : es), [lang]);
  const pick = useCallback((x: Texto) => x[lang], [lang]);
  return { lang, setLang, t, pick };
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opciones: { code: Lang; label: string; aria: string }[] = [
    { code: "es", label: "ES", aria: "Ver en español" },
    { code: "en", label: "EN", aria: "View in English" },
  ];
  return (
    <div className={`flex items-center gap-1 text-[11px] font-semibold tracking-wider text-muted-foreground ${className}`}>
      {opciones.map((o, i) => (
        <span key={o.code} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="opacity-40">/</span>}
          <button
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={lang === o.code}
            aria-label={o.aria}
            className={`rounded px-1 py-0.5 transition hover:text-foreground ${
              lang === o.code ? "text-foreground underline underline-offset-4" : "opacity-60"
            }`}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  );
}
