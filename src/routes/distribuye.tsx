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
import habitoCafe from "@/assets/distribuir-habito-cafe.jpg";
import cafeBienestar from "@/assets/distribuir-cafe-bienestar.jpg";
import negocioCasa from "@/assets/distribuir-negocio-casa.jpg";
import { monthlyMaintenance } from "@/lib/distribution-terms";
import { LanguageToggle, useLang } from "@/lib/i18n";

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
  { icon: Building2, t: { es: "Renta y local", en: "Rent and storefront" }, d: { es: "Miles de dólares al mes antes de vender tu primer producto.", en: "Thousands of dollars a month before you sell your first product." } },
  { icon: Users, t: { es: "Empleados", en: "Employees" }, d: { es: "Sueldos, turnos, rotación y responsabilidades que no descansan.", en: "Salaries, shifts, turnover and responsibilities that never stop." } },
  { icon: Package, t: { es: "Inventario", en: "Inventory" }, d: { es: "Capital detenido en anaqueles, con riesgo de caducidad y merma.", en: "Money stuck on shelves, at risk of expiring or going to waste." } },
  { icon: Truck, t: { es: "Logística", en: "Logistics" }, d: { es: "Envíos, devoluciones y almacenes que se comen tu margen.", en: "Shipping, returns and warehouses that eat up your margin." } },
];

const industria = [
  { icon: Coffee, n: { es: "+2,000 millones", en: "2+ billion" }, l: { es: "de tazas de café se beben cada día en el mundo", en: "cups of coffee are drunk every day around the world" } },
  { icon: TrendingUp, n: { es: "El 2.º producto", en: "The #2 product" }, l: { es: "más comercializado del planeta, solo detrás del petróleo", en: "most traded on the planet, second only to oil" } },
  { icon: HeartPulse, n: { es: "+6 billones USD", en: "$6+ trillion USD" }, l: { es: "vale la industria global del bienestar y sigue creciendo", en: "is the value of the global wellness industry, and it keeps growing" } },
  { icon: Repeat, n: { es: "Consumo diario", en: "Daily consumption" }, l: { es: "el café no se vende una vez: se compra todos los días", en: "coffee isn't sold once: people buy it every day" } },
];

const modelos = [
  {
    icon: Store,
    t: { es: "Menudeo tradicional", en: "Traditional retail" },
    d: {
      es: "Compras o rentas un local, surtes producto y vendes al público de tu zona. Altos costos fijos y tu negocio depende de que abras la puerta todos los días.",
      en: "You buy or rent a store, stock product and sell to people in your area. High fixed costs, and your business depends on opening the door every day.",
    },
    destacado: false,
  },
  {
    icon: HandCoins,
    t: { es: "Venta directa", en: "Direct sales" },
    d: {
      es: "Vendes al mayoreo o al cliente final. Si no vendes, no ganas: es intercambiar tiempo por dinero, y cuando paras, para el ingreso.",
      en: "You sell wholesale or to the end customer. If you don't sell, you don't earn: you trade time for money, and when you stop, the income stops.",
    },
    destacado: false,
  },
  {
    icon: Users,
    t: { es: "Marketing relacional", en: "Relationship marketing" },
    d: {
      es: "El modelo inteligente: conectas al cliente final directamente con la empresa y cada vez que compra, generas una regalía. Haces el trabajo una vez bien hecho y cobras por siempre.",
      en: "The smart model: you connect the end customer directly with the company, and every time they buy, you earn a royalty. Do the work well once and keep getting paid.",
    },
    destacado: true,
  },
];

const beneficiosBase = [
  { icon: BadgePercent, t: { es: "40% de descuento en productos", en: "40% discount on products" } },
  { icon: Globe, t: { es: "Operación en 16 países para distribuir la marca", en: "Operations in 16 countries to distribute the brand" } },
  { icon: Truck, t: { es: "Sistema de envíos automatizado a todos los países", en: "Automated shipping system to every country" } },
  { icon: Laptop, t: { es: "Oficina virtual 24/7 para administrar tu negocio", en: "24/7 virtual office to manage your business" } },
  { icon: UserCheck, t: { es: "Acompañamiento de un profesional para desarrollar el negocio", en: "Guidance from a professional to grow your business" } },
  { icon: MonitorSmartphone, t: { es: "Página personalizada para promover tu negocio", en: "Personalized website to promote your business" } },
  { icon: GraduationCap, t: { es: "Sistema de educación continua", en: "Ongoing training system" } },
];

