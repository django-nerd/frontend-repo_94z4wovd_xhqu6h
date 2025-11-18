import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#93c5fd_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Supplier management,
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">simplified</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-base text-blue-200/90 sm:text-lg"
          >
            Connect estate agents, contractors and tenants in one seamless workspace. Automate onboarding, track jobs, and resolve issues faster.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
          >
            <a href="#cta" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30">
              Get started
            </a>
            <a href="#features" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-md transition hover:bg-white/15">
              Explore features
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-blue-200/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Live vendor status</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Automated compliance</span>
            </div>
          </div>
        </div>

        {/* 3D Spline scene */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-[420px] w-full md:h-[560px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/10 blur-3xl" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/30 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
