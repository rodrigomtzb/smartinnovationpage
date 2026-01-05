import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Paleta de colores extraída de tu diseño original
const theme = {
  colors: {
    white: '#ffffff',
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
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
    red: {
      50: '#fef2f2',
      600: '#dc2626',
    }
  },
  shadows: {
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  }
};

export default function EliminacionDatos() {
  const businessName = "SMART INNOVATION SYSTEMS";
  const contactEmail = "soporte@smartinnovationsystems.com";

  const styles = {
    wrapper: {
      minHeight: '100vh',
      backgroundColor: theme.colors.white,
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      color: theme.colors.slate[800],
    },
    header: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${theme.colors.slate[100]}`,
      zIndex: 100,
    },
    headerContent: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {
      paddingTop: '8rem',
      paddingBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    card: {
      backgroundColor: theme.colors.white,
      padding: '2.5rem',
      borderRadius: '1.5rem',
      border: `1px solid ${theme.colors.slate[100]}`,
      boxShadow: theme.shadows.xl,
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 800,
      color: theme.colors.slate[900],
      marginBottom: '1rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.1rem',
      fontWeight: 700,
      color: theme.colors.indigo[600],
      marginTop: '2rem',
      marginBottom: '0.75rem',
      textTransform: 'uppercase',
    },
    instructionBox: {
      backgroundColor: theme.colors.slate[50],
      padding: '1.5rem',
      borderRadius: '1rem',
      borderLeft: `4px solid ${theme.colors.indigo[600]}`,
      marginTop: '1.5rem',
    },
    footer: {
      backgroundColor: theme.colors.slate[900],
      color: theme.colors.white,
      padding: '2rem',
      textAlign: 'center',
      fontSize: '0.875rem',
    }
  };

  return (
    <div style={styles.wrapper}>
      <Helmet>
        <title>Eliminación de Datos — {businessName}</title>
        <meta name="description" content="Instrucciones para solicitar la eliminación de datos personales de acuerdo con las políticas de Meta." />
      </Helmet>

      {/* Header Replicado */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo-fav.png" alt="Logo" style={{ width: '2rem', height: '2rem' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{businessName}</span>
          </div>
          <a href="/" style={{ color: theme.colors.indigo[600], textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem' }}>
            Volver al Sitio
          </a>
        </div>
      </header>

      <main style={styles.main}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.card}
        >
          <h1 style={styles.h1}>Instrucciones para la Eliminación de Datos</h1>
          <p style={{ color: theme.colors.slate[500], fontSize: '0.95rem' }}>
            De acuerdo con las normativas de protección de datos y las políticas de plataforma de Meta, 
            proporcionamos los siguientes mecanismos para que cualquier usuario pueda solicitar la 
            eliminación definitiva de su información de nuestros sistemas.
          </p>

          <h2 style={styles.h2}>1. ¿Qué datos eliminamos?</h2>
          <p style={{ fontSize: '0.9rem', color: theme.colors.slate[600] }}>
            Al procesar una solicitud, eliminamos permanentemente:
          </p>
          <ul style={{ fontSize: '0.9rem', color: theme.colors.slate[600], marginLeft: '1.2rem' }}>
            <li>Historial de conversaciones en WhatsApp gestionadas por nuestra IA.</li>
            <li>Identificadores de usuario vinculados a Meta (ID de teléfono o perfil).</li>
            <li>Preferencias y datos de personalización almacenados en nuestras bases de datos de soporte.</li>
          </ul>

          <h2 style={styles.h2}>2. Pasos para solicitar la eliminación</h2>
          <div style={styles.instructionBox}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Procedimiento manual (Recomendado por Meta):</p>
            <ol style={{ fontSize: '0.9rem', color: theme.colors.slate[600], marginLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Envíe un correo electrónico a: <strong>{contactEmail}</strong></li>
              <li>Use el asunto: <strong>"Solicitud de Eliminación de Datos - [Su Nombre]"</strong></li>
              <li>En el cuerpo del mensaje, proporcione el número de teléfono o ID de usuario con el que interactuó en nuestra aplicación.</li>
              <li>Nuestro equipo procesará la solicitud en un plazo máximo de <strong>48 a 72 horas hábiles</strong>.</li>
            </ol>
          </div>

          <h2 style={styles.h2}>3. Notificación de Finalización</h2>
          <p style={{ fontSize: '0.9rem', color: theme.colors.slate[600] }}>
            Una vez eliminados los datos, recibirá una confirmación vía correo electrónico. Es importante notar que esta acción es irreversible y perderá acceso a cualquier historial de asistencia previa generado por nuestra Inteligencia Artificial.
          </p>

          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: theme.colors.red[50], borderRadius: '0.5rem', display: 'flex', gap: '10px' }}>
            <span style={{ color: theme.colors.red[600], fontWeight: 'bold' }}>⚠️</span>
            <p style={{ fontSize: '0.8rem', color: theme.colors.red[600], margin: 0 }}>
              Nota legal: Ciertos datos transaccionales (como facturas de servicios contratados) deben conservarse por periodos legales obligatorios según la legislación fiscal vigente.
            </p>
          </div>
        </motion.div>
      </main>

      <footer style={styles.footer}>
        <div>© {new Date().getFullYear()} {businessName}</div>
        <div style={{ color: theme.colors.slate[400], fontSize: '0.75rem', marginTop: '0.5rem' }}>
          Compliance with Meta Platforms Data Deletion Policy
        </div>
      </footer>
    </div>
  );
}