import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Zap,
  Leaf,
  Shield,
  MessageCircle,
  Truck,
  Heart,
  CalendarDays,
  Globe,
  Sprout,
  Coffee,
  MapPin,
  ThermometerSun,
  Scissors,
  Droplets,
} from "lucide-react";
import ganoderma from "@/assets/ganoderma-beneficios.jpg.asset.json";
import classic from "@/assets/ganocafe-classic.jpg.asset.json";
import tresEnUno from "@/assets/ganocafe-3en1.jpg.asset.json";
import schokolade from "@/assets/ganocafe-schokolade.jpg.asset.json";

// TODO: reemplaza con tu número real de WhatsApp (formato internacional sin +)
const WHATSAPP = "5210000000000";
const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const MSG = "¡Hola! Me interesa el Original Mushroom Coffee GE ☕🍄";

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
  { icon: Target, label: "Enfoque" },
  { icon: Zap, label: "Energía" },
  { icon: Leaf, label: "Digestión" },
  { icon: Shield, label: "Defensas" },
];

const cifras = [
  { icon: CalendarDays, n: "1995", l: "Desde" },
  { icon: Globe, n: "+15", l: "Países de Latinoamérica" },
  { icon: Sprout, n: "6", l: "Ganodermas seleccionados" },
  { icon: Coffee, n: "100%", l: "Sabor a café" },
];

const origen = [
  {
    icon: MapPin,
    t: "Desde Malasia",
    d: "Nuestro ganoderma viene de Malasia, de donde salen las mejores cepas del mundo.",
  },
  {
    icon: ThermometerSun,
    t: "Invernaderos con clima controlado",
    d: "Cultivado con temperatura y humedad controladas, para que el hongo crezca fuerte y limpio.",
  },
  {
    icon: Scissors,
    t: "Ganoderma cosechado a mano",
    d: "Se recolecta a mano, en su punto justo. Sin prisas y sin mezclas de relleno.",
  },
  {
    icon: Droplets,
    t: "Extracto de los 6 ganodermas con mayores beneficios",
    d: "Extraemos lo activo de seis variedades, no el polvo: por eso tu taza rinde de verdad.",
  },
];

const productos = [
  {
    img: classic.url,
    nombre: "GanoCafé Classic",
    desc: "Café negro enriquecido con ganoderma lucidum. Intenso, de cuerpo completo y sin azúcar: para los que aman el café de verdad.",
    detalle: "30 sobres de 3 g",
  },
  {
    img: tresEnUno.url,
    nombre: "GanoCafé 3 en 1",
    desc: "Café, crema y un toque de dulzor con ganoderma lucidum. Cremoso y listo en segundos: tu taza perfecta sin complicaciones.",
    detalle: "20 sobres de 21 g",
  },
  {
    img: schokolade.url,
    nombre: "GanoCafé Schokolade",
    desc: "Chocolate caliente enriquecido con ganoderma lucidum. Rico, reconfortante y perfecto para toda la familia.",
    detalle: "30 sobres de 20 g",
  },
];

