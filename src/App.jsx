import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* subtle background */}
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%)]"></div>

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-sm text-blue-200/70">
          <p>© {new Date().getFullYear()} PropServ. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
