import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Users, Wrench, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance automation',
    desc: 'Collect documents, verify insurance and certifications, and get alerts before anything expires.'
  },
  {
    icon: Users,
    title: 'Unified communication',
    desc: 'Keep agents, contractors and tenants aligned with messages, mentions and smart timelines.'
  },
  {
    icon: Wrench,
    title: 'Job lifecycle tracking',
    desc: 'From request to quote to completion — every step tracked with SLAs and approvals.'
  },
  {
    icon: BarChart3,
    title: 'Performance analytics',
    desc: 'Vendor scorecards, spend insights and bottleneck detection built-in.'
  }
]

function Features() {
  return (
    <section id="features" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Built for property operations
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-blue-200/90"
          >
            Everything you need to onboard suppliers, coordinate repairs, and deliver great tenant experiences.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:scale-110" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-cyan-300">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-medium text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
