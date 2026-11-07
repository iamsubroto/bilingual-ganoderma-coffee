import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  BadgePercent,
  Building2,
  Coffee,
  Globe,
  HandCoins,
  Handshake,
  HeartPulse,
  Headset,
  Laptop,
  MonitorSmartphone,
  Package,
  GraduationCap,
  Quote,
  Repeat,
  Rocket,
  Store,
  TrendingUp,
  Truck,
  Users,
  UserCheck,
  Check,
} from "lucide-react";
import { FormularioDistribuidor } from "@/components/FormularioDistribuidor";

export const Route = createFileRoute("/distribuye")({
  head: () => ({
    meta: [
      { title: "Distribuye la Marca | Original Mushroom Coffee GE" },
      { name: "description", content: "Convierte el café en tu negocio: distribuye una marca con respaldo desde 1995, operación en 16 países y un sistema completo listo para operar." },
      { property: "og:title", content: "Distribuye Original Mushroom Coffee GE" },
      { property: "og:description", content: "Un modelo de distribución inteligente: sin renta, sin empleados, sin logística. Elige tu paquete y comienza hoy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Distribuye,
});

const dolores = [
  { icon: Building2, t: "Renta y local", d: "Miles de dólares al mes antes de vender tu primer producto." },
  { icon: Users, t: "Empleados", d: "Sueldos, turnos, rotación y responsabilidades que no descansan." },
  { icon: Package, t: "Inventario", d: "Capital detenido en anaqueles, con riesgo de caducidad y merma." },
  { icon: Truck, t: "Logística", d: "Envíos, devoluciones y almacenes que se comen tu margen." },
];

const industria = [
  { icon: Coffee, n: "+2,000 millones", l: "de tazas de café se beben cada día en el mundo" },
  { icon: TrendingUp, n: "El 2.º producto", l: "más comercializado del planeta, solo detrás del petróleo" },
  { icon: HeartPulse, n: "+6 billones USD", l: "vale la industria global del bienestar y sigue creciendo" },
  { icon: Repeat, n: "Consumo diario", l: "el café no se vende una vez: se compra todos los días" },
];

const modelos = [
  {
    icon: Store,
    t: "Menudeo tradicional",
    d: "Compras o rentas un local, surtes producto y vendes al público de tu zona. Altos costos fijos y tu negocio depende de que abras la puerta todos los días.",
    destacado: false,
  },
  {
    icon: HandCoins,
    t: "Venta directa",
    d: "Vendes al mayoreo o al cliente final. Si no vendes, no ganas: es intercambiar tiempo por dinero, y cuando paras, para el ingreso.",
    destacado: false,
  },
  {
    icon: Users,
    t: "Marketing relacional",
    d: "El modelo inteligente: conectas al cliente final directamente con la empresa y cada vez que compra, generas una regalía. Haces el trabajo una vez bien hecho y cobras por siempre.",
    destacado: true,
  },
];

const beneficiosBase = [
  { icon: BadgePercent, t: "40% de descuento en productos" },
  { icon: Globe, t: "Operación en 16 países para distribuir la marca" },
  { icon: Truck, t: "Sistema de envíos automatizado a todos los países" },
  { icon: Laptop, t: "Oficina virtual 24/7 para administrar tu negocio" },
  { icon: UserCheck, t: "Acompañamiento de un profesional para desarrollar el negocio" },
  { icon: MonitorSmartphone, t: "Página personalizada para promover tu negocio" },
  { icon: GraduationCap, t: "Sistema de educación continua" },
];

const paquetes = [
  {
    nombre: "Básico",
    precio: "$100",
    desc: "La puerta de entrada al negocio.",
    items: ["4 productos", "Los 7 beneficios generales de la empresa"],
    destacado: false,
  },
  {
    nombre: "Emprendedor",
    precio: "$200",
    desc: "Producto para empezar a mover.",
    items: ["7 a 9 productos (según país)", "+5% adicional en ganancias por 2 meses", "Bono de $25 USD por cada referido que adquiera este paquete"],
    destacado: false,
  },
  {
    nombre: "Profesional",
    precio: "$500",
    desc: "Para arrancar con inventario serio.",
    items: ["20 a 23 productos (según país)", "+6% adicional en ganancias por 4 meses", "Bono de $75 USD por cada referido que adquiera este paquete"],
    destacado: false,
  },
  {
    nombre: "Máximo Beneficio",
    precio: "$1,000",
    desc: "La posición más fuerte desde el día uno.",
    items: ["40 a 47 productos (según país)", "+7% adicional en ganancias por 6 meses", "Bono de $150 USD por cada referido que adquiera este paquete"],
    destacado: true,
  },
];

const manerasDeGanar = [
  {
    icon: BadgePercent,
    t: "Ganancia inmediata",
    d: "Compra tu paquete, obtén 40% de descuento y genera ganancias desde tu primera venta con tu página personalizada.",
  },
  {
    icon: Repeat,
    t: "Ingresos recurrentes",
    d: "Fideliza clientes que compran directo a la empresa y genera ingresos cada vez que consumen, mes tras mes.",
  },
  {
    icon: Handshake,
    t: "Bonos por recomendación",
    d: "Recomienda la distribución de la marca y genera un bono por cada persona que inicie con su paquete.",
  },
];

const duplicacion = [
  { paso: "Tú fidelizas", n: "5" },
  { paso: "Ellos comparten con 5", n: "25" },
  { paso: "Esos 25 comparten con 5", n: "125" },
  { paso: "Y la comunidad crece a", n: "625" },
];

function Distribuye() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between bg-cream px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Volver
        </Link>
        <span className="font-serif text-xl font-bold tracking-tight">
          Original Mushroom Coffee <span className="text-primary">GE</span>
        </span>
      </header>

      {/* Hero */}
      <section className="bg-caramel px-5 py-14 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em]">Oportunidad de negocio</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            No cambiamos hábitos. Solo los mejoramos.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            La gente ya toma café todos los días. Tu negocio no es convencerla de un hábito nuevo: es ofrecerle una mejor versión del que ya ama.
          </p>
          <a href="#paquetes" className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold transition hover:brightness-110">
            <Rocket className="h-6 w-6" /> Quiero distribuir la marca
          </a>
        </div>
      </section>

      {/* Industria */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">La industria</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Dos gigantes que crecen todos los días
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            El café es uno de los productos más consumidos del planeta, y la industria del bienestar no deja de crecer. Tu producto vive justo donde se cruzan.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industria.map(({ icon: I, n, l }) => (
              <div key={l} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                <I className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
                <p className="mt-3 font-serif text-3xl font-bold leading-none text-primary">{n}</p>
                <p className="mt-2 text-sm leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. El problema */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">El problema</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Iniciar un negocio tradicional cuesta caro
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            Antes de vender tu primer producto, un negocio convencional ya te debe miles de dólares.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dolores.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                <AlertTriangle className="mx-auto h-6 w-6 text-destructive" strokeWidth={1.75} />
                <I className="mx-auto mt-3 h-8 w-8 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-xl font-semibold text-primary">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. La solución */}
      <section className="bg-caramel px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em]">La solución</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">El modelo inteligente</h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            Distribuye una marca con respaldo desde 1995 y presencia en más de 15 países de Latinoamérica, con un sistema operativo completo ya listo para operar: producto, envíos, oficina virtual y educación.
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-xl">
            Tú no construyes la empresa. La empresa ya existe: tú construyes tu negocio sobre ella.
          </p>
        </div>
      </section>

      {/* 3. Los 3 modelos */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Comparativa</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Las 3 formas de distribuir un producto
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {modelos.map(({ icon: I, t, d, destacado }) => (
              <div
                key={t}
                className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                  destacado ? "border-primary bg-cream ring-2 ring-primary" : "bg-card"
                }`}
              >
                {destacado && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    El modelo inteligente
                  </span>
                )}
                <I className="h-10 w-10 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-2xl font-semibold text-primary">{t}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Inversión blindada */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Cómo iniciar</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Una inversión blindada
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            Sin renta, sin empleados, sin logística. Desde el paquete base, todo esto ya está incluido:
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {beneficiosBase.map(({ icon: I, t }) => (
              <div key={t} className="flex items-center gap-3 rounded-xl border bg-card p-4 text-left shadow-sm">
                <I className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                <p className="font-semibold leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Paquetes */}
      <section id="paquetes" className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">Paquetes de inicio</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Elige cómo arrancar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            Todos los paquetes incluyen los 7 beneficios generales. La diferencia es cuánto producto y cuánto beneficio extra llevas desde el inicio.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paquetes.map((p) => (
              <div
                key={p.nombre}
                className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                  p.destacado ? "border-primary bg-cream ring-2 ring-primary" : "bg-card"
                }`}
              >
                {p.destacado && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    Máximo beneficio
                  </span>
                )}
                <h3 className="text-xl font-semibold text-primary">{p.nombre}</h3>
                <p className="mt-2 font-serif text-5xl font-bold">
                  {p.precio} <span className="text-lg font-semibold text-muted-foreground">USD</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario-distribuidor"
                  className={`mt-6 rounded-full py-3 text-center font-serif text-lg font-semibold transition hover:brightness-110 ${
                    p.destacado ? "bg-primary text-primary-foreground" : "border-2 border-primary text-primary"
                  }`}
                >
                  Comenzar con este
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 3 maneras de ganar */}
      <section className="bg-caramel px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em]">Tus ingresos</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            3 maneras de ganar
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {manerasDeGanar.map(({ icon: I, t, d }, i) => (
              <div key={t} className="rounded-xl bg-card p-6 text-center text-card-foreground shadow-sm">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif text-xl font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <I className="mx-auto mt-4 h-8 w-8 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-2xl font-semibold text-primary">{t}</h3>
                <p className="mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Vendedor vs comunidad */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">La clave</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            Vender solo vs. construir comunidad
          </h2>
          <figure className="mx-auto mt-10 max-w-3xl rounded-xl border bg-cream p-8 text-center shadow-sm">
            <Quote className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
            <blockquote className="mt-4 font-serif text-2xl font-medium leading-relaxed">
              “Es preferible ganar el 1% del esfuerzo de 100 personas que el 100% de nuestro propio esfuerzo. Por eso, en lugar de salir a vender miles de productos, creamos comunidades de consumo.”
            </blockquote>
          </figure>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary">Una persona vendiendo sola</h3>
              <p className="mt-2 leading-relaxed">
                Si dejas de vender, dejas de ganar. Tu ingreso tiene techo: las horas de tu día.
              </p>
              <p className="mt-4 font-serif text-4xl font-bold text-muted-foreground">1 → 1 → 1</p>
            </div>
            <div className="rounded-xl border border-primary bg-cream p-6 shadow-sm ring-2 ring-primary">
              <h3 className="text-2xl font-semibold text-primary">Una comunidad que crece</h3>
              <p className="mt-2 leading-relaxed">
                Fidelizas clientes y ellos recomiendan. El crecimiento se duplica solo: 4, 8, 16, 32…
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {duplicacion.map((d, i) => (
                  <div key={d.n} className="flex items-center gap-2">
                    {i > 0 && <span className="font-serif text-2xl text-primary">→</span>}
                    <div className="rounded-lg bg-card px-4 py-2 text-center shadow-sm">
                      <p className="font-serif text-3xl font-bold text-primary">{d.n}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{d.paso}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <Truck className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">La empresa hace los envíos</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <Headset className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">Un call center trabaja por ti</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <MonitorSmartphone className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">Una página presenta por ti</p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl bg-caramel p-8 text-center text-primary-foreground shadow-sm">
            <TrendingUp className="mx-auto h-8 w-8" strokeWidth={1.75} />
            <p className="mt-4 font-serif text-2xl font-medium leading-relaxed">
              Si tu comunidad consume 4 productos al mes, podrías generar ingresos de hasta <span className="font-bold">$3,500 USD</span>, escalables creando más comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA final + formulario */}
      <section id="formulario-distribuidor" className="bg-caramel-light px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Comienza hoy</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Inicia tu distribución profesional
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-serif text-xl text-muted-foreground">
            Déjanos tus datos y un profesional te contacta para ayudarte a elegir tu paquete y arrancar paso a paso.
          </p>
          <FormularioDistribuidor />
        </div>
      </section>

      <footer className="bg-cream px-5 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Original Mushroom Coffee GE</p>
        <p className="mt-1">Desde 1995 · Más de 15 países de Latinoamérica</p>
      </footer>
    </div>
  );
}
