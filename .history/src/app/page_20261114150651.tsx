export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <p className="font-mono text-sm text-accent">Hi, I&apos;m Hamza 👋</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          I build fast, modern web apps that help businesses grow.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Full-stack developer working with Next.js, TypeScript and Tailwind CSS.
        </p>
      </section>

      {/* Temporary placeholders: anchor links aur sticky navbar test karne ke liye */}
      {["projects", "services", "about", "contact"].map((id) => (
        <section
          key={id}
          id={id}
          className="mx-auto max-w-6xl border-t border-border px-4 py-32 sm:px-6"
        >
          <h2 className="text-2xl font-semibold capitalize">{id}</h2>
          <p className="mt-2 text-muted-foreground">Coming soon.</p>
        </section>
      ))}
    </>
  );
}