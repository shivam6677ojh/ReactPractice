import { useState, useEffect } from 'react'

const slides = [
    {
        image:
            'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
        title: 'Mountain Escape',
        description: 'Crisp air, quiet peaks, and a sky painted in pastel tones.',
        tag: 'Nature',
    },
    {
        image:
            'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
        title: 'City Lights',
        description: 'A skyline alive with color, energy, and late-night stories.',
        tag: 'Urban',
    },
    {
        image:
            'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
        title: 'Golden Forest',
        description: 'Sunbeams cutting through the trees, turning fog into gold.',
        tag: 'Forest',
    },
    {
        image:
            'https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
        title: 'Quiet Shore',
        description: 'Soft waves, warm sand, and a horizon slowly fading to dusk.',
        tag: 'Beach',
    },
    {
        image:
            'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
        title: 'Road to Nowhere',
        description: 'A winding road through the mountains, inviting new stories.',
        tag: 'Journey',
    },
]

const Slider = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(
            () => setIndex((i) => (i + 1) % slides.length),
            4500,
        )

        return () => clearInterval(timer)
    }, [])

    const prevSlide = () => {
        setIndex((current) => (current - 1 + slides.length) % slides.length)
    }

    const nextSlide = () => {
        setIndex((current) => (current + 1) % slides.length)
    }

    const current = slides[index]

    return (
        <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-8 md:py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                    <div className="space-y-2 animate-fade-in">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                            Featured Gallery
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base max-w-md">
                            Smooth, auto-playing slider built with React and Tailwind CSS.
                            Tap through the scenes, or sit back and enjoy the tour.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-300/80">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 border border-slate-700/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Auto-play on
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 border border-slate-700/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                            {index + 1} / {slides.length}
                        </span>
                    </div>
                </div>

                <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] bg-slate-900/70 border border-slate-800 group animate-pop-in">
                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900/80 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 animate-[progress_4.5s_linear_infinite] origin-left"
                            style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                        />
                    </div>

                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                    <img
                        key={current.image}
                        src={current.image}
                        alt={current.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Caption */}
                    <div className="absolute inset-x-5 bottom-4 md:bottom-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                        <div className="max-w-md bg-slate-950/60 backdrop-blur-md rounded-2xl px-3.5 py-2.5 border border-slate-800/80 shadow-lg shadow-slate-950/80">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-300 border border-sky-500/40">
                                    {current.tag}
                                </span>
                                <span className="text-[10px] text-slate-300/80">
                                    Slide {index + 1} of {slides.length}
                                </span>
                            </div>
                            <h3 className="text-sm md:text-base font-semibold leading-tight mb-0.5">
                                {current.title}
                            </h3>
                            <p className="text-[11px] md:text-[13px] text-slate-300/90 leading-snug">
                                {current.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 self-end">
                            <button
                                type="button"
                                onClick={prevSlide}
                                className="inline-flex items-center justify-center bg-slate-950/80 hover:bg-slate-900/90 text-white/95 h-9 w-9 text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg shadow-slate-950/80 border border-slate-700/80 backdrop-blur-sm"
                                aria-label="Previous slide"
                            >
                                ❮
                            </button>
                            <button
                                type="button"
                                onClick={nextSlide}
                                className="inline-flex items-center justify-center bg-sky-500/90 hover:bg-sky-400 text-slate-950 h-9 w-9 text-lg rounded-full transition-all hover:scale-105 hover:shadow-lg shadow-sky-500/60 border border-sky-400/70"
                                aria-label="Next slide"
                            >
                                ❯
                            </button>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    i === index
                                        ? 'bg-white w-6 shadow-[0_0_10px_rgba(248,250,252,0.8)]'
                                        : 'bg-white/40 hover:bg-white/80 w-2'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider
