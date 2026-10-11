import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Projects } from "~/components/Projects";
import { Skills } from "~/components/Skills";
import { Experience } from "~/components/Experience";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";
import { StarField } from "~/components/StarField";
import { profile } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  const title = `${profile.name} — ${profile.role}`;
  return [
    { title },
    {
      name: "description",
      content: profile.blurb,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: profile.blurb },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative isolate">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}