import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Target,
  Zap,
  Leaf,
  Shield,
  MessageCircle,
  Heart,
  CalendarDays,
  Globe,
  Sprout,
  Coffee,
  MapPin,
  ThermometerSun,
  Scissors,
  Droplets,
  Handshake,
  TrendingUp,
  Users,
  Package,
  Quote,
  Play,
} from "lucide-react";
import ganoderma from "@/assets/ganoderma-beneficios.jpg.asset.json";
import classic from "@/assets/ganocafe-classic.jpg.asset.json";
import tresEnUno from "@/assets/ganocafe-3en1.jpg.asset.json";
import schokolade from "@/assets/ganocafe-schokolade.jpg.asset.json";
import classicFria from "@/assets/classic-frio.jpg";
import tresEnUnoFria from "@/assets/3en1-frio.jpg";
import schokoladeFria from "@/assets/schokolade-frio.jpg";
import heroProductos from "@/assets/hero-productos.jpg";
import plantacion from "@/assets/plantacion-ganoderma.jpg";
import { productPrices, usd, costPerSachet, type ProductName } from "@/lib/product-pricing";
import { LanguageToggle, useLang, type Texto } from "@/lib/i18n";
import { wa } from "@/lib/whatsapp";

const MSG: Texto = {
  es: "¡Hola! Me interesa el Original Mushroom Coffee GE ☕🍄",
  en: "Hi! I'm interested in Original Mushroom Coffee GE ☕🍄",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Original Mushroom Coffee GE | Café con Ganoderma" },
      { name: "description", content: "Café con extracto de ganoderma desde 1995, presente en más de 15 países de Latinoamérica. Pide por WhatsApp." },
      { property: "og:title", content: "Original Mushroom Coffee GE" },
      { property: "og:description", content: "Café con extracto de ganoderma. Sabor 100% a café, energía sin nervios y bienestar diario." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const beneficios = [
  { icon: Target, label: { es: "Enfoque", en: "Focus" } },
  { icon: Zap, label: { es: "Energía", en: "Energy" } },
  { icon: Leaf, label: { es: "Digestión", en: "Digestion" } },
  { icon: Shield, label: { es: "Defensas", en: "Immunity" } },
];

const cifras = [
  { icon: CalendarDays, n: "1995", l: { es: "Desde", en: "Since" } },
  { icon: Globe, n: "+15", l: { es: "Países de Latinoamérica", en: "Latin American countries" } },
  { icon: Sprout, n: "6", l: { es: "Ganodermas seleccionados", en: "Selected ganodermas" } },
  { icon: Coffee, n: "100%", l: { es: "Sabor a café", en: "Coffee flavor" } },
];

const origen = [
  {
    icon: MapPin,
    t: { es: "Desde Malasia", en: "From Malaysia" },
    d: {
      es: "Nuestro ganoderma viene de Malasia, de donde salen las mejores cepas del mundo.",
      en: "Our ganoderma comes from Malaysia, home of the finest strains in the world.",
    },
  },
  {
    icon: ThermometerSun,
    t: { es: "Invernaderos con clima controlado", en: "Climate-controlled greenhouses" },
    d: {
      es: "Cultivado con temperatura y humedad controladas, para que el hongo crezca fuerte y limpio.",
      en: "Grown with controlled temperature and humidity, so the mushroom grows strong and clean.",
    },
  },
  {
    icon: Scissors,
    t: { es: "Ganoderma cosechado a mano", en: "Hand-harvested ganoderma" },
    d: {
      es: "Se recolecta a mano, en su punto justo. Sin prisas y sin mezclas de relleno.",
      en: "Picked by hand at just the right moment. No rushing and no filler blends.",
    },
  },
  {
    icon: Droplets,
    t: { es: "Extracto de los 6 ganodermas con mayores beneficios", en: "Extract of the 6 most beneficial ganodermas" },
    d: {
      es: "Extraemos lo activo de seis variedades, no el polvo: por eso tu taza rinde de verdad.",
      en: "We extract the active part of six varieties, not the powder: that's why your cup truly delivers.",
    },
  },
];

const productos: {
  img: string;
  imgFria: string;
  nombre: ProductName;
  titulo: Texto;
  desc: Texto;
  detalle: Texto;
}[] = [
  {
    img: classic.url,
    imgFria: classicFria,
    nombre: "GanoCafé Classic",
    titulo: { es: "GanoCafé Classic", en: "GanoCafé Classic" },
    desc: {
      es: "Café negro enriquecido con ganoderma lucidum. Intenso, de cuerpo completo y sin azúcar: para los que aman el café de verdad.",
      en: "Black coffee enriched with Ganoderma lucidum. Bold, full-bodied and sugar-free: for true coffee lovers.",
    },
    detalle: { es: "30 sobres de 3 g", en: "30 sachets of 3 g" },
  },
  {
    img: tresEnUno.url,
    imgFria: tresEnUnoFria,
    nombre: "GanoCafé 3 en 1",
    titulo: { es: "GanoCafé 3 en 1", en: "GanoCafé 3 in 1" },
    desc: {
      es: "Café, crema y un toque de dulzor con ganoderma lucidum. Cremoso y listo en segundos: tu taza perfecta sin complicaciones.",
      en: "Coffee, creamer and a touch of sweetness with Ganoderma lucidum. Creamy and ready in seconds: your perfect cup, no fuss.",
    },
    detalle: { es: "20 sobres de 21 g", en: "20 sachets of 21 g" },
  },
  {
    img: schokolade.url,
    imgFria: schokoladeFria,
    nombre: "GanoCafé Schokolade",
    titulo: { es: "GanoCafé Schokolade", en: "GanoCafé Schokolade" },
    desc: {
      es: "Chocolate caliente enriquecido con ganoderma lucidum. Rico, reconfortante y perfecto para toda la familia.",
      en: "Hot chocolate enriched with Ganoderma lucidum. Rich, comforting and perfect for the whole family.",
    },
    detalle: { es: "20 sobres de 20 g", en: "20 sachets of 20 g" },
  },
];

const razones = [
  {
    t: { es: "Sabor 100% a café", en: "100% coffee flavor" },
    d: {
      es: "Usamos extracto de ganoderma, no polvo de hongo. Por eso sabe a café y nada más: sin sabor a tierra ni a medicinas.",
      en: "We use ganoderma extract, not mushroom powder. That's why it tastes like coffee and nothing else: no earthy or medicinal taste.",
    },
  },
  {
    t: { es: "Ganoderma de verdad", en: "Real ganoderma" },
    d: {
      es: "Extracto de los 6 ganodermas con mayores beneficios, cosechados a mano en invernaderos de clima controlado en Malasia.",
      en: "Extract of the 6 most beneficial ganodermas, hand-harvested in climate-controlled greenhouses in Malaysia.",
    },
  },
  {
    t: { es: "Energía sin nervios", en: "Energy without the jitters" },
    d: {
      es: "Disfruta tu café con un despertar suave, sin bajones ni ansiedad a media tarde.",
      en: "Enjoy your coffee with a smooth wake-up, without crashes or mid-afternoon anxiety.",
    },
  },
];

const testimonios = [
  {
    nombre: "Karina P.",
    texto: {
      es: "Desde que probé el 3 en 1 no me dio agruras, es algo que sufría mucho con el café normal.",
      en: "Since I tried the 3 in 1 I haven't had heartburn, something I used to suffer a lot with regular coffee.",
    },
  },
  {
    nombre: "Luis R",
    texto: {
      es: "Esa noche dormí muy a gusto después de tomarme mi taza de cacao, hace mucho que padecía de insomnio.",
      en: "That night I slept really well after my cup of cocoa. I had been struggling with insomnia for a long time.",
    },
  },
  {
    nombre: "Gerardo M",
    texto: {
      es: "El café negro me dio esa claridad mental durante el día, adicional mi energía emocional subió al 100%.",
      en: "The black coffee gave me mental clarity throughout the day, and my emotional energy went up to 100%.",
    },
  },
];

const modelo = [
  {
    icon: Package,
    t: { es: "Producto probado", en: "Proven product" },
    d: {
      es: "Vendes un café con casi 30 años de historia y presencia en más de 15 países. No empiezas de cero.",
      en: "You sell a coffee with almost 30 years of history and presence in more than 15 countries. You don't start from scratch.",
    },
  },
  {
    icon: Users,
    t: { es: "Tu propio negocio", en: "Your own business" },
    d: {
      es: "Tú pones el ritmo: distribuye la marca en tu ciudad y haz crecer tu cartera de clientes.",
      en: "You set the pace: distribute the brand in your city and grow your customer base.",
    },
  },
  {
    icon: TrendingUp,
    t: { es: "Consumo diario", en: "Daily consumption" },
    d: {
      es: "El café se toma todos los días: tus clientes vuelven a comprar una y otra vez, y tu negocio crece con ellos.",
      en: "People drink coffee every day: your customers buy again and again, and your business grows with them.",
    },
  },
];

const comparativa = [
  { f: { es: "Cero acidez", en: "Zero acidity" }, regular: false },
  { f: { es: "Sin sensación de taquicardia ni nerviosismo", en: "No racing heart or jitters" }, regular: false },
  { f: { es: "Café real que sabe a café", en: "Real coffee that tastes like coffee" }, regular: true },
  { f: { es: "Con extracto de ganoderma", en: "With ganoderma extract" }, regular: false },
  { f: { es: "Listo en segundos, caliente o frío", en: "Ready in seconds, hot or iced" }, regular: false },
];

type Opcion = "subscribe" | "oneTime";

const etiquetasOpcion: Record<Opcion, Texto> = {
  subscribe: { es: "Suscríbete y ahorra", en: "Subscribe & save" },
  oneTime: { es: "Compra una vez", en: "Buy once" },
};

function OpcionesPrecio({ producto, seleccion, onSeleccion }: { producto: ProductName; seleccion: Opcion; onSeleccion: (o: Opcion) => void }) {
  const { t, pick } = useLang();
  const precios = productPrices[producto];
  return (
    <div className="mt-5 space-y-3 text-left">
      {(["subscribe", "oneTime"] as const).map((opcion) => {
        const p = precios[opcion];
        const activa = seleccion === opcion;
        return (
          <label
            key={opcion}
            className={`flex cursor-pointer items-center gap-3 rounded-2xl bg-card p-3 transition ${
              activa ? "border-2 border-primary shadow-sm" : "border border-border"
            }`}
          >
            <input
              type="radio"
              name={`precio-${producto}`}
              checked={activa}
              onChange={() => onSeleccion(opcion)}
              className="sr-only"
            />
            <span
              aria-hidden
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                activa ? "border-primary" : "border-muted-foreground/50"
              }`}
            >
              {activa && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">{pick(etiquetasOpcion[opcion])}</span>
              <span className="mt-1 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${opcion === "subscribe" ? "bg-primary" : "bg-muted-foreground"}`}>
                  {t("Ahorra", "Save")} {p.savePercent}%
                </span>
                <span className="text-sm text-muted-foreground line-through">{usd(p.originalUsd)}</span>
                <span className="font-serif text-lg font-bold text-primary">{usd(p.finalUsd)}</span>
              </span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

function CarruselProducto({ img, imgFria, nombre }: { img: string; imgFria: string; nombre: string }) {
  const { t } = useLang();
  const [activa, setActiva] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const alDeslizar = () => {
    const el = ref.current;
    if (!el) return;
    setActiva(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={alDeslizar}
        className="flex snap-x snap-mandatory overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="relative w-full shrink-0 snap-center">
          <img src={img} alt={t(`Caja de ${nombre} con ganoderma, preparación caliente`, `${nombre} box with ganoderma, served hot`)} width={832} height={1248} className="aspect-[2/3] w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">{t("Caliente", "Hot")}</span>
        </div>
        <div className="relative w-full shrink-0 snap-center">
          <img src={imgFria} alt={t(`${nombre} preparado como bebida fría con hielo`, `${nombre} prepared as an iced drink`)} width={832} height={1248} className="aspect-[2/3] w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">{t("Fría", "Iced")}</span>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {[0, 1].map((i) => (
          <span key={i} className={`h-2 w-2 rounded-full transition ${activa === i ? "bg-primary" : "bg-primary-foreground/70"}`} />
        ))}
      </div>
      {activa === 0 && (
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
          {t("Desliza →", "Swipe →")}
        </span>
      )}
    </div>
  );
}

const VIDEO_ID = "6Y15eqJ37O8";

function VideoPlantaciones() {
  const { t } = useLang();
  const [reproduciendo, setReproduciendo] = useState(false);

  return (
    <div className="mt-8">
      <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground">
        {t("Las plantaciones", "The plantations")}
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border bg-card shadow-lg">
          {reproduciendo ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={t("Video de las plantaciones de ganoderma", "Video of the ganoderma plantations")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setReproduciendo(true)}
              aria-label={t("Reproducir el video de las plantaciones", "Play the plantation video")}
              className="group relative block w-full cursor-pointer"
            >
              <img
                src={plantacion}
                alt={t(
                  "Invernaderos de ganoderma con filas de cultivo en un paisaje tropical",
                  "Ganoderma greenhouses with rows of crops in a tropical landscape",
                )}
                width={1536}
                height={1024}
                className="aspect-video w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg transition group-hover:scale-110">
                  <Play className="h-9 w-9 translate-x-0.5 text-primary-foreground" fill="currentColor" />
                </span>
              </span>
            </button>
          )}
          <div className={`bg-card px-5 text-center ${reproduciendo ? "py-5" : "py-7"}`}>
            <p className="font-serif text-2xl font-semibold leading-snug text-primary md:text-3xl">
              {t("Dale click para que conozcas las plantaciones", "Click to see the plantations")}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              {t(
                "Un recorrido real por los invernaderos donde crece el ganoderma que llega a tu taza.",
                "A real walk through the greenhouses where the ganoderma in your cup is grown.",
              )}
            </p>
            {!reproduciendo && (
              <button
                type="button"
                onClick={() => setReproduciendo(true)}
                className="mx-auto mt-5 flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-serif text-lg font-semibold text-primary-foreground transition hover:brightness-110"
              >
                <Play className="h-5 w-5" fill="currentColor" /> {t("Ver el video", "Watch the video")}
              </button>
            )}
          </div>
      </div>
    </div>
  );
}

function Index() {
  const { t, pick } = useLang();
  const [seleccion, setSeleccion] = useState<Record<ProductName, Opcion>>({
    "GanoCafé Classic": "subscribe",
    "GanoCafé 3 en 1": "subscribe",
    "GanoCafé Schokolade": "subscribe",
  });

  return (
    <div className="min-h-screen">
      <div className="bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
        {t("¡Pide hoy por WhatsApp y recibe atención personalizada!", "Order today on WhatsApp and get personalized service!")}
      </div>
      <header className="relative flex items-center justify-center bg-cream pb-4 pt-7">
        <LanguageToggle className="absolute right-3 top-1.5" />
        <span className="font-serif text-2xl font-bold tracking-tight">
          Original Mushroom Coffee <span className="text-primary">GE</span>
        </span>
      </header>

      <section className="bg-caramel px-5 pb-12 pt-8 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-lg">
            {t("Desde 1995 · Presentes en más de 15 países de Latinoamérica", "Since 1995 · Present in more than 15 Latin American countries")}
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            {t("Café que se antoja. Ganoderma que te cuida.", "Coffee you'll crave. Ganoderma that cares for you.")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            {t(
              "Impulsado por la naturaleza para darte energía duradera, mente clara y bienestar diario.",
              "Powered by nature to give you lasting energy, a clear mind and everyday wellness.",
            )}
          </p>
          <div className="mt-8 grid grid-cols-4 gap-2">
            {beneficios.map(({ icon: I, label }) => (
              <div key={label.es} className="flex flex-col items-center gap-2">
                <I className="h-10 w-10" strokeWidth={1.75} />
                <span className="font-serif text-sm md:text-base">{pick(label)}</span>
              </div>
            ))}
          </div>
          <img
            src={heroProductos}
            alt={t(
              "Los tres productos: GanoCafé Classic, GanoCafé 3 en 1 y GanoCafé Schokolade, con sus bebidas preparadas calientes y frías",
              "The three products: GanoCafé Classic, GanoCafé 3 in 1 and GanoCafé Schokolade, with their hot and iced drinks",
            )}
            width={1600}
            height={1000}
            className="mx-auto mt-10 w-full max-w-3xl rounded-xl shadow-lg"
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cifras.map(({ icon: I, n, l }) => (
              <div key={l.es} className="rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-4">
                <I className="mx-auto h-6 w-6" strokeWidth={1.75} />
                <p className="mt-2 font-serif text-3xl font-bold leading-none">{n}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-90">{pick(l)}</p>
              </div>
            ))}
          </div>
          <img
            src={ganoderma.url}
            alt={t(
              "Beneficios del ganoderma: apoya el sistema inmunológico, da energía, mejora la circulación, el sueño y la piel, oxigena y desintoxica el cuerpo",
              "Ganoderma benefits: supports the immune system, boosts energy, improves circulation, sleep and skin, oxygenates and detoxifies the body",
            )}
            width={1024}
            height={1026}
            className="mx-auto mt-8 w-full max-w-2xl rounded-xl"
          />
          <VideoPlantaciones />
          <div className="mt-8 flex flex-col gap-4">
            <a href={wa(pick(MSG))} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold text-primary-foreground transition hover:brightness-110">
              <MessageCircle className="h-6 w-6" /> {t("Pedir por WhatsApp", "Order on WhatsApp")}
            </a>
            <a
              href={wa(t("Hola, quiero más información sobre el café con ganoderma", "Hi, I'd like more information about the ganoderma coffee"))}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-primary-foreground py-4 font-serif text-2xl font-semibold transition hover:bg-primary-foreground/10"
            >
              {t("Quiero más información", "I want more information")}
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 font-serif">
            <div className="flex flex-col items-center gap-1"><Globe className="h-6 w-6" />{t("Presentes en +15 países", "Present in 15+ countries")}</div>
            <div className="flex flex-col items-center gap-1"><Heart className="h-6 w-6" />{t("Atención directa y cercana", "Direct, personal service")}</div>
          </div>
        </div>
      </section>

      <section className="bg-caramel-light">
        <div className="wave-top h-8 bg-cream" />
      </section>
      <section className="bg-cream px-5 py-12 text-center">
        <p className="font-serif text-2xl">{t("Siente la diferencia en solo", "Feel the difference in just")}</p>
        <p className="font-serif text-7xl font-bold text-primary">{t("7 días", "7 days")}</p>
      </section>

      <section className="bg-caramel px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground">{t("Nuestro origen", "Our origin")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            {t("Del invernadero a tu taza", "From the greenhouse to your cup")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl font-medium text-primary-foreground">
            {t(
              "No cualquier ganoderma sirve. Así se cultiva el que llega a tu café.",
              "Not just any ganoderma will do. This is how we grow the one that reaches your coffee.",
            )}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {origen.map(({ icon: I, t: titulo, d }) => (
              <div key={titulo.es} className="flex gap-4 rounded-xl bg-card p-6 text-left shadow-sm">
                <I className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{pick(titulo)}</h3>
                  <p className="mt-2 leading-relaxed">{pick(d)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Nuestros productos", "Our products")}</p>
        <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">{t("Elige tu favorito", "Pick your favorite")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
          {t(
            "Tres formas de disfrutar el poder del ganoderma, caliente o fría, una para cada momento del día. Desliza cada producto para verlo en las dos versiones.",
            "Three ways to enjoy the power of ganoderma, hot or iced, one for every moment of the day. Swipe each product to see both versions.",
          )}
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {productos.map((p) => {
            const titulo = pick(p.titulo);
            const opcion = seleccion[p.nombre];
            return (
              <div key={p.nombre} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
                <CarruselProducto img={p.img} imgFria={p.imgFria} nombre={titulo} />
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="text-2xl font-semibold text-primary">{titulo}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{pick(p.detalle)}</p>
                  <p className="mt-3 flex-1 leading-relaxed">{pick(p.desc)}</p>
                  <OpcionesPrecio
                    producto={p.nombre}
                    seleccion={opcion}
                    onSeleccion={(o) => setSeleccion((prev) => ({ ...prev, [p.nombre]: o }))}
                  />
                  <a
                    href={wa(
                      `${t("¡Hola! Quiero el", "Hi! I want the")} ${titulo} ☕🍄 (${pick(etiquetasOpcion[opcion])}: ${usd(productPrices[p.nombre][opcion].finalUsd)})`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-serif text-lg font-semibold text-primary-foreground transition hover:brightness-110"
                  >
                    <MessageCircle className="h-5 w-5" /> {t("Pedir ahora", "Order now")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Lo que nos hace diferentes", "What makes us different")}</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">{t("Un mejor estándar para tu café de cada día", "A higher standard for your everyday coffee")}</h2>
        <p className="mt-6 font-serif text-xl text-muted-foreground">
          {t(
            "Combinamos lo mejor del café con el poder del ganoderma, para que cada taza sea un ritual de bienestar.",
            "We combine the best of coffee with the power of ganoderma, so every cup becomes a wellness ritual.",
          )}
        </p>
        <div className="mt-8 divide-y border-t">
          {razones.map((r) => (
            <div key={r.t.es} className="py-6">
              <h3 className="text-2xl font-semibold text-primary">{pick(r.t)}</h3>
              <p className="mt-2 leading-relaxed">{pick(r.d)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Compara", "Compare")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">{t("Café regular vs. nuestro café", "Regular coffee vs. our coffee")}</h2>
          <div className="mt-8 overflow-hidden rounded-xl border bg-card shadow-sm">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="bg-caramel text-primary-foreground">
                  <th className="p-3 font-serif font-semibold">{t("Característica", "Feature")}</th>
                  <th className="p-3 text-center font-serif font-semibold">{t("Café regular", "Regular coffee")}</th>
                  <th className="p-3 text-center font-serif font-semibold">{t("Nuestro café", "Our coffee")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {comparativa.map((fila) => (
                  <tr key={fila.f.es}>
                    <td className="p-3 font-medium">{pick(fila.f)}</td>
                    <td className="p-3 text-center text-lg text-muted-foreground">{fila.regular ? "✓" : "✕"}</td>
                    <td className="p-3 text-center text-lg font-bold text-primary">✓</td>
                  </tr>
                ))}
                <tr className="bg-caramel-light/40">
                  <td className="p-3 font-medium">{t("Costo por taza", "Cost per cup")}</td>
                  <td className="p-3 text-center">{t("Desde $3.00 usd en cafetería", "From $3.00 usd at a coffee shop")}</td>
                  <td className="p-3 text-center font-bold text-primary">
                    {t("Desde", "From")} {usd(costPerSachet("GanoCafé Classic", "subscribe"))} {t("por sobre", "per sachet")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-6 grid gap-3 text-center text-sm md:grid-cols-3">
            {productos.map((p) => (
              <li key={p.nombre} className="rounded-xl border bg-card p-4">
                <span className="block font-serif text-lg font-semibold text-primary">{pick(p.titulo)}</span>
                <span className="block font-bold">{usd(costPerSachet(p.nombre, "subscribe"))} {t("por sobre", "per sachet")}</span>
                <span className="text-muted-foreground">
                  {t("con suscripción", "with subscription")} ({usd(costPerSachet(p.nombre, "oneTime"))} {t("compra única", "one-time purchase")})
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t(
              "Comparación de experiencia de consumo y precio. No sustituye consejo médico ni pretende curar enfermedades.",
              "Comparison of drinking experience and price. It does not replace medical advice and is not intended to cure any disease.",
            )}
          </p>
        </div>
      </section>

      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Testimonios", "Testimonials")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">
            {t("Lo que dicen quienes ya lo probaron", "What people who tried it are saying")}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonios.map((tm) => (
              <figure key={tm.nombre} className="flex flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <Quote className="h-8 w-8 text-primary" strokeWidth={1.75} />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed">
                  “{pick(tm.texto)}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold uppercase tracking-widest text-primary">
                  {tm.nombre}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel px-5 py-14 text-center text-primary-foreground">
        <h2 className="text-4xl font-bold">{t("¿Listo para tu primera taza?", "Ready for your first cup?")}</h2>
        <p className="mt-3 font-serif text-lg">{t("Escríbenos y te ayudamos con tu pedido.", "Message us and we'll help you with your order.")}</p>
        <a href={wa(pick(MSG))} target="_blank" rel="noreferrer" className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold transition hover:brightness-110">
          <MessageCircle className="h-6 w-6" /> {t("Escríbenos por WhatsApp", "Message us on WhatsApp")}
        </a>
      </section>

      <section id="modelo-de-negocio" className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Modelo de negocio", "Business model")}</p>
        <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">
          {t("Convierte el café en tu negocio", "Turn coffee into your business")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
          {t(
            "Distribuye una marca con historia, producto de consumo diario y presencia en más de 15 países.",
            "Distribute a brand with history, a product people use every day and presence in more than 15 countries.",
          )}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {modelo.map(({ icon: I, t: titulo, d }) => (
            <div key={titulo.es} className="rounded-xl border bg-card p-6 text-center shadow-sm">
              <I className="mx-auto h-10 w-10 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-2xl font-semibold text-primary">{pick(titulo)}</h3>
              <p className="mt-2 leading-relaxed">{pick(d)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/distribuye" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 font-serif text-2xl font-semibold text-primary-foreground transition hover:brightness-110">
            <Handshake className="h-6 w-6" /> {t("Quiero distribuir la marca", "I want to distribute the brand")}
          </Link>
        </div>
      </section>

      <footer className="bg-cream px-5 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Original Mushroom Coffee GE</p>
        <p className="mt-1">{t("Desde 1995 · Más de 15 países de Latinoamérica", "Since 1995 · More than 15 Latin American countries")}</p>
      </footer>
    </div>
  );
}
