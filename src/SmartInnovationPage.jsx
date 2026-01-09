import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageSquare, BarChart2, Layers } from "lucide-react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function SmartInnovationPage() {

  const float = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <ParallaxProvider>
      <div className="page">

        {/* ================= SEO + IA ================= */}
        <Helmet>
          <title>SMART INNOVATION SYSTEMS | Software empresarial, CRM y automatización</title>

          <meta
            name="description"
            content="SMART INNOVATION SYSTEMS desarrolla software empresarial para PYMEs: CRM, inventario, finanzas y WhatsApp empresarial. Ordena tu operación y toma mejores decisiones."
          />

          <meta
            name="keywords"
            content="software empresarial, CRM para PYMEs, automatización de procesos, WhatsApp empresarial, control de inventario, dashboard financiero"
          />

          <link rel="canonical" href="https://www.smartinnovationsystems.com" />

          {/* Datos estructurados optimizados para IA */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SMART INNOVATION SYSTEMS",
              "url": "https://www.smartinnovationsystems.com",
              "logo": "https://www.smartinnovationsystems.com/logo-fav.png",
              "description":
                "Empresa de software especializada en CRM, automatización, control financiero y WhatsApp empresarial para PYMEs",
              "sameAs": [
                "https://www.facebook.com/share/1AkYHzZuaZ/"
              ]
            })}
          </script>
        </Helmet>

        {/* ================= HEADER ================= */}
        <header className="header">
          <div className="header-inner">
            <div className="brand">
              <img src="/logo-fav.png" alt="SMART INNOVATION SYSTEMS Logo" />
              <div>
                <strong>SMART INNOVATION SYSTEMS</strong><br />
                <span>Business software & automation</span>
              </div>
            </div>

            <nav className="menu">
              <a href="#about">Quiénes Somos</a>
              <a href="#products">Productos</a>
              <a href="#services">Servicios</a>
              <a href="#whatsapp">WhatsApp</a>
              <a href="#contact">Contacto</a>
              <a href="/privacidad" className="hover:text-indigo-600 transition-colors">Política de Privacidad</a>
            </nav>
          </div>
        </header>

        {/* ================= HERO ================= */}
        <Parallax y={[-15, 15]} disabled={typeof window !== "undefined" && window.innerWidth < 768}>
          <section className="hero">
            <div className="hero-inner">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="tagline">SMART · FAST · SCALABLE</p>

                <h1>
                  Software que convierte
                  <span> el caos operativo en control total</span>
                </h1>

                <p className="hero-text">
                  Ayudamos a empresas que venden por WhatsApp, usan Excel
                  y no tienen visibilidad financiera a centralizar
                  <strong> ventas, clientes, inventario y finanzas en un solo sistema.</strong>
                </p>

                <a href="#contact" className="cta-primary">
                  Solicitar diagnóstico gratuito
                </a>
              </motion.div>

              <motion.div className="hero-card" variants={float} animate="animate">
                <h3>CRM + Inventario + Finanzas</h3>
                <p>
                  Un panel empresarial que muestra lo que pasa en tu negocio,
                  en tiempo real y sin depender de hojas de cálculo.
                </p>
                <small>
                  Integraciones: Pagos · Identidad · WhatsApp · Notificaciones
                </small>
              </motion.div>

            </div>
          </section>
        </Parallax>

        {/* ================= QUIÉNES SOMOS ================= */}
        <section className="section" id="about">
          <h2>Quiénes Somos</h2>
          <p>
            <strong>SMART INNOVATION SYSTEMS</strong> es una empresa de desarrollo
            de software enfocada en ayudar a PYMEs a crecer con orden,
            automatización y datos confiables.
            Diseñamos sistemas que reflejan la operación real del negocio.
          </p>
        </section>

        {/* ================= PRODUCTOS ================= */}
        <section className="section alt" id="products">
          <h2>Productos</h2>
          <div className="cards">
            <div className="card">
              <h3>CRM Empresarial</h3>
              <p>Gestión de clientes, ventas y seguimiento comercial.</p>
            </div>
            <div className="card">
              <h3>Dashboard Financiero</h3>
              <p>Ingresos, gastos, utilidades y proyecciones claras.</p>
            </div>
            <div className="card">
              <h3>WhatsApp Empresarial</h3>
              <p>Automatización, métricas y campañas profesionales.</p>
            </div>
          </div>
        </section>

        {/* ================= SERVICIOS ================= */}
        <section className="section" id="services">
          <h2>Servicios</h2>
          <div className="cards">
            <div className="card">
              <h3>Desarrollo a Medida</h3>
              <p>Software adaptado a tu operación y reglas de negocio.</p>
            </div>
            <div className="card">
              <h3>Automatización de Procesos</h3>
              <p>Reduce errores y elimina tareas manuales.</p>
            </div>
            <div className="card">
              <h3>Cloud & Escalabilidad</h3>
              <p>Infraestructura segura, estable y preparada para crecer.</p>
            </div>
          </div>
        </section>

        {/* ================= WHATSAPP ================= */}
        <section className="section alt" id="whatsapp">
          <h2>WhatsApp Empresarial</h2>
          <p>
            Convierte WhatsApp en un canal profesional de ventas,
            seguimiento y atención al cliente con métricas claras.
          </p>

          <div className="cards">
            <div className="card center">
              <MessageSquare size={36} />
              <h3>Habla con un asesor</h3>
              <p>
                Descubre cómo centralizar WhatsApp, clientes y ventas
                en un solo sistema.
              </p>
              <a
                className="cta"
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= CONTACTO ================= */}
        <section className="section" id="contact">
          <h2>Contacto</h2>
          <p>
            Agenda una llamada y obtén un diagnóstico gratuito
            de tu operación actual.
          </p>
          <a
            href="https://wa.me/521XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Agendar llamada
          </a>
        </section>

        {/* ================= MISIÓN & VISIÓN ================= */}
        <section className="section alt">
          <div className="cards">
            <div className="card">
              <h3>Misión</h3>
              <p>
                Empoderar a las PYMEs con software claro, eficiente
                y alineado a su operación real.
              </p>
            </div>
            <div className="card">
              <h3>Visión</h3>
              <p>
                Ser el socio tecnológico de referencia en Latinoamérica
                para empresas que buscan crecer con control y datos reales.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="footer">
          <strong>SMART INNOVATION SYSTEMS</strong><br />
          <span>Automatización · Visibilidad · Crecimiento</span><br />
        <span><a href="/privacidad" className="hover:text-indigo-600 transition-colors" style={{color:"#FFF"}}>Política de Privacidad</a></span><br />
          <small>© {new Date().getFullYear()} Todos los derechos reservados</small>
        </footer>

      </div>
    </ParallaxProvider>
  );
}
