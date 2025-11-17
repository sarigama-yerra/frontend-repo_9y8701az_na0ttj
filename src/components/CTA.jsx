import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 text-white rounded-3xl overflow-hidden">
          <div className="p-10 sm:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to build the future of finance?</h3>
              <p className="mt-3 text-white/70">Join leading funds, exchanges, and fintechs building on NebulaX. Start free, scale infinitely.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-6 py-3 text-base font-semibold shadow hover:opacity-95 transition">
                  Create free account
                </a>
                <a href="#docs" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/10 transition">
                  Read the docs
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-12 -z-0 opacity-30 blur-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-300" />
              <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Enterprise</div>
                    <div className="text-3xl font-bold mt-1">Custom</div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white/90 text-zinc-900 px-4 py-2 text-sm font-semibold">
                    Contact sales <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  <li>24/7 white-glove support</li>
                  <li>Dedicated compliance tooling</li>
                  <li>Custom integrations</li>
                  <li>SLAs and onboarding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
