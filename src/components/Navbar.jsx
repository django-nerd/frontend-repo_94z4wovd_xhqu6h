import React from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className="relative">
      {/* top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-400/20 via-blue-400/10 to-transparent blur-2xl"></div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
          <span className="text-lg font-semibold tracking-tight text-white">PropServ</span>
        </motion.div>

        <div className="hidden items-center gap-8 text-sm text-blue-200/80 md:flex">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <motion.a
          href="#cta"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-md hover:bg-white/15"
        >
          Request a demo
        </motion.a>
      </nav>
    </div>
  )
}

export default Navbar
