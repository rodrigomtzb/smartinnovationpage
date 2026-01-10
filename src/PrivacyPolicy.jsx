// AvisoPrivacidad.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

// --- INICIO DE CONFIGURACION DE ESTILOS (Copiar/Pegar en ambos archivos) ---
const theme = {
  colors: {
    white: '#ffffff',
    slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
    indigo: { 50: '#eef2ff', 100: '#e0e7ff', 600: '#4f46e5', 700: '#4338ca' },
    green: { 600: '#16a34a', 700: '#15803d' },
  },
  fonts: { sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
  shadows: { sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)' },
  utils: { antialiased: { WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }, maxW6xl: { maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' } }
};
// --- FIN DE CONFIGURACION DE ESTILOS ---

export default function PrivacyPolicy() {
  
  // Datos de personalización - ¡IMPORTANTE LLENAR!
  const businessName = "SMART INNOVATION SYSTEMS";
  const contactEmail = "soporte@smartinnovationsystems.com"; 

  // Definición de estilos específicos para esta página (Inline Styles)
  const styles = {
    body: {
      minHeight: '100vh',
      color: theme.colors.slate[800],
      backgroundColor: theme.colors.white,
      fontFamily: theme.fonts.sans,
      ...theme.utils.antialiased,
    },
    header: {
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.6)', // bg-white/60
      backdropFilter: 'blur(4px)', // backdrop-blur-sm
      WebkitBackdropFilter: 'blur(4px)',
      borderBottom: '1px solid transparent',
    },
    headerContainer: {
      ...theme.utils.maxW6xl,
      paddingTop: '1rem',
      paddingBottom: '1rem',
      display: 'flex',
      itemsCenter: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      width: '2.5rem', // w-10
      height: '2.5rem', // h-10
      backgroundColor: theme.colors.white,
      padding: '0.25rem', // p-1
      borderRadius: '0.5rem', // rounded-lg
      objectFit: 'contain',
      boxShadow: theme.shadows.md,
    },
    mainContent: {
      paddingTop: '8rem', // Espacio para el header fixed (pt-32)
      paddingBottom: '5rem', // pb-20
      ...theme.utils.maxW6xl,
    },
    legalCard: {
      backgroundColor: theme.colors.white,
      borderRadius: '1rem', // rounded-2xl (siguiendo el diseño del hero)
      border: `1px solid ${theme.colors.slate[100]}`,
      boxShadow: theme.shadows.xl, // Sombra pronunciada como en el hero
      padding: '3rem', // p-12
      lineHeight: '1.75', // leading-relaxed
    },
    title: {
      fontSize: '3rem', // text-5xl
      fontWeight: 800, // font-extrabold
      color: theme.colors.slate[900],
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1.25rem', // text-xl
      color: theme.colors.slate[600],
      marginBottom: '2.5rem',
    },
    sectionTitle: {
      fontSize: '1.5rem', // text-2xl
      fontWeight: 700, // font-bold
      color: theme.colors.indigo[600],
      marginTop: '2.5rem',
      marginBottom: '1rem',
    },
    paragraph: {
      color: theme.colors.slate[700],
      marginBottom: '1.25rem',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem',
      color: theme.colors.slate[700],
    },
    listItem: {
      marginBottom: '0.5rem',
    },
    footer: {
      backgroundColor: theme.colors.slate[900],
      color: theme.colors.white,
      paddingTop: '2rem',
      paddingBottom: '2rem',
    },
    footerContainer: {
      ...theme.utils.maxW6xl,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1.5rem',
    }
  };

  return (
    <ParallaxProvider>
        <div className="min-h-screen text-slate-800 bg-white antialiased">
          <Helmet>
            <meta name="keywords" content="software, automatización, CRM, cloud, AWS, Google Cloud, React, Java, Spring Boot, innovación" />
            <title>Política de Privacidad — Smart Innovation Systems</title>
            <meta name="description" content="Política de privacidad y tratamiento de datos de Smart Innovation Systems." />
            {/* Estas etiquetas son para que el bot de Meta sea feliz */}
            <meta property="og:title" content="Política de Privacidad — Smart Innovation Systems" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.smartinnovationsystems.com/privacidad/" />
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
              </div> {/*
              <nav className="hidden md:flex gap-6 text-sm font-medium">
                <a href="#about" className="hover:text-indigo-600 transition-colors">Quiénes Somos</a>
                <a href="#products" className="hover:text-indigo-600 transition-colors">Productos</a>
                <a href="#services" className="hover:text-indigo-600 transition-colors">Servicios</a>
                <a href="#whatsapp" className="hover:text-indigo-600 transition-colors">WhatsApp</a>
                <a href="#mission" className="hover:text-indigo-600 transition-colors">Misión</a>
                <a href="#vision" className="hover:text-indigo-600 transition-colors">Visión</a>
              </nav> */}
              <button className="md:hidden p-2 rounded-lg">☰</button>
            </div>
          </header>
          
    <div style={styles.body}>
      <Helmet>
        <title>Política de Privacidad e IA — {businessName}</title>
        <meta name="description" content={`Política de privacidad detallada sobre el tratamiento de datos personales y el uso de Inteligencia Artificial en los servicios de ${businessName}.`} />
        <meta name="robots" content="noindex, follow" /> {/* Meta no necesita indexar esto, solo leerlo */}
      </Helmet>

      {/* Header - Réplica exacta del diseño original */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <motion.img
              src="/logo-fav.png"
              alt={`${businessName} Logo`}
              style={styles.logo}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div>
              <h1 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0 }}>{businessName}</h1>
              <p style={{ fontSize: '0.75rem', color: theme.colors.slate[500], margin: 0 }}>Business software & cloud solutions</p>
            </div>
          </div>
          {/* Navegación simplificada o vacía para legal */}
          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
             <a href="/" style={{ color: theme.colors.slate[800], textDecoration: 'none' }}>Volver al Inicio</a>
          </nav>
        </div>
      </header>

      {/* Contenido Principal - Siguiendo la estética de tarjetas de productos */}
      <main style={styles.mainContent}>
        <motion.div 
          style={styles.legalCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Política de Privacidad</h2>
          <p style={styles.subtitle}>Transparencia en el tratamiento de datos y uso de Inteligencia Artificial</p>
          <p style={{ fontSize: '0.875rem', color: theme.colors.slate[400], marginBottom: '2rem' }}>
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <hr style={{ border: 0, borderTop: `1px solid ${theme.colors.slate[100]}`, marginBottom: '2rem' }} />

          <section>
            <h3 style={styles.sectionTitle}>1. Introducción y Alcance</h3>
            <p style={styles.paragraph}>
              En <strong>{businessName}</strong>, nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios, clientes y socios. Esta Política de Privacidad describe cómo recopilamos, utilizamos, procesamos y protegemos la información en el contexto de nuestros servicios de desarrollo de software, soluciones cloud y, específicamente, en nuestras interacciones automatizadas impulsadas por **Inteligencia Artificial (IA)** a través de canales como **WhatsApp Business API**.
            </p>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>2. Información que Recopilamos</h3>
            <p style={styles.paragraph}>Dependiendo de su interacción con nosotros, podemos recopilar los siguientes tipos de datos personales:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Datos de Identificación:</strong> Nombre, dirección de correo electrónico, número de teléfono (incluyendo el identificador de WhatsApp), y nombre de perfil público de WhatsApp.</li>
              <li style={styles.listItem}><strong>Datos de Comunicación:</strong> Contenido de los mensajes, consultas, archivos adjuntos y metadatos de las interacciones enviadas a través de nuestros canales de atención, ya sean humanos o automatizados.</li>
              <li style={styles.listItem}><strong>Datos Técnicos:</strong> Dirección IP, tipo de dispositivo, sistema operativo y datos de uso del sitio web recopilados a través de cookies u otras tecnologías similares.</li>
            </ul>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>3. Uso de la Inteligencia Artificial (IA) y Finalidad</h3>
            <p style={styles.paragraph}>
              Utilizamos tecnologías de **Inteligencia Artificial y Modelos de Lenguaje Grande (LLMs)** para mejorar la eficiencia y la calidad de nuestro servicio de atención al cliente y soporte técnico.
            </p>
            <p style={styles.paragraph}>Sus datos son procesados por nuestra IA con las siguientes finalidades:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Proporcionar respuestas inmediatas y automatizadas a sus consultas las 24 horas del día.</li>
              <li style={styles.listItem}>Analizar el contexto y la intención de sus mensajes para derivar las solicitudes al departamento técnico adecuado o generar soluciones directas.</li>
              <li style={styles.listItem}>Personalizar la experiencia de interacción basada en el historial de comunicación.</li>
            </ul>
            <p style={styles.paragraph}>
              <strong>Importante:</strong> La IA actúa únicamente como un procesador de información bajo la lógica diseñada por {businessName}. No utilizamos sus mensajes personales para entrenar modelos de IA públicos ni compartimos el contenido fuera de los proveedores de servicios necesarios para la operación, como se detalla en la sección 4.
            </p>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>4. Transferencia y Procesamiento por Terceros</h3>
            <p style={styles.paragraph}>
              Para garantizar la operatividad técnica de nuestros flujos de automatización e IA, sus datos pueden ser transmitidos de forma segura a los siguientes proveedores de servicios, quienes actúan como sub-procesadores de datos:
            </p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Meta Platforms, Inc. (WhatsApp):</strong> Proveedor de la infraestructura oficial de WhatsApp Business API para la recepción y envío de mensajes.</li>
              <li style={styles.listItem}><strong>Proveedores de Modelos de IA (ej. OpenAI, Anthropic):</strong> Los mensajes son procesados de forma efímera y segura a través de APIs empresariales para generar respuestas, bajo acuerdos de privacidad que prohíben el uso de datos para entrenamiento de modelos propios.</li>
              <li style={styles.listItem}><strong>n8n (Plataforma de Automatización):</strong> Herramienta utilizada para orquestar el flujo de datos entre WhatsApp, la IA y nuestros sistemas internos.</li>
            </ul>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>5. Seguridad de los Datos</h3>
            <p style={styles.paragraph}>
              Implementamos medidas de seguridad técnicas y organizativas robustas, incluyendo cifrado en tránsito (HTTPS) y protocolos de autenticación estrictos, para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción accidental.
            </p>
          </section>

          <section>
            <h3 style={styles.sectionTitle}>6. Sus Derechos (ARCO)</h3>
            <p style={styles.paragraph}>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales en cualquier momento. Para ejercer estos derechos, o para solicitar la eliminación de su historial de conversación en nuestros sistemas, puede contactarnos enviando un correo electrónico a: <strong>{contactEmail}</strong>.
            </p>
          </section>

        </motion.div>
      </main>

      {/* Footer - Réplica exacta del diseño original */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{businessName}</div>
            <div style={{ fontSize: '0.875rem', color: theme.colors.slate[400] }}>Automatización · Visibilidad · Crecimiento</div>
          </div>
          <div style={{ fontSize: '0.875rem', color: theme.colors.slate[400], textAlign: 'center' }}>
            © {new Date().getFullYear()} {businessName} — Todos los derechos reservados.
            <br />
            <a href="/" style={{ color: theme.colors.indigo[100], textDecoration: 'none', marginTop: '0.5rem', display: 'inline-block' }}>Volver al Inicio</a>
          </div>
        </div>
      </footer>
    </div>
    </div>
     </ParallaxProvider>
  )
}