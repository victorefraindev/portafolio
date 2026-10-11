import { contactNote, profile } from "~/data/site";

const channels = [
  {
    label: "Correo",
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
  {
    label: "GitHub",
    href: profile.github,
    value: profile.github.replace("https://", ""),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: profile.linkedin.replace("https://", ""),
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Contacto
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">{contactNote}</p>

      <ul className="mt-12 max-w-2xl">
        {channels.map((c) => (
          <li key={c.label} className="border-t border-line first:border-t-0">
            <a
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group flex flex-col gap-1 py-6 transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-mono text-sm text-faint">{c.label}</span>
              <span className="text-lg text-fg underline decoration-line underline-offset-4 transition-colors group-hover:text-violet group-hover:decoration-violet">
                {c.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}