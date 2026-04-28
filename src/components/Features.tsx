"use client";

import { motion } from "framer-motion";
import { Brain, PackageCheck, LineChart, Target, Handshake, SlidersHorizontal } from "lucide-react";

const features = [
  {
    title: "Reposición inteligente",
    description: "Calcula qué comprar y cuándo, respetando tu política de stock y estrategia de abastecimiento.",
    icon: Brain,
    colSpan: "md:col-span-2",
  },
  {
    title: "Consolidación de compras",
    description: "Ahorro en fletes y aduana detectando patrones para consolidar envíos.",
    icon: PackageCheck,
    colSpan: "md:col-span-1",
  },
  {
    title: "Análisis What-If",
    description: "Simulá escenarios al instante y entendé el impacto antes de tomar la decisión.",
    icon: SlidersHorizontal,
    colSpan: "md:col-span-1",
  },
  {
    title: "Forecast Accuracy",
    description: "Medí la precisión del forecast contra ventas reales en tiempo real y automáticamente.",
    icon: Target,
    colSpan: "md:col-span-2",
  },
  {
    title: "Negociación con datos",
    description: "Proyecta tus compras a 12 meses y negocia mejor con proveedores.",
    icon: Handshake,
    colSpan: "md:col-span-2",
  },
  {
    title: "Reportes a medida",
    description: "Si necesitas un reporte específico para tu ERP o tu CFO, lo construimos contigo.",
    icon: LineChart,
    colSpan: "md:col-span-1",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-neuron-dark relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Decisiones críticas, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neuron-cyan to-neuron-purple">
              ahora con datos precisos.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            La herramienta se ocupa del trabajo repetitivo y deja la mente humana para lo estratégico.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-neuron-cyan/50 transition-colors group relative overflow-hidden ${feature.colSpan}`}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-neuron-cyan/0 to-neuron-purple/0 group-hover:from-neuron-cyan/10 group-hover:to-neuron-purple/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-neuron-cyan group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
