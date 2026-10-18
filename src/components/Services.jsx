import assets from '../assets/assets'

const services = [
  {
    icon: assets.ads_icon,
    name: 'Brand strategy',
    description:
      'Find your point of difference and turn it into a clear, memorable story.',
    number: '01',
  },
  {
    icon: assets.content_icon,
    name: 'Digital experiences',
    description:
      'Build intuitive websites and products that make every interaction count.',
    number: '02',
  },
  {
    icon: assets.marketing_icon,
    name: 'Growth marketing',
    description:
      'Reach the right people with campaigns shaped by insight and creativity.',
    number: '03',
  },
  {
    icon: assets.social_icon,
    name: 'Content & social',
    description:
      'Create useful, human content that starts conversations and builds trust.',
    number: '04',
  },
]

const Services = () => (
  <section
    id="services"
    className="scroll-mt-24 bg-slate-50 px-5 py-20 dark:bg-slate-900/50 sm:px-8 sm:py-24"
  >
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          What we do
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to move forward.
        </h2>
        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          A small, senior team bringing the right mix of thinking and making to
          every challenge.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.number}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-violet-900"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/50">
                <img src={service.icon} alt="" className="size-7" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-400">
                {service.number}
              </span>
            </div>
            <h3 className="mt-7 text-lg font-bold">{service.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {service.description}
            </p>
            <a
              href="#contact-us"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 dark:text-violet-300"
            >
              Let&apos;s talk <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
