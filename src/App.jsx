import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <section id="docs" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-10 bg-white/70 dark:bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Built for compliance-first teams</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl">Our platform ships with audit trails, role-based access, and jurisdiction-aware controls so you can scale with confidence.</p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="rounded-xl border border-zinc-200/70 dark:border-white/10 p-4 bg-white/80 dark:bg-white/5">Role-based policies</div>
                <div className="rounded-xl border border-zinc-200/70 dark:border-white/10 p-4 bg-white/80 dark:bg-white/5">SOC 2 & ISO 27001</div>
                <div className="rounded-xl border border-zinc-200/70 dark:border-white/10 p-4 bg-white/80 dark:bg-white/5">KYB/KYC workflows</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} NebulaX Labs. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Status</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
