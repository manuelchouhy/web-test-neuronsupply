"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-neuron-dark">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neuron-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para ver Neuron Supply trabajando con tus datos?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Coordinemos una demo personalizada. En 30 minutos te mostramos cómo se vería con un caso aproximado al tuyo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:contacto@neuronsupply.com?subject=Solicitud de demo - Neuron Supply"
              className="px-8 py-4 bg-gradient-to-r from-neuron-cyan to-neuron-purple text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(138,43,226,0.4)]"
            >
              Solicitar demo ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:contacto@neuronsupply.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              contacto@neuronsupply.com
            </a>
          </div>
        </motion.div>
      </div>
      
      <footer className="absolute bottom-6 w-full text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Neuron Supply. Todos los derechos reservados.
      </footer>
    </section>
  );
}
