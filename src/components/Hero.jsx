import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-white/20 to-white dark:from-black/10 dark:via-black/30 dark:to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-8 py-20">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              The new standard for crypto infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-zinc-700/80 dark:text-zinc-300"
            >
              Institutional-grade custody, lightning-fast trading APIs, and on-chain automation — all wrapped in a developer-first platform.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-zinc-900 text-white px-6 py-3 text-base font-semibold shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20 transition">
                Get started
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-white/10 backdrop-blur px-6 py-3 text-base font-semibold text-zinc-900 dark:text-white border border-zinc-200/70 dark:border-white/10 hover:bg-white transition">
                Explore products
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                ['99.995%', 'Uptime'],
                ['200ms', 'Order latency'],
                ['$10B+', 'Monthly volume'],
                ['150+', 'Institutions'],
              ].map(([stat, label]) => (
                <div key={label} className="rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur border border-white/20 dark:border-white/10 p-4">
                  <div className="text-xl font-bold text-zinc-900 dark:text-white">{stat}</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
