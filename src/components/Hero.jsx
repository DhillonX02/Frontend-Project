import assets, { company_logos } from '../assets/assets'

const Hero = () => (
  <section
    id="home"
    className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100 via-white to-white dark:from-violet-950/40 dark:via-slate-950 dark:to-slate-950" />
    <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm dark:border-violet-800 dark:bg-slate-900/70 dark:text-violet-300"
        >
          <span className="size-2 rounded-full bg-emerald-500" />
          Independent creative studio
          <span aria-hidden="true">→</span>
        </a>
        <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          We make brands
          <span className="block text-primary">impossible to ignore.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          Strategy, design, and digital experiences that help ambitious
          businesses find their people and grow with purpose.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact-us"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-700"
          >
            Start a project <img src={assets.arrow_icon} width={16} alt="" />
          </a>
          <a
            href="#our-work"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary dark:border-slate-700 dark:hover:border-violet-400 dark:hover:text-violet-300"
          >
            Explore our work
          </a>
        </div>
        <div className="mt-9 flex items-center gap-3">
          <img
            src={assets.group_profile}
            className="h-10 w-auto"
            alt="A group of agency team members"
          />
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">Good people.</span>{' '}
            Good work. Good results.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-200 via-fuchsia-100 to-orange-100 blur-2xl dark:from-violet-900/40 dark:via-fuchsia-900/20 dark:to-orange-900/20" />
        <div className="overflow-hidden rounded-3xl border border-white/70 bg-white p-2 shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900">
          <img
            src={assets.hero_img}
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            alt="Creative team members collaborating on a digital project"
          />
        </div>
        <div className="absolute -bottom-6 left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:-left-6 sm:p-5">
          <p className="text-2xl font-bold text-primary">10+</p>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
            years creating
            <br />
            meaningful work
          </p>
        </div>
        <div className="absolute -right-1 -top-5 rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-xl dark:bg-violet-600 sm:-right-5">
          <p className="text-sm font-semibold">Ideas into impact</p>
          <p className="mt-1 text-xs text-slate-300 dark:text-violet-100">
            One thoughtful step at a time
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-20 max-w-6xl border-t border-slate-200 pt-8 dark:border-slate-800">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
        Good company we keep
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
        {company_logos.map((logo, index) => (
          <img
            key={logo}
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-7 max-w-28 object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert"
          />
        ))}
      </div>
    </div>
  </section>
)

export default Hero
