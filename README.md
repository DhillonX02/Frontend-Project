# Agency AI

A responsive creative-agency landing page built as a React and Tailwind CSS
practice project. The page is a frontend demo; it does not include AI features
or a backend.

## Run locally

```sh
npm install
npm run dev
```

## React concepts in this project

- Reusable components and passing props (`Navbar`, `ThemeToggleBtn`)
- State and event handlers for the mobile menu, theme switch, and contact form
- Rendering repeated navigation links, services, projects, and client logos with
  `map`
- Controlled form inputs, native validation, and conditional status messages
- `useEffect` for applying the selected theme to the document
- Responsive layouts, dark-mode styles, and interactive states with Tailwind CSS

The contact form is intentionally frontend-only: submitting it displays a demo
confirmation and does not send or save the message.
