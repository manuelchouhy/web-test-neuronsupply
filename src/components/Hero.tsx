"use client";

import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neuron-dark/80 z-0 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24 text-center sm:text-left flex flex-col sm:flex-row items-center pointer-events-none max-w-7xl">
        <div className="flex-1 max-w-3xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neuron-cyan/10 text-neuron-cyan border border-neuron-cyan/20 text-sm font-semibold mb-6 tracking-wide uppercase">
              Plataforma Activa
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              Motor de <span className="bg-clip-text text-transparent bg-gradient-to-r from-neuron-cyan to-neuron-purple">planeamiento</span> de inventario
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Software de inventory management diseñado por planificadores reales, para empresas que no pueden darse el lujo de quedarse sin stock — ni de comprar de más.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start justify-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white text-neuron-dark font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span className="relative z-10">Solicitar demo</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neuron-cyan to-neuron-purple opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            
            <a
              href="#features"
              className="px-8 py-4 text-white font-medium rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              Descubrir más
            </a>
          </motion.div>
        </div>
        
        {/* Right side spacer for 3D logo balance on desktop */}
        <div className="flex-1 hidden sm:block h-[500px]" />
      </div>
    </section>
  );
}
