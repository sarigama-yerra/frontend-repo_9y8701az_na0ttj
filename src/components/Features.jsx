import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Code2, Banknote } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Insured Custody',
    desc: 'Multi-party computation wallets with institutional controls and insurance.',
  },
  {
    icon: Zap,
    title: 'Ultra-low Latency',
    desc: 'Colocated execution with sub-200ms order placement and smart routing.',
  },
  {
    icon: Code2,
    title: 'Developer-first',
    desc: 'Simple SDKs, webhooks, and sandbox environments to ship faster.',
  },
  {
    icon: Banknote,
    title: 'Fiat On/Off Ramps',
    desc: 'Global settlement rails with compliance baked-in from day one.',
  },
]

export default function Features() {
  return (
    <section id="products" className="relative py-24 sm:py-28">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[80%] rounded-full bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-amber-400/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Everything you need to build at crypto speed
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            A unified platform that scales from your first test transaction to billions in volume.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 shadow-sm"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-white/90 grid place-items-center">
                  <Icon className="h-5 w-5 text-fuchsia-600" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
