import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MessageSquare, BarChart2, Layers } from "lucide-react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

export default function SmartInnovationPage() {

  const floatVariants = {
    animate: { y: [0, -8, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
  }

  const rotateVariants = {
    animate: { rotate: [0, 2, -2, 0], transition: { duration: 12, repeat: Infinity, ease: "easeInOut" } }
  }

  const cards = {
    about: [
      { title: 'Visibilidad', desc: 'Dashboards centrados en KPIs para decisiones rápidas.' },
      { title: 'Automatización', desc: 'Flujos que reemplazan tareas repetitivas y errores.' },
      { title: 'Escalabilidad', desc: 'Arquitecturas para crecer sin fricción.' },
      { title: 'Soporte', desc: 'Acompañamiento técnico y mejora continua.' }
    ],
    products: [
      { title: 'CRM Personalizable', desc: 'Gestión de clientes, pipeline y automatizaciones listas para usar.' },
      { title: 'Dashboard Financiero', desc: 'Visualiza capital, flujo y métricas clave en un solo sitio.' },
      { title: 'Integrador de Pagos', desc: 'Conexiones seguras a pasarelas y conciliación automatizada.' }
    ],
    services: [
      { title: 'Desarrollo a medida', desc: 'Microservicios escalables, experiencias digitales intuitivas y aplicaciones móviles de alto rendimiento.' },
      { title: 'Integraciones', desc: 'APIs con bancos, pagos, identidad y servicios de terceros.' },
      { title: 'Cloud & DevOps', desc: 'Despliegue en la Nube con pipelines, infra como código y monitoreo.' },
      { title: 'UX & Diseño', desc: 'Diseños centrados en conversión, usabilidad y velocidad.' },
      { title: 'Soporte y mejora continua', desc: 'SLA, mantenimiento y mejoras incrementales.' },
      { title: 'Consultoría técnica', desc: 'Evaluación de arquitectura, optimización y hoja de ruta tecnológica.' }
    ]
  }

  return (
    <ParallaxProvider>
    <div className="min-h-screen text-slate-800 bg-white antialiased">
      <Helmet>
        <title>SMART INNOVATION SYSTEMS — Automate. Visualize. Grow.</title>
        <meta name="description" content="SMART INNOVATION SYSTEMS: soluciones de software para PYMEs, automatización de procesos, CRMs, integraciones en la nube y consultoría tecnológica." />
        <meta name="keywords" content="software, automatización, CRM, cloud, AWS, Google Cloud, React, Java, Spring Boot, innovación" />
      </Helmet>

      {/* Header */}
      <header className="fixed w-full z-50 bg-white/60 backdrop-blur-sm border-b border-transparent">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.img
              src="/logo-fav.png"
              alt="Smart Innovation Systems Logo"
              className="w-10 h-10 bg-white p-1 rounded-lg object-contain shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div>
              <h1 className="text-sm font-semibold">SMART INNOVATION SYSTEMS</h1>
              <p className="text-xs text-slate-500">Business software & cloud solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600 transition-colors">Quiénes Somos</a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">Productos</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Servicios</a>
            <a href="#whatsapp" className="hover:text-indigo-600 transition-colors">WhatsApp</a>
            <a href="#mission" className="hover:text-indigo-600 transition-colors">Misión</a>
            <a href="#vision" className="hover:text-indigo-600 transition-colors">Visión</a>
            <a href="/privacidad" className="hover:text-indigo-600 transition-colors">Política de Privacidad</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg">☰</button>
        </div>
      </header>

      {/* HERO */}
      <Parallax y={[-20,20]}>
      <section className="relative overflow-hidden pt-24">
        <motion.div className="absolute inset-0 -z-10" variants={rotateVariants} animate="animate">
          <Parallax y={[-15,15]}>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
          </Parallax>
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
            <p className="text-sm text-indigo-600 font-medium">SMART · FAST · SCALABLE</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Convertimos procesos manuales en plataformas digitales que impulsan tu negocio.</h2>
            <p className="mt-6 text-slate-600 max-w-xl">Diseñamos e implementamos soluciones web y móviles con un enfoque en automatización, visibilidad operativa y rapidez de despliegue. Soluciones pensadas para PYMEs que quieren dar el salto tecnológico.</p>
            <div className="mt-8 flex gap-4">
              <a href="#services" className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-indigo-50 transition">Ver servicios</a>
            </div>
          </motion.div>

          <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }}>
            <motion.div variants={floatVariants} animate="animate" className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative">
              <div className="relative bg-gradient-to-br from-white to-indigo-50 p-8">
                <div className="h-72 md:h-80 rounded-lg bg-white/60 border border-dashed border-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">CRM + Dashboard</h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-xs">Panel centralizado para visualizar capital, métricas y automatizaciones que ahorran tiempo.</p>
                    <div className="mt-4 text-xs text-slate-500">Integraciones: Pagos · Identidad · Notificaciones</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </Parallax>

      {/* About */}
      <Parallax y={[-10,10]}>
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{opacity:1, y:0}} transition={{duration:0.6}}>
            <h3 className="text-indigo-600 font-semibold">Quiénes Somos</h3>
            <h2 className="mt-3 text-3xl font-extrabold">Somos un equipo de ingenieros y diseñadores que hacen que la tecnología funcione para ti.</h2>
            <p className="mt-6 text-slate-600">En SMART INNOVATION SYSTEMS integramos tecnología avanzada y experiencia en Cloud y UX para crear soluciones digitales que optimizan costos, potencian la operación y transforman la experiencia del cliente.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• 12+ años en fintech y servicios empresariales.</li>
              <li>• Proyectos desde MVP hasta sistemas en producción.</li>
              <li>• Entregas con enfoque DevOps y calidad.</li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {cards.about.map((c, idx) => (
              <motion.div key={idx} variants={floatVariants} animate="animate" whileHover={{ scale: 1.05 }} className="p-6 rounded-xl bg-slate-50 border shadow-sm">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </Parallax>

      {/* Products */}
      <Parallax y={[-10,10]}>
      <section id="products" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-indigo-600 font-semibold">Productos</h3>
              <h2 className="mt-2 text-2xl font-bold">Soluciones listas para tu operación</h2>
              <p className="mt-2 text-sm text-slate-600">Plantillas y productos preparados para arrancar: CRMs, Portales de Cliente y Dashboards financieros.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cards.products.map((p, idx) => (
              <motion.div key={idx} variants={floatVariants} animate="animate" whileHover={{ scale:1.05, rotate:1 }} className="p-6 bg-white rounded-xl border shadow-lg">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 text-xs text-slate-500">Ideal para PYMEs y fintechs en crecimiento</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </Parallax>

      {/* Services */}
      <Parallax y={[-10,10]}>
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-indigo-600 font-semibold">Servicios</h3>
        <h2 className="mt-2 text-2xl font-bold">De la idea al despliegue — y más allá</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cards.services.map((s, idx) => (
            <motion.div key={idx} variants={floatVariants} animate="animate" whileHover={{ scale:1.05, rotate:1 }} transition={{duration:0.5+idx*0.1}} className="p-6 bg-white rounded-lg border shadow-lg">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      </Parallax>

      {/* WhatsApp Section */}
      <Parallax y={[-10,10]}>
      <section id="whatsapp" className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-24 overflow-hidden">
        <motion.div className="absolute inset-0 -z-10" variants={rotateVariants} animate="animate">
          <div className="absolute inset-0 bg-[url('/whatsapp-pattern.svg')] opacity-5 bg-cover bg-center" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2 initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
            Servicio de <span className="text-green-600">WhatsApp Empresarial</span>
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ delay:0.2, duration:0.6 }} className="text-slate-600 max-w-2xl mx-auto mb-12">
            Automatiza el envío de mensajes, monitorea métricas clave y gestiona
            campañas desde un <strong>panel centralizado</strong>.  
            Con <span className="font-semibold">Odyssey</span>, transforma WhatsApp en tu canal más poderoso de comunicación.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MessageSquare, title: "Envío masivo", desc: "Diseña y lanza campañas automatizadas con alcance ilimitado.", color: "text-green-600" },
              { icon: BarChart2, title: "Métricas en tiempo real", desc: "Visualiza rendimiento, entregas y respuestas en un panel dinámico.", color: "text-indigo-600" },
              { icon: Layers, title: "Gestión centralizada", desc: "Crea, administra y organiza campañas desde un solo tablero.", color: "text-cyan-600" }
            ].map((c, idx) => (
              <motion.div key={idx} variants={floatVariants} animate="animate" whileHover={{ scale:1.05, y:-5 }} transition={{duration:0.5+idx*0.1}} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition">
                <c.icon className={`w-10 h-10 ${c.color} mb-4`} />
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* <motion.a
            href="https://www.facebook.com/tu-anuncio"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity:0, scale:0.9 }}
            whileInView={{ opacity:1, scale:1 }}
            transition={{ duration:0.5 }}
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition"
          >
            Contáctanos en Facebook
          </motion.a> */}
        </div>
      </section>
      </Parallax>

      {/* Mission & Vision */}
      <Parallax y={[-5,5]}>
      <section id="mission" className="bg-gradient-to-r from-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <motion.div variants={floatVariants} animate="animate" whileHover={{ scale:1.02 }} className="p-8 bg-white/80 rounded-xl border">
            <h4 className="text-indigo-600 font-semibold">Misión</h4>
            <p className="mt-3 text-slate-600">Empoderar a las PYMEs con tecnología accesible, eficiente y segura para que puedan competir al siguiente nivel — a través de software pensado para la operación real.</p>
          </motion.div>
          <motion.div variants={floatVariants} animate="animate" whileHover={{ scale:1.02 }} className="p-8 bg-white/80 rounded-xl border">
            <h4 className="text-indigo-600 font-semibold">Visión</h4>
            <p className="mt-3 text-slate-600">Ser el socio tecnológico de referencia en Latinoamérica para empresas que buscan modernizarse sin sacrificar control ni velocidad de negocio.</p>
          </motion.div>
        </div>
      </section>
      </Parallax>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold">SMART INNOVATION SYSTEMS</div>
            <div className="text-sm text-slate-400">Automatización · Visibilidad · Crecimiento</div>
          </div>
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} SMART INNOVATION SYSTEMS — Todos los derechos reservados</div>
        </div>
      </footer>
    </div>
    </ParallaxProvider>
  )
}
