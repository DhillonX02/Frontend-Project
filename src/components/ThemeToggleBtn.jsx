import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className="flex size-10 items-center justify-center rounded-full border border-slate-200 transition hover:border-primary dark:border-slate-700 dark:hover:border-violet-400"
    >
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt=""
        className="size-5"
      />
    </button>
  )
}

export default ThemeToggleBtn
