import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  const menuItems = ['Home', 'Gallery', 'Features', 'Contact']

  return (
    <header className="backdrop-blur-xl bg-slate-950/70 text-white px-6 py-3 shadow-lg shadow-blue-500/10 sticky top-0 z-20 border-b border-slate-800/80 animate-drop-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 text-lg font-extrabold shadow-md shadow-blue-500/40">
            M
          </span>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight">MiniApp</h1>
            <p className="hidden sm:block text-[11px] text-slate-300/80 tracking-wide uppercase">Tiny project, premium finish</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm lg:text-[15px] font-medium">
          <ul className="flex gap-6">
            {menuItems.map((item, idx) => (
              <li
                key={item}
                className="relative cursor-pointer text-slate-200/80 hover:text-white transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-slate-500/70 group-hover:bg-blue-400/80 transition-colors" />
                  {item}
                </span>
                {idx === 0 && (
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-6 rounded-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                )}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-400/80 rounded-full transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-sky-500/40 hover:shadow-sky-400/60 hover:-translate-y-[1px] active:translate-y-0 transition-all">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/70" />
            Get Started
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-slate-100 text-sm shadow-sm shadow-slate-900/80 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-colors"
          aria-label="Toggle navigation menu"
        >
          <span className="mr-1 text-[11px] tracking-wide uppercase">Menu</span>
          <span className="text-lg">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden origin-top transition-all duration-250 ease-out ${
          open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mt-3 rounded-2xl border border-slate-800/80 bg-slate-950/95 px-4 py-3 shadow-xl shadow-slate-950/90">
          <ul className="flex flex-col gap-1.5 text-sm">
            {menuItems.map((item, idx) => (
              <li
                key={item}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-slate-200/90 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-600/80" />
                  {item}
                </span>
                {idx === 0 && (
                  <span className="text-[10px] font-semibold uppercase text-sky-400/90 bg-sky-500/10 px-1.5 py-0.5 rounded-full border border-sky-500/30">
                    Active
                  </span>
                )}
              </li>
            ))}
          </ul>

          <button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-sky-500/40 hover:shadow-sky-400/60 hover:-translate-y-[1px] active:translate-y-0 transition-all">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900/70" />
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
