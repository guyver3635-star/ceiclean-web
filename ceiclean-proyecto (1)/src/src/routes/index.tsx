import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Shield,
  Droplets,
  Wrench,
  Search,
  Gauge,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Award,
  ClipboardCheck,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import baConcreteBefore from "@/assets/before-concrete.jpg";
import baConcreteAfter from "@/assets/after-concrete.jpg";
import baTileBefore from "@/assets/before-tile.jpg";
import baTileAfter from "@/assets/after-tile.jpg";
import shineImg from "@/assets/floor-shine.jpg";
import supBefore from "@/assets/supermercado-antes.jpg";
import supAfter from "@/assets/supermercado-despues.jpg";
import logoAsset from "@/assets/cei-clean-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CEI Clean | Decapado, Sellado y Mantención de Pisos en Santiago" },
      {
        name: "description",
        content:
          "Especialistas en decapado, sellado, encerado y mantención de pisos institucionales, comerciales y residenciales en Santiago de Chile. Solicita tu cotización.",
      },
      { property: "og:title", content: "CEI Clean | Tratamiento Profesional de Pisos" },
      {
        property: "og:description",
        content:
          "Recuperamos, protegemos y mantenemos pisos con procedimientos técnicos y resultados duraderos.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const WHATSAPP_NUMBER = "56968204483";
const WHATSAPP_TEXT = "Hola, me interesa una cotización de servicios de limpieza";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const services = [
  { icon: Droplets, title: "Decapado de pisos", desc: "Remoción profunda de ceras antiguas, suciedad incrustada y capas degradadas." },
  { icon: Shield, title: "Sellado y encerado", desc: "Protección de larga duración con selladores y ceras técnicas de alto brillo." },
  { icon: Wrench, title: "Mantención periódica", desc: "Planes mensuales y trimestrales para conservar el piso impecable." },
  { icon: Sparkles, title: "Recuperación de brillo", desc: "Devolvemos el brillo espejo a pisos opacos, rayados o desgastados." },
  { icon: Gauge, title: "Lavado técnico de pisos", desc: "Limpieza profesional con máquinas rotativas y químicos especializados." },
  { icon: Search, title: "Diagnóstico del piso", desc: "Evaluación técnica gratuita para determinar el tratamiento ideal." },
];

const reasons = [
  { icon: Award, title: "Experiencia en terreno", desc: "Años trabajando en comercio, clínicas, oficinas, colegios y residencias." },
  { icon: ClipboardCheck, title: "Procedimientos técnicos", desc: "Protocolos definidos por tipo de piso y nivel de uso." },
  { icon: Search, title: "Evaluación previa", desc: "Visitamos y diagnosticamos antes de cotizar." },
  { icon: Shield, title: "Trabajo ordenado", desc: "Responsabilidad y puntualidad." },
  { icon: Sparkles, title: "Resultados duraderos", desc: "Tratamientos que mantienen el brillo por meses." },
  { icon: Users, title: "Atención personalizada", desc: "Cada cliente recibe una propuesta a medida." },
];

const steps = [
  "Evaluación del piso",
  "Prueba o diagnóstico",
  "Decapado o limpieza profunda",
  "Sellado",
  "Aplicación de capas de terminación",
  "Revisión final",
];

const comparisons = [
  { before: baConcreteBefore, after: baConcreteAfter, label: "Cemento pulido industrial", desc: "Bodega con manchas de aceite, polvo y marcas de montacargas." },
  { before: baTileBefore, after: baTileAfter, label: "Baldosa cerámica comercial", desc: "Vestíbulo con suciedad incrustada y juntas opacas." },
  { before: supBefore, after: supAfter, label: "Supermercado — piso terrazo", desc: "Piso opaco y desgastado en pasillo comercial, recuperado con brillo espejo." },
];

function Landing() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("¡Cotización enviada! Te contactaremos pronto.");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-right" />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="CEI Clean - Tratamiento profesional de pisos duros"
              width={1113}
              height={651}
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
            <a href="#porque" className="hover:text-foreground transition">Por qué elegirnos</a>
            <a href="#antes-despues" className="hover:text-foreground transition">Antes y después</a>
            <a href="#proceso" className="hover:text-foreground transition">Proceso</a>
            <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
          </nav>
          <Button asChild size="sm">
            <a href="#cotizacion">Cotizar</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
              <Sparkles className="size-3.5" /> Santiago de Chile
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Especialistas en <span className="text-primary">decapado, sellado</span> y mantención de pisos
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Recuperamos, protegemos y mantenemos pisos institucionales, comerciales y residenciales
              con procedimientos técnicos y resultados profesionales.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-[var(--shadow-elegant)]">
                <a href="#cotizacion">Solicitar cotización <ArrowRight className="size-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>
            <div className="flex gap-6 pt-4 text-sm">
              <div><div className="text-2xl font-bold text-primary">+10</div><div className="text-muted-foreground">Años de experiencia</div></div>
              <div><div className="text-2xl font-bold text-primary">500+</div><div className="text-muted-foreground">Proyectos</div></div>
              <div><div className="text-2xl font-bold text-primary">100%</div><div className="text-muted-foreground">Garantía técnica</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl blur-3xl opacity-30" style={{ background: "var(--gradient-hero)" }} />
            <img
              src={heroImg}
              alt="Operario realizando mantención de piso con máquina rotativa"
              width={1600}
              height={1000}
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros servicios</h2>
            <p className="mt-3 text-muted-foreground">Soluciones técnicas para todo tipo de piso.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/40 transition-all">
                <div className="size-12 rounded-xl grid place-items-center mb-4 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                  <Icon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section id="porque" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={shineImg} alt="Piso brillante con sellado profesional" width={1400} height={800} loading="lazy" className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">¿Por qué elegirnos?</h2>
            <p className="text-muted-foreground mb-8">Calidad técnica, responsabilidad y resultados que se notan.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="size-10 shrink-0 rounded-lg bg-secondary grid place-items-center text-secondary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section id="antes-despues" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Antes y después</h2>
            <p className="mt-3 text-muted-foreground">Resultados reales en pisos institucionales y comerciales.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisons.map(({ before, after, label, desc }) => (
              <figure key={label} className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border bg-card">
                <div className="grid grid-cols-2 h-56 md:h-64">
                  <div className="relative">
                    <img src={before} alt={`Antes: ${desc}`} width={1536} height={864} loading="lazy" className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-foreground/80 text-background text-xs font-semibold">Antes</span>
                  </div>
                  <div className="relative">
                    <img src={after} alt={`Después: ${desc}`} width={1536} height={864} loading="lazy" className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Después</span>
                  </div>
                </div>
                <figcaption className="px-5 py-4 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-medium">{label}</span>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-semibold shrink-0">Tratamiento completo</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestro proceso</h2>
            <p className="mt-3 text-muted-foreground">Un método claro y técnico, paso a paso.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={step} className="relative p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)]">
                <div className="absolute -top-4 -left-2 size-12 rounded-xl grid place-items-center font-bold text-lg text-primary-foreground shadow-[var(--shadow-elegant)]" style={{ background: "var(--gradient-hero)" }}>
                  {i + 1}
                </div>
                <h3 className="font-semibold mt-4">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COTIZACIÓN */}
      <section id="cotizacion" className="py-20 md:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold">Solicita tu cotización</h2>
            <p className="text-muted-foreground">
              Completa el formulario y te enviaremos una propuesta técnica con presupuesto detallado.
            </p>
            <div className="space-y-3 pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition">
                <MessageCircle className="size-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">WhatsApp directo</div>
                  <div className="text-xs text-muted-foreground">Respuesta inmediata</div>
                </div>
              </a>
<a href="mailto:contactoceiclean@gmail.com" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition">
                <Mail className="size-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">contactoceiclean@gmail.com</div>
                  <div className="text-xs text-muted-foreground">Te respondemos en menos de 24h</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
                <MapPin className="size-5 text-primary" />
                <div>
                  <div className="font-semibold text-sm">Santiago de Chile</div>
                  <div className="text-xs text-muted-foreground">Toda la Región Metropolitana</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] grid sm:grid-cols-2 gap-4">
            <Field label="Nombre" name="nombre" required />
            <Field label="Teléfono" name="telefono" type="tel" required />
            <Field label="Correo" name="correo" type="email" required />
            <Field label="Comuna" name="comuna" required />
            <SelectField
              label="Tipo de piso"
              name="tipo_piso"
              options={["Cerámico", "Porcelanato", "Flexit/Vinílico", "Madera", "Cemento pulido", "Mármol/Granito", "Otro"]}
            />
            <Field label="Metros cuadrados aprox." name="m2" type="number" />
            <SelectField
              label="Servicio requerido"
              name="servicio"
              options={["Decapado", "Sellado y encerado", "Mantención periódica", "Recuperación de brillo", "Lavado técnico", "Diagnóstico"]}
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Fotos del piso</label>
              <input type="file" name="fotos" multiple accept="image/*" className="text-sm file:mr-3 file:px-3 file:py-2 file:rounded-md file:border-0 file:bg-secondary file:text-secondary-foreground file:font-medium file:cursor-pointer border border-input rounded-md p-2 bg-background" />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="text-sm font-medium">Mensaje adicional</label>
              <textarea name="mensaje" rows={4} className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Cuéntanos sobre tu proyecto..." />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" size="lg" disabled={submitting} className="flex-1">
                {submitting ? "Enviando..." : "Enviar cotización"} <ArrowRight className="size-4" />
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACTO / FOOTER */}
      <footer id="contacto" className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <a href="#inicio" className="inline-block mb-3">
              <img
                src={logoAsset.url}
                alt="CEI Clean - Tratamiento profesional de pisos duros"
                width={1113}
                height={651}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground">
              Tratamiento profesional de pisos en Santiago de Chile.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold mb-3">Contacto</h3>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Phone className="size-4" /> WhatsApp</a>
            <a href="mailto:contactoceiclean@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="size-4" /> contactoceiclean@gmail.com</a>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="size-4" /> Santiago de Chile</div>
          </div>
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold mb-3">Enlaces</h3>
            <a href="#servicios" className="block text-muted-foreground hover:text-foreground">Servicios</a>
            <a href="#proceso" className="block text-muted-foreground hover:text-foreground">Proceso</a>
            <a href="#cotizacion" className="block text-muted-foreground hover:text-foreground">Cotización</a>
          </div>
        </div>
        <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CEI Clean. Todos los derechos reservados.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
        style={{ background: "oklch(var(--whatsapp) / 1)", backgroundColor: "oklch(0.67 0.17 150)", color: "white" }}
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium">{label}</label>
      <select name={name} className="rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
        <option value="">Seleccionar...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
