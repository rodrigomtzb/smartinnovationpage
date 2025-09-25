import { motion } from "framer-motion";
import { MessageSquare, BarChart2, Layers } from "lucide-react";

const WhatsAppServiceSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-24 overflow-hidden">
      {/* Fondo Parallax */}
      <div className="absolute inset-0 -z-10 bg-[url('/whatsapp-pattern.svg')] opacity-5 bg-cover bg-center" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
        >
          Servicio de <span className="text-green-600">WhatsApp Empresarial</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-600 max-w-2xl mx-auto mb-12"
        >
          Automatiza el envío de mensajes, monitorea métricas clave y gestiona
          campañas desde un <strong>panel centralizado</strong>.  
          Con <span className="font-semibold">Odyssey</span>, transforma WhatsApp en tu canal más poderoso de comunicación.
        </motion.p>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition"
          >
            <MessageSquare className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Envío masivo</h3>
            <p className="text-sm text-slate-600">
              Diseña y lanza campañas automatizadas con alcance ilimitado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition"
          >
            <BarChart2 className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Métricas en tiempo real</h3>
            <p className="text-sm text-slate-600">
              Visualiza rendimiento, entregas y respuestas en un panel dinámico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition"
          >
            <Layers className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Gestión centralizada</h3>
            <p className="text-sm text-slate-600">
              Crea, administra y organiza campañas desde un solo tablero.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.a
          href="https://www.facebook.com/tu-anuncio"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition"
        >
          Contáctanos en Facebook
        </motion.a>
      </div>
    </section>
  );
};

export default WhatsAppServiceSection;
