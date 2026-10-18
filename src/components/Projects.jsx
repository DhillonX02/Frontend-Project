import assets from '../assets/assets'

const projects = [
  {
    image: assets.work_mobile_app,
    category: 'Digital product',
    title: 'A calmer way to shop',
    description: 'Product strategy · UX/UI design',
    color: 'from-sky-100 to-indigo-100',
  },
  {
    image: assets.work_fitness_app,
    category: 'Brand & digital',
    title: 'Every move matters',
    description: 'Brand identity · Digital experience',
    color: 'from-rose-100 to-orange-100',
  },
  {
    image: assets.work_dashboard_management,
    category: 'Web platform',
    title: 'Clarity for complex work',
    description: 'Product design · Development',
    color: 'from-emerald-100 to-teal-100',
  },
]

const Projects = () => (
  <section
    id="our-work"
    className="scroll-mt-24 px-5 py-20 dark:bg-slate-950 sm:px-8 sm:py-24"
  >
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Thoughtful work. Real-world impact.
          </h2>
        </div>
        <a
          href="#contact-us"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-violet-300"
        >
          Have a project in mind? <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group">
            <div
              className={`overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-5`}
            >
              <img
                src={project.image}
                alt={`${project.title} project`}
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-md transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
