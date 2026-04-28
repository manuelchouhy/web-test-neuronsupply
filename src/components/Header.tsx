"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 pointer-events-none">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 pointer-events-auto"
        >
          {/* Logo Icon (SVG Constellation) */}
          <div className="w-10 h-10 relative flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#8a2be2" />
                </linearGradient>
              </defs>
              <g stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M 10,40 L 30,10 L 50,50 L 90,40 L 60,80 L 30,60 L 10,40" />
                <path d="M 30,10 L 90,40" />
                <path d="M 10,40 L 50,50" />
              </g>
              <g fill="url(#logo-grad)">
                <circle cx="10" cy="40" r="6" />
                <circle cx="30" cy="10" r="6" />
                <circle cx="50" cy="50" r="6" />
                <circle cx="90" cy="40" r="6" />
                <circle cx="60" cy="80" r="6" />
                <circle cx="30" cy="60" r="6" />
              </g>
            </svg>
          </div>

          {/* Logo Text */}
          <div className="flex flex-col tracking-wider">
            <span className="text-2xl font-black text-white leading-none">NEURON</span>
            <span className="text-sm font-semibold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-neuron-cyan to-neuron-purple leading-none mt-1">
              SUPPLY
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
