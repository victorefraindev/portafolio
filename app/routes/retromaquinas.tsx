import { useState } from "react";
import type { Route } from "./+types/retromaquinas";
import { brand } from "~/demos/retromaquinas/content";
import { RetroNavbar } from "~/demos/retromaquinas/RetroNavbar";
import { RetroHero } from "~/demos/retromaquinas/RetroHero";
import { RetroServices } from "~/demos/retromaquinas/RetroServices";
import { RetroRepairs } from "~/demos/retromaquinas/RetroRepairs";
import { RetroProcess } from "~/demos/retromaquinas/RetroProcess";
import { RetroGuarantees } from "~/demos/retromaquinas/RetroGuarantees";
import { RetroFaq } from "~/demos/retromaquinas/RetroFaq";
import { RetroContact } from "~/demos/retromaquinas/RetroContact";
import { RetroFooter } from "~/demos/retromaquinas/RetroFooter";
import "~/demos/retromaquinas/retromaquinas.css";

export function meta({}: Route.MetaArgs) {
  const title = `${brand.name} — Compra y reparación de consolas`;
  const description =
    "Compramos consolas en cualquier estado y reparamos las que no encienden. Diagnóstico honesto, precio antes de reparar y garantía de 30 días. En Caracas y con envíos a todo el país.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },
  {
    rel: "icon",
    href: "/retromaquinas-favicon.svg",
    type: "image/svg+xml",
  },
];

export default function Retromaquinas() {
  const [reason, setReason] = useState("");
  const [service, setService] = useState("");

  function startRepair() {
    setReason("reparar");
    setService("");
  }

  function startSell() {
    setReason("vender");
    setService("");
  }

  function selectRepair(name: string) {
    setReason("reparar");
    setService(name);
  }

  return (
    <div className="rm-root">
      <RetroNavbar onRepair={startRepair} onSell={startSell} />
      <main>
        <RetroHero onRepair={startRepair} onSell={startSell} />
        <RetroServices onRepair={startRepair} onSell={startSell} />
        <RetroRepairs onSelect={selectRepair} onRepair={startRepair} />
        <RetroProcess onRepair={startRepair} onSell={startSell} />
        <RetroGuarantees />
        <RetroFaq />
        <RetroContact
          reason={reason}
          service={service}
          onReasonChange={setReason}
          onServiceChange={setService}
        />
      </main>
      <RetroFooter />
    </div>
  );
}
