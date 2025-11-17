import { useState } from 'react'
import { Menu, X, Shield, Coins } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border border-white/20 dark:border-zinc-800/50 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300 p-[2px]">
                <div className="h-full w-full rounded-[10px] bg-white/90 grid place-items-center">
                  <Coins className="h-5 w-5 text-fuchsia-600" />
                </div>
              </div>
              <div className="font-semibold text-zinc-900 dark:text-white text-lg tracking-tight">NebulaX</div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">Sign in</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/20 transition">
                <Shield className="h-4 w-4" /> Launch App
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-800/70 border border-white/20 dark:border-zinc-700">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.name} href={item.href} className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-white dark:text-zinc-300 dark:hover:bg-zinc-800/60">
                    {item.name}
                  </a>
                ))}
                <a href="#" className="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-zinc-900">Launch App</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
