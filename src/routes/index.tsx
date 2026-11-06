import { createFileRoute } from "@tanstack/react-router";
import { Star, Target, Zap, Leaf, Shield, MessageCircle, Truck, Heart } from "lucide-react";
import hero from "@/assets/hero-cafe.jpg";
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
      { name: "description", content: "Café enriquecido con ganoderma para energía, enfoque y bienestar. Pide por WhatsApp." },
      { property: "og:title", content: "Original Mushroom Coffee GE" },
      { property: "og:description", content: "Café enriquecido con ganoderma. Energía sin nervios, enfoque y bienestar diario." },
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
  { t: "Ganoderma de verdad", d: "Usamos ganoderma lucidum (reishi), el hongo milenario conocido como “el hongo de la inmortalidad”." },
  { t: "Energía sin nervios", d: "Disfruta tu café con un despertar suave, sin bajones ni ansiedad a media tarde." },
  { t: "Sabor que se antoja", d: "Café de cuerpo completo, aroma intenso y un final suave. Nada de sabores raros." },
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
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
          </div>
          <p className="mt-2 font-serif text-lg">Miles de clientes felices</p>
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
          <img src={hero} alt="Bolsa de Original Mushroom Coffee GE con ganoderma y taza de café" width={1280} height={896} className="mt-8 w-full rounded-xl" />
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

      <footer className="bg-cream py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Original Mushroom Coffee GE
      </footer>
    </div>
  );
}
