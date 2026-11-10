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
  Check,
} from "lucide-react";
import ganoderma from "@/assets/ganoderma-beneficios.jpg.asset.json";
import classic from "@/assets/ganocafe-classic.jpg.asset.json";
import tresEnUno from "@/assets/ganocafe-3en1.jpg.asset.json";
import schokolade from "@/assets/ganocafe-schokolade.jpg.asset.json";
import classicFria from "@/assets/classic-frio.jpg";
import tresEnUnoFria from "@/assets/3en1-frio.jpg";
import schokoladeFria from "@/assets/schokolade-frio.jpg";
import heroProductos from "@/assets/hero-productos.jpg";
import { productPrices, usd, type ProductName } from "@/lib/product-pricing";

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
    imgFria: classicFria,
    nombre: "GanoCafé Classic",
    desc: "Café negro enriquecido con ganoderma lucidum. Intenso, de cuerpo completo y sin azúcar: para los que aman el café de verdad.",
    detalle: "30 sobres de 3 g",
  },
  {
    img: tresEnUno.url,
    imgFria: tresEnUnoFria,
    nombre: "GanoCafé 3 en 1",
    desc: "Café, crema y un toque de dulzor con ganoderma lucidum. Cremoso y listo en segundos: tu taza perfecta sin complicaciones.",
    detalle: "20 sobres de 21 g",
  },
  {
    img: schokolade.url,
    imgFria: schokoladeFria,
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

const testimonios = [
  {
    nombre: "Karina P.",
    texto: "Desde que probé el 3 en 1 no me dio agruras, es algo que sufría mucho con el café normal.",
  },
  {
    nombre: "Luis R",
    texto: "Esa noche dormí muy a gusto después de tomarme mi taza de cacao, hace mucho que padecía de insomnio.",
  },
  {
    nombre: "Gerardo M",
    texto: "El café negro me dio esa claridad mental durante el día, adicional mi energía emocional subió al 100%.",
  },
];

const modelo = [
  {
    icon: Package,
    t: "Producto probado",
    d: "Vendes un café con casi 30 años de historia y presencia en más de 15 países. No empiezas de cero.",
  },
  {
    icon: Users,
    t: "Tu propio negocio",
    d: "Tú pones el ritmo: distribuye la marca en tu ciudad y haz crecer tu cartera de clientes.",
  },
  {
    icon: TrendingUp,
    t: "Consumo diario",
    d: "El café se toma todos los días: tus clientes vuelven a comprar una y otra vez, y tu negocio crece con ellos.",
  },
];

type Opcion = "subscribe" | "oneTime";

const etiquetasOpcion: Record<Opcion, string> = {
  subscribe: "Suscríbete y ahorra",
  oneTime: "Compra una vez",
};

function OpcionesPrecio({ producto, seleccion, onSeleccion }: { producto: ProductName; seleccion: Opcion; onSeleccion: (o: Opcion) => void }) {
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
              <span className="block text-sm font-bold">{etiquetasOpcion[opcion]}</span>
              <span className="mt-1 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground ${opcion === "subscribe" ? "bg-primary" : "bg-muted-foreground"}`}>
                  Ahorra {p.savePercent}%
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
          <img src={img} alt={`Caja de ${nombre} con ganoderma, preparación caliente`} width={832} height={1248} className="aspect-[2/3] w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">Caliente</span>
        </div>
        <div className="relative w-full shrink-0 snap-center">
          <img src={imgFria} alt={`${nombre} preparado como bebida fría con hielo`} width={832} height={1248} className="aspect-[2/3] w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">Fría</span>
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {[0, 1].map((i) => (
          <span key={i} className={`h-2 w-2 rounded-full transition ${activa === i ? "bg-primary" : "bg-primary-foreground/70"}`} />
        ))}
      </div>
      {activa === 0 && (
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white">
          Desliza →
        </span>
      )}
    </div>
  );
}

function Index() {
  const [seleccion, setSeleccion] = useState<Record<ProductName, Opcion>>({
    "GanoCafé Classic": "subscribe",
    "GanoCafé 3 en 1": "subscribe",
    "GanoCafé Schokolade": "subscribe",
  });

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
          <img src={heroProductos} alt="Los tres productos: GanoCafé Classic, GanoCafé 3 en 1 y GanoCafé Schokolade, con sus bebidas preparadas calientes y frías" width={1600} height={1000} className="mx-auto mt-10 w-full max-w-3xl rounded-xl shadow-lg" />
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
            <div className="flex flex-col items-center gap-1"><Globe className="h-6 w-6" />Presentes en +15 países</div>
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
          Tres formas de disfrutar el poder del ganoderma, caliente o fría, una para cada momento del día. Desliza cada producto para verlo en las dos versiones.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {productos.map((p) => (
            <div key={p.nombre} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm">
              <CarruselProducto img={p.img} imgFria={p.imgFria} nombre={p.nombre} />
              <div className="flex flex-1 flex-col p-6 text-center">
                <h3 className="text-2xl font-semibold text-primary">{p.nombre}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">{p.detalle}</p>
                <p className="mt-3 flex-1 leading-relaxed">{p.desc}</p>
                <OpcionesPrecio
                  producto={p.nombre}
                  seleccion={seleccion[p.nombre]}
                  onSeleccion={(o) => setSeleccion((prev) => ({ ...prev, [p.nombre]: o }))}
                />
                <a href={wa(`¡Hola! Quiero el ${p.nombre} ☕🍄 (${etiquetasOpcion[seleccion[p.nombre]]}: ${usd(productPrices[p.nombre][seleccion[p.nombre]].finalUsd)})`)} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-primary py-3 font-serif text-lg font-semibold text-primary-foreground transition hover:brightness-110">
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

      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Testimonios</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">
            Lo que dicen quienes ya lo probaron
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonios.map((t) => (
              <figure key={t.nombre} className="flex flex-col rounded-xl border bg-card p-6 text-left shadow-sm">
                <Quote className="h-8 w-8 text-primary" strokeWidth={1.75} />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold uppercase tracking-widest text-primary">
                  {t.nombre}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-caramel px-5 py-14 text-center text-primary-foreground">
        <h2 className="text-4xl font-bold">¿Listo para tu primera taza?</h2>
        <p className="mt-3 font-serif text-lg">Escríbenos y te ayudamos con tu pedido.</p>
        <a href={wa(MSG)} target="_blank" rel="noreferrer" className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold transition hover:brightness-110">
          <MessageCircle className="h-6 w-6" /> Escríbenos por WhatsApp
        </a>
      </section>

      <section id="modelo-de-negocio" className="mx-auto max-w-5xl px-5 py-14">
        <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Modelo de negocio</p>
        <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-6xl">
          Convierte el café en tu negocio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
          Distribuye una marca con historia, producto de consumo diario y presencia en más de 15 países.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {modelo.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-xl border bg-card p-6 text-center shadow-sm">
              <I className="mx-auto h-10 w-10 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-2xl font-semibold text-primary">{t}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/distribuye" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 font-serif text-2xl font-semibold text-primary-foreground transition hover:brightness-110">
            <Handshake className="h-6 w-6" /> Quiero distribuir la marca
          </Link>
        </div>
      </section>

      <footer className="bg-cream px-5 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Original Mushroom Coffee GE</p>
        <p className="mt-1">Desde 1995 · Más de 15 países de Latinoamérica</p>
      </footer>
    </div>
  );
}
