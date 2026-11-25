import type { Route } from "./+types/services";
import { Navbar } from "~/components/Navbar";
import { StarField } from "~/components/StarField";
import { Footer } from "~/components/Footer";
import { Contact } from "~/components/Contact";
import { ServicesHero } from "~/components/ServicesHero";
import { ServicesOffer } from "~/components/ServicesOffer";
import { ServicesDemos } from "~/components/ServicesDemos";
import { ServicesCases } from "~/components/ServicesCases";
import { ServicesProcess } from "~/components/ServicesProcess";
import { ServicesConditions } from "~/components/ServicesConditions";
import { ServicesFaq } from "~/components/ServicesFaq";
import { business, profile } from "~/data/site";

export function meta({}: Route.MetaArgs) {
  const title = `${business.meta.title} | ${profile.shortName}`;
  return [
    { title },
    { name: "description", content: business.meta.description },
    { property: "og:title", content: title },
    { property: "og:description", content: business.meta.description },
    { property: "og:type", content: "website" },
  ];
}

export default function Services() {
  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="relative isolate">
        <Navbar variant="business" />
        <main>
          <ServicesHero />
          <ServicesOffer />
          <ServicesDemos />
          <ServicesCases />
          <ServicesProcess />
          <ServicesConditions />
          <ServicesFaq />
          <Contact variant="business" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