const razones = [
  {
    t: "Sabor 100% a café",
    d: "Usamos extracto de ganoderma, no polvo de hongo. Por eso sabe a café y nada más: sin sabor a tierra ni a medicinas.",
  },
  {
    t: "Ganoderma de verdad",
    d: "Extracto de los 6 ganodermas con mayores beneficios, cosechados a mano en invernaderos de clima controlado en Malasia.",
  },
  {
    t: "Energía sin nervios",
    d: "Disfruta tu café con un despertar suave, sin bajones ni ansiedad a media tarde.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
        ¡Pide hoy por WhatsApp y recibe atención personalizada!
      </div>
      <header className="flex items-center justify-center bg-cream py-4">
        <span className="font-serif text-2xl font-bold tracking-tight">
          Original Mushroom Coffee <span className="text-primary">GE</span>
        </span>
      </header>

      <section className="bg-caramel px-5 pb-12 pt-8 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-lg">
            Desde 1995 · Presentes en más de 15 países de Latinoamérica
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            Café que se antoja. Ganoderma que te cuida.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            Impulsado por la naturaleza para darte energía duradera, mente clara y bienestar diario.
          </p>
          <div className="mt-8 grid grid-cols-4 gap-2">
            {beneficios.map(({ icon: I, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <I className="h-10 w-10" strokeWidth={1.75} />
                <span className="font-serif text-sm md:text-base">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cifras.map(({ icon: I, n, l }) => (
              <div key={l} className="rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 p-4">
                <I className="mx-auto h-6 w-6" strokeWidth={1.75} />
                <p className="mt-2 font-serif text-3xl font-bold leading-none">{n}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider opacity-90">{l}</p>
              </div>
            ))}
          </div>
          <img src={ganoderma.url} alt="Beneficios del ganoderma: apoya el sistema inmunológico, da energía, mejora la circulación, el sueño y la piel, oxigena y desintoxica el cuerpo" width={1024} height={1026} className="mx-auto mt-8 w-full max-w-2xl rounded-xl" />
          <div className="mt-8 flex flex-col gap-4">
            <a href={wa(MSG)} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold text-primary-foreground transition hover:brightness-110">
              <MessageCircle className="h-6 w-6" /> Pedir por WhatsApp
            </a>
            <a href={wa("Hola, quiero más información sobre el café con ganoderma")} target="_blank" rel="noreferrer" className="rounded-full border-2 border-primary-foreground py-4 font-serif text-2xl font-semibold transition hover:bg-primary-foreground/10">
              Quiero más información
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 font-serif">
            <div className="flex flex-col items-center gap-1"><Truck className="h-6 w-6" />Envíos a todo México</div>
            <div className="flex flex-col items-center gap-1"><Heart className="h-6 w-6" />Atención directa y cercana</div>
          </div>
        </div>
      </section>

      <section className="bg-caramel-light">
        <div className="wave-top h-8 bg-cream" />
      </section>
      <section className="bg-cream px-5 py-12 text-center">
        <p className="font-serif text-2xl">Siente la diferencia en solo</p>
        <p className="font-serif text-7xl font-bold text-primary">7 días</p>
      </section>

      <section className="bg-caramel px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground">Nuestro origen</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
            Del invernadero a tu taza
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl font-medium text-primary-foreground">
            No cualquier ganoderma sirve. Así se cultiva el que llega a tu café.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {origen.map(({ icon: I, t, d }) => (
              <div key={t} className="flex gap-4 rounded-xl bg-card p-6 text-left shadow-sm">
                <I className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{t}</h3>
                  <p className="mt-2 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Nuestros productos</p>
        <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">Elige tu favorito</h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
          Tres formas de disfrutar el poder del ganoderma, una para cada momento del día.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {productos.map((p) => (
            <div key={p.nombre} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
              <img src={p.img} alt={`Caja de ${p.nombre} con ganoderma`} width={832} height={1248} className="aspect-[2/3] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="text-2xl font-semibold text-primary">{p.nombre}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{p.detalle}</p>
                <p className="mt-3 flex-1 leading-relaxed">{p.desc}</p>
                <a href={wa(`¡Hola! Me interesa el ${p.nombre} ☕🍄`)} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-serif text-lg font-semibold text-primary-foreground transition hover:brightness-110">
                  <MessageCircle className="h-5 w-5" /> Pedir ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Lo que nos hace diferentes</p>
        <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Un mejor estándar para tu café de cada día</h2>
        <p className="mt-6 font-serif text-xl text-muted-foreground">
          Combinamos lo mejor del café con el poder del ganoderma, para que cada taza sea un ritual de bienestar.
        </p>
        <div className="mt-8 divide-y border-t">
          {razones.map((r) => (
            <div key={r.t} className="py-6">
              <h3 className="text-2xl font-semibold text-primary">{r.t}</h3>
              <p className="mt-2 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-caramel px-5 py-14 text-center text-primary-foreground">
        <h2 className="text-4xl font-bold">¿Listo para tu primera taza?</h2>
        <p className="mt-3 font-serif text-lg">Escríbenos y te ayudamos con tu pedido.</p>
        <a href={wa(MSG)} target="_blank" rel="noreferrer" className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold transition hover:brightness-110">
          <MessageCircle className="h-6 w-6" /> Escríbenos por WhatsApp
        </a>
      </section>

      <footer className="bg-cream px-5 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Original Mushroom Coffee GE</p>
        <p className="mt-1">Desde 1995 · Más de 15 países de Latinoamérica</p>
      </footer>
    </div>
  );
}
