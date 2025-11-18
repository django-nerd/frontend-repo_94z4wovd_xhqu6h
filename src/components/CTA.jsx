import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-indigo-700/10 p-8 shadow-[0_10px_50px_-10px_rgba(59,130,246,0.35)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.25),transparent_60%)]"></div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="relative grid items-center gap-8 md:grid-cols-2"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">See PropServ in action</h3>
              <p className="mt-2 text-blue-200/90">Request a walkthrough tailored to your workflow. We’ll show supplier onboarding, job routing, approvals and reporting.</p>
            </div>
            <div className="flex justify-end">
              <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30">
                Request a demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
