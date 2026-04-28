"use client";

import { motion } from "framer-motion";
import { Database, RefreshCw, Zap } from "lucide-react";

const steps = [
  {
    title: "Carga inicial",
    description: "Una sola vez: cargás tus datos maestros — SKUs, proveedores, lead times, históricos. Te ayudamos a estructurarlo.",
    icon: Database,
  },
  {
    title: "Actualizaciones simples",
    description: "A partir de ahí, solo subís actualizaciones periódicas: stock, OCs abiertas, ventas reales.",
    icon: RefreshCw,
  },
  {
    title: "Plan en minutos",
    description: "Cada semana o mes ejecutás el motor y recibís el plan de reposición listo para revisar y enviar.",
    icon: Zap,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-neuron-dark to-black relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Flujo de trabajo <span className="text-neuron-purple">optimizado</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-neuron-cyan/20 via-neuron-purple/50 to-neuron-cyan/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#05050f] border-2 border-neuron-purple flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(138,43,226,0.3)]">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
