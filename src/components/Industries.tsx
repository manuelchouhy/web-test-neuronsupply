"use client";

import { motion } from "framer-motion";
import { Pill, Apple, Truck, Factory, Sparkles, Stethoscope } from "lucide-react";

const industries = [
  { name: "Laboratorios y Farma", icon: Pill, desc: "Caducidad y trazabilidad estricta." },
  { name: "Alimentos y Bebidas", icon: Apple, desc: "Fletes internacionales y aduana." },
  { name: "Repuestos", icon: Truck, desc: "Catálogos amplios, demanda intermitente." },
  { name: "Manufactura", icon: Factory, desc: "Materias primas e insumos periódicos." },
  { name: "Cosmética", icon: Sparkles, desc: "Alta rotación y estacionalidad." },
  { name: "Equipamiento Médico", icon: Stethoscope, desc: "Alta criticidad para hospitales." },
];

export default function Industries() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            Para empresas con catálogos <span className="text-neuron-cyan">complejos</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cientos a miles de SKUs, donde la reposición es una actividad crítica y semanal.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center text-center group"
            >
              <ind.icon className="w-10 h-10 text-neuron-purple mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg text-white mb-2">{ind.name}</h3>
              <p className="text-sm text-gray-400">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
