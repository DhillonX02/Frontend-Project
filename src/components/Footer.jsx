import assets from '../assets/assets'

const Footer = () => (
  <footer className="border-t border-slate-200 px-5 py-8 dark:border-slate-800 sm:px-8">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <a href="#home" aria-label="Agency AI home">
        <img src={assets.logo} className="w-32 dark:brightness-0 dark:invert" alt="Agency AI" />
      </a>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Independent thinking. Thoughtful making.
      </p>
      <a
        href="#home"
        className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-violet-300"
      >
        Back to top ↑
      </a>
    </div>
  </footer>
)

export default Footer
