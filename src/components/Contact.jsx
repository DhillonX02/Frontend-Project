import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact-us"
      className="scroll-mt-24 bg-slate-50 px-5 py-20 dark:bg-slate-900/50 sm:px-8 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Your turn
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Have a good one for us?
          </h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600 dark:text-slate-300">
            Tell us what you&apos;re working on, what&apos;s getting in the way,
            or where you want to go next. We&apos;ll take it from there.
          </p>
          <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/40">
            <p className="font-semibold">A real conversation, no pitch deck.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              This practice form demonstrates React state and events. It
              doesn&apos;t send or store your message.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold sm:col-span-2">
              Your name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-violet-900"
                placeholder="Alex Morgan"
              />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Email address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-violet-900"
                placeholder="alex@example.com"
              />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              What are you thinking?
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-violet-900"
                placeholder="A little about your project..."
              />
            </label>
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Send a message <span aria-hidden="true">→</span>
            </button>
            {submitted && (
              <p role="status" className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Thanks, {form.name}! Your message is ready (demo only).
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