const paquetes = [
  {
    nombre: { es: "Básico", en: "Basic" },
    precio: "$100",
    desc: { es: "La puerta de entrada al negocio.", en: "Your entry point into the business." },
    items: [
      { es: "4 productos", en: "4 products" },
      { es: "Los 7 beneficios generales de la empresa", en: "The company's 7 general benefits" },
    ],
    destacado: false,
  },
  {
    nombre: { es: "Emprendedor", en: "Entrepreneur" },
    precio: "$200",
    desc: { es: "Producto para empezar a mover.", en: "Product to start moving." },
    items: [
      { es: "7 a 9 productos (según país)", en: "7 to 9 products (depending on country)" },
      { es: "+5% adicional en ganancias por 2 meses", en: "+5% extra earnings for 2 months" },
      { es: "Bono de $25 USD por cada referido que adquiera este paquete", en: "$25 USD bonus for each referral who gets this package" },
    ],
    destacado: false,
  },
  {
    nombre: { es: "Profesional", en: "Professional" },
    precio: "$500",
    desc: { es: "Para arrancar con inventario serio.", en: "To start with serious inventory." },
    items: [
      { es: "20 a 23 productos (según país)", en: "20 to 23 products (depending on country)" },
      { es: "+6% adicional en ganancias por 4 meses", en: "+6% extra earnings for 4 months" },
      { es: "Bono de $75 USD por cada referido que adquiera este paquete", en: "$75 USD bonus for each referral who gets this package" },
    ],
    destacado: false,
  },
  {
    nombre: { es: "Máximo Beneficio", en: "Maximum Benefit" },
    precio: "$1,000",
    desc: { es: "La posición más fuerte desde el día uno.", en: "The strongest position from day one." },
    items: [
      { es: "40 a 47 productos (según país)", en: "40 to 47 products (depending on country)" },
      { es: "+7% adicional en ganancias por 6 meses", en: "+7% extra earnings for 6 months" },
      { es: "Bono de $150 USD por cada referido que adquiera este paquete", en: "$150 USD bonus for each referral who gets this package" },
    ],
    destacado: true,
  },
];

const manerasDeGanar = [
  {
    icon: BadgePercent,
    t: { es: "Ganancia inmediata", en: "Immediate profit" },
    d: {
      es: "Compra tu paquete, obtén 40% de descuento y genera ganancias desde tu primera venta con tu página personalizada.",
      en: "Buy your package, get a 40% discount and earn from your very first sale with your personalized website.",
    },
  },
  {
    icon: Repeat,
    t: { es: "Ingresos recurrentes", en: "Recurring income" },
    d: {
      es: "Fideliza clientes que compran directo a la empresa y genera ingresos cada vez que consumen, mes tras mes.",
      en: "Build loyal customers who buy directly from the company and earn every time they reorder, month after month.",
    },
  },
  {
    icon: Handshake,
    t: { es: "Bonos por recomendación", en: "Referral bonuses" },
    d: {
      es: "Recomienda la distribución de la marca y genera un bono por cada persona que inicie con su paquete.",
      en: "Recommend distributing the brand and earn a bonus for every person who starts with their package.",
    },
  },
];

const duplicacion = [
  { paso: { es: "Tú fidelizas", en: "You build loyalty with" }, n: "5" },
  { paso: { es: "Ellos comparten con 5", en: "They share with 5" }, n: "25" },
  { paso: { es: "Esos 25 comparten con 5", en: "Those 25 share with 5" }, n: "125" },
  { paso: { es: "Y la comunidad crece a", en: "And the community grows to" }, n: "625" },
];

