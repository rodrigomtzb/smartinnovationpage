import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'

// SMART INNOVATION SYSTEMS - Single-file React page (TailwindCSS + Framer Motion)
// Usage: drop into a React app that has TailwindCSS configured and framer-motion + react-helmet installed.

export default function SmartInnovationPage() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const el = parallaxRef.current
      if (!el) return
      const scrolled = window.scrollY
      // Move background layers at different speeds
      const layers = el.querySelectorAll('[data-parallax]')
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0.3')
        layer.style.transform = `translateY(${scrolled * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen text-slate-800 bg-white antialiased">
      <Helmet>
        <title>SMART INNOVATION SYSTEMS — Automate. Visualize. Grow.</title>
        <meta name="description" content="SMART INNOVATION SYSTEMS: soluciones de software para PYMEs, automatización de procesos, CRMs, integraciones en la nube y consultoría tecnológica." />
        <meta name="keywords" content="software, automatización, CRM, cloud, AWS, Google Cloud, React, Java, Spring Boot, innovación" />
      </Helmet>

      {/* Header */}
      <header className="fixed w-full z-40 bg-white/60 backdrop-blur-sm border-b border-transparent">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold">SI</div>
            <div>
              <h1 className="text-sm font-semibold">SMART INNOVATION SYSTEMS</h1>
              <p className="text-xs text-slate-500">Business software & cloud solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600">Quiénes Somos</a>
            <a href="#products" className="hover:text-indigo-600">Productos</a>
            <a href="#services" className="hover:text-indigo-600">Servicios</a>
            <a href="#mission" className="hover:text-indigo-600">Misión</a>
            <a href="#vision" className="hover:text-indigo-600">Visión</a>
            {/* <a href="#contact" className="hover:text-indigo-600">Contacto</a> */}
          </nav>
          {/* <div className="hidden md:flex">
            <a href="#contact" className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm shadow hover:opacity-95">Contactar</a>
          </div> */}
          <button className="md:hidden p-2 rounded-lg">☰</button>
        </div>
      </header>

      {/* HERO with parallax */}
      <section className="relative overflow-hidden pt-24" ref={parallaxRef}>
        <div className="absolute inset-0 -z-10">
          <div data-parallax data-speed="0.02" className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
          <svg data-parallax data-speed="0.06" className="absolute right-0 top-10 opacity-30" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="200" fill="url(#g)" />
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#8b5cf6"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm text-indigo-600 font-medium">SMART · FAST · SCALABLE</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Convertimos procesos manuales en plataformas digitales que impulsan tu negocio.</h2>
            <p className="mt-6 text-slate-600 max-w-xl">Diseñamos e implementamos soluciones web y móviles con un enfoque en automatización, visibilidad operativa y rapidez de despliegue. Soluciones pensadas para PYMEs que quieren dar el salto tecnológico.</p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:opacity-95">Solicitar demo</a>
              <a href="#services" className="px-6 py-3 rounded-lg border border-slate-200 text-slate-700">Ver servicios</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-xs text-slate-500">
              <div className="p-3 bg-slate-50 rounded-lg border">Tecnologías: React · Java · Spring Boot · AWS</div>
              <div className="p-3 bg-slate-50 rounded-lg border">Entregas: MVP rápido · Integración · Soporte</div>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="relative bg-gradient-to-br from-white to-indigo-50 p-8">
                <div className="h-72 md:h-80 rounded-lg bg-white/60 border border-dashed border-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">CRM + Dashboard</h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-xs">Panel centralizado para visualizar capital, métricas y automatizaciones que ahorran tiempo.</p>
                    <div className="mt-4 text-xs text-slate-500">Integraciones: Pagos · Identidad · Notificaciones</div>
                  </div>
                </div>
              </div>
            </div>

            <svg className="absolute -right-10 -bottom-10 opacity-70" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="220" height="220" rx="32" fill="#eef2ff" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-indigo-600 font-semibold">Quiénes Somos</h3>
            <h2 className="mt-3 text-3xl font-extrabold">Somos un equipo de ingenieros y diseñadores que hacen que la tecnología funcione para ti.</h2>
            <p className="mt-6 text-slate-600">En SMART INNOVATION SYSTEMS unimos experiencia en Java, React, Cloud y UX para crear productos digitales que reducen costos, mejoran la visibilidad operacional y transforman la experiencia del cliente.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• 12+ años en fintech y servicios empresariales.</li>
              <li>• Proyectos desde MVP hasta sistemas en producción.</li>
              <li>• Entregas con enfoque DevOps y calidad.</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-slate-50 border">
              <h4 className="font-semibold">Visibilidad</h4>
              <p className="mt-2 text-sm text-slate-600">Dashboards centrados en KPIs para decisiones rápidas.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border">
              <h4 className="font-semibold">Automatización</h4>
              <p className="mt-2 text-sm text-slate-600">Flujos que reemplazan tareas repetitivas y errores.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border">
              <h4 className="font-semibold">Escalabilidad</h4>
              <p className="mt-2 text-sm text-slate-600">Arquitecturas para crecer sin fricción.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border">
              <h4 className="font-semibold">Soporte</h4>
              <p className="mt-2 text-sm text-slate-600">Acompañamiento técnico y mejora continua.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-indigo-600 font-semibold">Productos</h3>
              <h2 className="mt-2 text-2xl font-bold">Soluciones listas para tu operación</h2>
              <p className="mt-2 text-sm text-slate-600">Plantillas y productos preparados para arrancar: CRMs, Portales de Cliente y Dashboards financieros.</p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'CRM Personalizable',
                desc: 'Gestión de clientes, pipeline y automatizaciones listas para usar.',
              },
              {
                title: 'Dashboard Financiero',
                desc: 'Visualiza capital, flujo y métricas clave en un solo sitio.',
              },
              {
                title: 'Integrador de Pagos',
                desc: 'Conexiones seguras a pasarelas y conciliación automatizada.',
              },
            ].map((p) => (
              <article key={p.title} className="p-6 bg-white rounded-xl border shadow-sm">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-4 text-xs text-slate-500">Ideal para PYMEs y fintechs en crecimiento</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-indigo-600 font-semibold">Servicios</h3>
        <h2 className="mt-2 text-2xl font-bold">De la idea al despliegue — y más allá</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">Desarrollo a medida</h4>
            <p className="mt-3 text-sm text-slate-600">Backends en Java (Spring Boot), frontends en React y aplicaciones móviles híbridas.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">Integraciones</h4>
            <p className="mt-3 text-sm text-slate-600">APIs con bancos, pagos, identidad y servicios de terceros.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">Cloud & DevOps</h4>
            <p className="mt-3 text-sm text-slate-600">Despliegue en AWS o Google Cloud con pipelines, infra como código y monitoreo.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">UX & Diseño</h4>
            <p className="mt-3 text-sm text-slate-600">Diseños centrados en conversión, usabilidad y velocidad.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">Soporte y mejora continua</h4>
            <p className="mt-3 text-sm text-slate-600">SLA, mantenimiento y mejoras incrementales.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border">
            <h4 className="font-semibold">Consultoría técnica</h4>
            <p className="mt-3 text-sm text-slate-600">Evaluación de arquitectura, optimización y hoja de ruta tecnológica.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-gradient-to-r from-white to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/80 rounded-xl border">
            <h4 className="text-indigo-600 font-semibold">Misión</h4>
            <p className="mt-3 text-slate-600">Empoderar a las PYMEs con tecnología accesible, eficiente y segura para que puedan competir al siguiente nivel — a través de software pensado para la operación real.</p>
          </div>
          <div className="p-8 bg-white/80 rounded-xl border">
            <h4 className="text-indigo-600 font-semibold">Visión</h4>
            <p className="mt-3 text-slate-600">Ser el socio tecnológico de referencia en Latinoamérica para empresas que buscan modernizarse sin sacrificar control ni velocidad de negocio.</p>
          </div>
        </div>
      </section>

      {/* Contact
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-indigo-600 font-semibold">Contacto</h3>
        <h2 className="mt-2 text-2xl font-bold">Hablemos de tu proyecto</h2>
        <p className="mt-3 text-slate-600">Cuéntanos brevemente qué necesitas y te responderemos con una propuesta clara.</p>

        <form className="mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Nombre" className="p-3 border rounded-lg" />
            <input name="company" placeholder="Empresa (opcional)" className="p-3 border rounded-lg" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="email" type="email" placeholder="Correo electrónico" className="p-3 border rounded-lg" />
            <input name="phone" placeholder="Teléfono (opcional)" className="p-3 border rounded-lg" />
          </div>
          <textarea name="message" rows={6} placeholder="Describe tu proyecto en 2-4 líneas" className="p-3 border rounded-lg" />

          <div className="flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-lg bg-indigo-600 text-white">Enviar</button>
            <div className="text-sm text-slate-500">También respondemos por: <strong>hola@glsmartinnovation.mx</strong></div>
          </div>
        </form>
      </section>

      */}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold">SMART INNOVATION SYSTEMS</div>
            <div className="text-sm text-slate-400">Automatización · Visibilidad · Crecimiento</div>
          </div>
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} SMART INNOVATION SYSTEMS — Todos los derechos reservados</div>
          <div className="flex gap-3">
            <a className="text-slate-400 hover:text-white text-sm">LinkedIn</a>
            <a className="text-slate-400 hover:text-white text-sm">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
