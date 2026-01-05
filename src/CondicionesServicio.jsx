import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const theme = {
  colors: {
    white: '#ffffff',
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      800: '#1e293b',
      900: '#0f172a',
    },
    indigo: {
      50: '#eef2ff',
      600: '#4f46e5',
    },
    green: {
      600: '#16a34a',
    }
  },
  shadows: {
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }
};

export default function CondicionesServicio() {
  const businessName = "SMART INNOVATION SYSTEMS";

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: theme.colors.white,
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      color: theme.colors.slate[800],
      lineHeight: '1.6',
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: `1px solid ${theme.colors.slate[100]}`,
    },
    headerContent: {
      maxWidth: '1152px', // 6xl
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {
      paddingTop: '8rem',
      paddingBottom: '5rem',
      maxWidth: '896px', // 4xl para mejor legibilidad de texto legal
      margin: '0 auto',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    card: {
      backgroundColor: theme.colors.white,
      borderRadius: '1rem',
      padding: '2.5rem',
      border: `1px solid ${theme.colors.slate[100]}`,
      boxShadow: theme.shadows.xl,
    },
    h1: {
      fontSize: '2.25rem',
      fontWeight: 800,
      color: theme.colors.slate[900],
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: theme.colors.indigo[600],
      marginTop: '2rem',
      marginBottom: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    p: {
      marginBottom: '1rem',
      color: theme.colors.slate[600],
    },
    footer: {
      backgroundColor: theme.colors.slate[900],
      color: theme.colors.white,
      padding: '2rem 1.5rem',
      textAlign: 'center',
    }
  };

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Condiciones del Servicio — {businessName}</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Header replicando tu diseño */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src="/logo-fav.png" 
              alt="Logo" 
              style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', boxShadow: theme.shadows.md }} 
            />
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{businessName}</div>
              <div style={{ fontSize: '0.75rem', color: theme.colors.slate[500] }}>Legal & Compliance</div>
            </div>
          </div>
          <a href="/" style={{ fontSize: '0.875rem', color: theme.colors.indigo[600], textDecoration: 'none', fontWeight: 500 }}>
            Volver al inicio
          </a>
        </div>
      </header>

      <main style={styles.main}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.card}
        >
          <h1 style={styles.h1}>Condiciones del Servicio</h1>
          <p style={{ fontSize: '0.875rem', color: theme.colors.slate[400], marginBottom: '2rem' }}>
            Última actualización: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 style={styles.h2}>1. Aceptación de los Términos</h2>
            <p style={styles.p}>
              Al acceder y utilizar los servicios de mensajería automatizada de <strong>{businessName}</strong>, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 style={styles.h2}>2. Descripción del Servicio de IA</h2>
            <p style={styles.p}>
              Nuestro servicio utiliza <strong>Inteligencia Artificial (IA)</strong> y flujos de automatización a través de n8n para proporcionar asistencia técnica, información de productos y soporte comercial vía WhatsApp. 
            </p>
            <p style={styles.p}>
              Usted reconoce que las respuestas son generadas de forma automática. Aunque nos esforzamos por la precisión, la IA puede generar información incorrecta o incompleta. El servicio se proporciona "tal cual" sin garantías explícitas de exactitud absoluta.
            </p>
          </section>

          <section>
            <h2 style={styles.h2}>3. Uso de WhatsApp Business API</h2>
            <p style={styles.p}>
              Este servicio opera sobre la infraestructura de <strong>Meta Platforms, Inc.</strong> El uso del canal está sujeto a las Políticas de Comercio y de Mensajería de WhatsApp. Cualquier uso del servicio para fines ilícitos, spam o acoso resultará en la terminación inmediata del acceso.
            </p>
          </section>

          <section>
            <h2 style={styles.h2}>4. Limitación de Responsabilidad</h2>
            <p style={styles.p}>
              {businessName} no será responsable de ninguna decisión tomada por el usuario basada en las respuestas automáticas de la IA. Recomendamos que cualquier transacción crítica o decisión financiera sea validada directamente con uno de nuestros asesores humanos.
            </p>
          </section>

          <section>
            <h2 style={styles.h2}>5. Modificaciones</h2>
            <p style={styles.p}>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del servicio después de dichos cambios constituye la aceptación de las nuevas condiciones.
            </p>
          </section>

          <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: theme.colors.indigo[50], borderRadius: '0.75rem' }}>
            <p style={{ ...styles.p, marginBottom: 0, fontSize: '0.875rem', color: theme.colors.indigo[600], fontWeight: 500 }}>
              Para dudas legales sobre estos términos, contáctenos en: soporte@smartinnovationsystems.com
            </p>
          </div>
        </motion.div>
      </main>

      <footer style={styles.footer}>
        <div style={{ fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} {businessName} — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}