function Distribuye() {
  const { t, pick } = useLang();
  const m = monthlyMaintenance;
  return (
    <div className="min-h-screen">
      <header className="relative flex items-center justify-between gap-3 bg-cream px-5 pb-4 pt-7">
        <LanguageToggle className="absolute right-3 top-1.5" />
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> {t("Volver", "Back")}
        </Link>
        <span className="text-right font-serif text-lg font-bold tracking-tight sm:text-xl">
          Original Mushroom Coffee <span className="text-primary">GE</span>
        </span>
      </header>

      {/* Hero */}
      <section className="distribution-photo distribution-photo-dark distribution-photo-hero bg-caramel px-5 py-14 text-center text-primary-foreground">
        <img src={habitoCafe} alt="" aria-hidden="true" width={1600} height={1008} fetchPriority="high" className="distribution-photo-image" />
        <div className="distribution-photo-content mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em]">{t("Oportunidad de negocio", "Business opportunity")}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {t("No cambiamos hábitos. Solo los mejoramos.", "We don't change habits. We just make them better.")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            {t(
              "La gente ya toma café todos los días. Tu negocio no es convencerla de un hábito nuevo: es ofrecerle una mejor versión del que ya ama.",
              "People already drink coffee every day. Your business isn't convincing them of a new habit: it's offering a better version of the one they already love.",
            )}
          </p>
          <a href="#paquetes" className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-primary py-4 font-serif text-2xl font-semibold transition hover:brightness-110">
            <Rocket className="h-6 w-6" /> {t("Quiero distribuir la marca", "I want to distribute the brand")}
          </a>
        </div>
      </section>

      {/* Industria */}
      <section className="distribution-photo distribution-photo-light bg-cream px-5 py-14">
        <img src={cafeBienestar} alt="" aria-hidden="true" width={1600} height={1008} loading="lazy" className="distribution-photo-image" />
        <div className="distribution-photo-content mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("La industria", "The industry")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Dos gigantes que crecen todos los días", "Two giants that grow every day")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            {t(
              "El café es uno de los productos más consumidos del planeta, y la industria del bienestar no deja de crecer. Tu producto vive justo donde se cruzan.",
              "Coffee is one of the most consumed products on the planet, and the wellness industry keeps growing. Your product lives right where they meet.",
            )}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industria.map(({ icon: I, n, l }) => (
              <div key={l.es} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                <I className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
                <p className="mt-3 font-serif text-3xl font-bold leading-none text-primary">{pick(n)}</p>
                <p className="mt-2 text-sm leading-relaxed">{pick(l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. El problema */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("El problema", "The problem")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Iniciar un negocio tradicional cuesta caro", "Starting a traditional business is expensive")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            {t(
              "Antes de vender tu primer producto, un negocio convencional ya te debe miles de dólares.",
              "Before you sell your first product, a conventional business already costs you thousands of dollars.",
            )}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dolores.map(({ icon: I, t: titulo, d }) => (
              <div key={titulo.es} className="rounded-xl border bg-card p-6 text-center shadow-sm">
                <AlertTriangle className="mx-auto h-6 w-6 text-destructive" strokeWidth={1.75} />
                <I className="mx-auto mt-3 h-8 w-8 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-xl font-semibold text-primary">{pick(titulo)}</h3>
                <p className="mt-2 text-sm leading-relaxed">{pick(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. La solución */}
      <section className="distribution-photo distribution-photo-dark bg-caramel px-5 py-14 text-primary-foreground">
        <img src={negocioCasa} alt="" aria-hidden="true" width={1600} height={1008} loading="lazy" className="distribution-photo-image" />
        <div className="distribution-photo-content mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em]">{t("La solución", "The solution")}</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{t("El modelo inteligente", "The smart model")}</h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl">
            {t(
              "Distribuye una marca con respaldo desde 1995 y presencia en más de 15 países de Latinoamérica, con un sistema operativo completo ya listo para operar: producto, envíos, oficina virtual y educación.",
              "Distribute a brand backed since 1995 and present in more than 15 Latin American countries, with a complete system ready to run: product, shipping, virtual office and training.",
            )}
          </p>
          <p className="mx-auto mt-4 max-w-xl font-serif text-xl">
            {t(
              "Tú no construyes la empresa. La empresa ya existe: tú construyes tu negocio sobre ella.",
              "You don't build the company. The company already exists: you build your business on top of it.",
            )}
          </p>
        </div>
      </section>

      {/* 3. Los 3 modelos */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Comparativa", "Comparison")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Las 3 formas de distribuir un producto", "The 3 ways to distribute a product")}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {modelos.map(({ icon: I, t: titulo, d, destacado }) => (
              <div
                key={titulo.es}
                className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                  destacado ? "border-primary bg-cream ring-2 ring-primary" : "bg-card"
                }`}
              >
                {destacado && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {t("El modelo inteligente", "The smart model")}
                  </span>
                )}
                <I className="h-10 w-10 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-2xl font-semibold text-primary">{pick(titulo)}</h3>
                <p className="mt-2 flex-1 leading-relaxed">{pick(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Inversión blindada */}
      <section className="bg-cream px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Cómo iniciar", "How to start")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Una inversión blindada", "A protected investment")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            {t(
              "Sin renta, sin empleados, sin logística. Desde el paquete base, todo esto ya está incluido:",
              "No rent, no employees, no logistics. Starting with the base package, all of this is already included:",
            )}
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {beneficiosBase.map(({ icon: I, t: texto }) => (
              <div key={texto.es} className="flex items-center gap-3 rounded-xl border bg-card p-4 text-left shadow-sm">
                <I className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                <p className="font-semibold leading-snug">{pick(texto)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mantenimiento-mensual" className="border-y border-border bg-secondary px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <Repeat className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
            <h2 id="mantenimiento-mensual" className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              {t("Bajo costo de mantenimiento", "Low maintenance cost")}
            </h2>
            <p className="mt-4 font-serif text-xl leading-relaxed">
              {t("Compra al menos ", "Buy at least ")}
              <strong>{m.minimumPoints} {t("puntos cada mes", "points each month")}</strong>
              {t(" para mantener tu negocio activo y recibir regalías.", " to keep your business active and receive royalties.")}
            </p>
          </div>
          <dl className="mx-auto mt-8 grid max-w-3xl gap-6 text-center sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">{t("Compra mínima mensual", "Minimum monthly purchase")}</dt>
              <dd className="mt-2 font-serif text-3xl font-bold">{m.minimumPoints} {t("puntos", "points")}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">{t("Productos en promedio", "Average products")}</dt>
              <dd className="mt-2 font-serif text-3xl font-bold">{m.averageProducts} {t("productos", "products")}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-muted-foreground">{t("Costo mensual promedio", "Average monthly cost")}</dt>
              <dd className="mt-2 font-serif text-3xl font-bold">${m.averageCostUsd} USD</dd>
            </div>
          </dl>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            {t(
              `La cantidad de productos y el costo son aproximados; el requisito es comprar al menos ${m.minimumPoints} puntos al mes.`,
              `The number of products and the cost are approximate; the requirement is to buy at least ${m.minimumPoints} points per month.`,
            )}
          </p>
        </div>
      </section>

      {/* 5. Paquetes */}
      <section id="paquetes" className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Paquetes de inicio", "Starter packages")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Elige cómo arrancar", "Choose how to start")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-serif text-xl text-muted-foreground">
            {t(
              "Todos los paquetes incluyen los 7 beneficios generales. La diferencia es cuánto producto y cuánto beneficio extra llevas desde el inicio.",
              "Every package includes the 7 general benefits. The difference is how much product and extra benefit you get from the start.",
            )}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paquetes.map((p) => (
              <div
                key={p.nombre.es}
                className={`flex flex-col rounded-xl border p-6 shadow-sm ${
                  p.destacado ? "border-primary bg-cream ring-2 ring-primary" : "bg-card"
                }`}
              >
                {p.destacado && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {t("Máximo beneficio", "Maximum benefit")}
                  </span>
                )}
                <h3 className="text-xl font-semibold text-primary">{pick(p.nombre)}</h3>
                <p className="mt-2 font-serif text-5xl font-bold">
                  {p.precio} <span className="text-lg font-semibold text-muted-foreground">USD</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{pick(p.desc)}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {p.items.map((item) => (
                    <li key={item.es} className="flex items-start gap-2 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {pick(item)}
                    </li>
                  ))}
                </ul>
                <a
                  href="#formulario-distribuidor"
                  className={`mt-6 rounded-full py-3 text-center font-serif text-lg font-semibold transition hover:brightness-110 ${
                    p.destacado ? "bg-primary text-primary-foreground" : "border-2 border-primary text-primary"
                  }`}
                >
                  {t("Comenzar con este", "Start with this one")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 3 maneras de ganar */}
      <section className="bg-caramel px-5 py-14 text-primary-foreground">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em]">{t("Tus ingresos", "Your income")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("3 maneras de ganar", "3 ways to earn")}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {manerasDeGanar.map(({ icon: I, t: titulo, d }, i) => (
              <div key={titulo.es} className="rounded-xl bg-card p-6 text-center text-card-foreground shadow-sm">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif text-xl font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <I className="mx-auto mt-4 h-8 w-8 text-primary" strokeWidth={1.75} />
                <h3 className="mt-3 text-2xl font-semibold text-primary">{pick(titulo)}</h3>
                <p className="mt-2 leading-relaxed">{pick(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Vendedor vs comunidad */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("La clave", "The key")}</p>
          <h2 className="mt-4 text-center text-4xl font-bold leading-tight md:text-5xl">
            {t("Vender solo vs. construir comunidad", "Selling alone vs. building a community")}
          </h2>
          <figure className="mx-auto mt-10 max-w-3xl rounded-xl border bg-cream p-8 text-center shadow-sm">
            <Quote className="mx-auto h-8 w-8 text-primary" strokeWidth={1.75} />
            <blockquote className="mt-4 font-serif text-2xl font-medium leading-relaxed">
              “{t(
                "Es preferible ganar el 1% del esfuerzo de 100 personas que el 100% de nuestro propio esfuerzo. Por eso, en lugar de salir a vender miles de productos, creamos comunidades de consumo.",
                "It's better to earn 1% of the effort of 100 people than 100% of our own effort. That's why, instead of going out to sell thousands of products, we build consumer communities.",
              )}”
            </blockquote>
          </figure>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary">{t("Una persona vendiendo sola", "One person selling alone")}</h3>
              <p className="mt-2 leading-relaxed">
                {t(
                  "Si dejas de vender, dejas de ganar. Tu ingreso tiene techo: las horas de tu día.",
                  "If you stop selling, you stop earning. Your income has a ceiling: the hours in your day.",
                )}
              </p>
              <p className="mt-4 font-serif text-4xl font-bold text-muted-foreground">1 → 1 → 1</p>
            </div>
            <div className="rounded-xl border border-primary bg-cream p-6 shadow-sm ring-2 ring-primary">
              <h3 className="text-2xl font-semibold text-primary">{t("Una comunidad que crece", "A growing community")}</h3>
              <p className="mt-2 leading-relaxed">
                {t(
                  "Fidelizas clientes y ellos recomiendan. El crecimiento se duplica solo: 4, 8, 16, 32…",
                  "You build loyal customers and they recommend you. Growth multiplies on its own: 4, 8, 16, 32…",
                )}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {duplicacion.map((d, i) => (
                  <div key={d.n} className="flex items-center gap-2">
                    {i > 0 && <span className="font-serif text-2xl text-primary">→</span>}
                    <div className="rounded-lg bg-card px-4 py-2 text-center shadow-sm">
                      <p className="font-serif text-3xl font-bold text-primary">{d.n}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{pick(d.paso)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <Truck className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">{t("La empresa hace los envíos", "The company handles shipping")}</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <Headset className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">{t("Un call center trabaja por ti", "A call center works for you")}</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <MonitorSmartphone className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
              <p className="text-sm font-semibold leading-snug">{t("Una página presenta por ti", "A website presents for you")}</p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl bg-caramel p-8 text-center text-primary-foreground shadow-sm">
            <TrendingUp className="mx-auto h-8 w-8" strokeWidth={1.75} />
            <p className="mt-4 font-serif text-2xl font-medium leading-relaxed">
              {t("Si tu comunidad consume 4 productos al mes, podrías generar ingresos de hasta ", "If your community consumes 4 products a month, you could earn up to ")}
              <span className="font-bold">$3,500 USD</span>
              {t(", escalables creando más comunidades.", ", and scale it by building more communities.")}
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA final + formulario */}
      <section id="formulario-distribuidor" className="bg-caramel-light px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{t("Comienza hoy", "Start today")}</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            {t("Inicia tu distribución profesional", "Start your professional distribution")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-serif text-xl text-muted-foreground">
            {t(
              "Déjanos tus datos y un profesional te contacta para ayudarte a elegir tu paquete y arrancar paso a paso.",
              "Leave us your details and a professional will contact you to help you choose your package and get started step by step.",
            )}
          </p>
          <FormularioDistribuidor />
        </div>
      </section>

      <footer className="bg-cream px-5 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Original Mushroom Coffee GE</p>
        <p className="mt-1">{t("Desde 1995 · Más de 15 países de Latinoamérica", "Since 1995 · More than 15 Latin American countries")}</p>
      </footer>
    </div>
  );
}
