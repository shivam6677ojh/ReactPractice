import Header from './components/Header'
import Slider from './components/Slider'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Header />

      <main className="pt-4 pb-10">
        <div className="max-w-6xl mx-auto px-4 space-y-10 md:space-y-12">
          {/* Hero */}
          <section className="py-8 md:py-12 text-center space-y-5 animate-fade-in">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200/90 shadow-sm shadow-slate-950/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              React Mini Project
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Beautiful UI,
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                {' '}
                tiny footprint
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Explore a polished header, a cinematic gallery slider, and a
              clean layout – all inside a compact React + Tailwind setup.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 hover:shadow-sky-400/60 hover:-translate-y-[1px] active:translate-y-0 transition-all">
                Take a tour
                <span className="text-base">↗</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800/90 transition-colors">
                View code
                <span className="text-xs text-slate-300/90">React + Tailwind</span>
              </button>
            </div>
          </section>

          {/* Quick stats */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                label: 'Components',
                value: '3',
                hint: 'Header, hero, gallery',
              },
              {
                label: 'Animation presets',
                value: '4',
                hint: 'Subtle, smooth, reusable',
              },
              {
                label: 'Built with',
                value: 'React',
                hint: 'And Tailwind CSS',
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/70 px-4 py-3.5 shadow-[0_16px_40px_rgba(15,23,42,0.85)] flex flex-col gap-1.5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs text-slate-300/85">{item.hint}</p>
              </article>
            ))}
          </section>
        </div>

        <Slider />

        {/* Footer */}
        <footer className="mt-10 border-t border-slate-800/80 bg-slate-950/80">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <p>
              Crafted as a mini UI playground. Feel free to extend it.
            </p>
            <p className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              React + Tailwind CSS
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
