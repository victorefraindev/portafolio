import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiGo,
  SiSharp,
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiNestjs,
  SiDotnet,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
  SiGrafana,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BsFillFileExcelFill } from "react-icons/bs";
import { TbChartInfographic } from "react-icons/tb";
import { skills } from "~/data/site";

const icons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  Python: SiPython,
  Go: SiGo,
  "C#": SiSharp,
  React: SiReact,
  SvelteKit: SiSvelte,
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs,
  ".NET": SiDotnet,
  PostgreSQL: SiPostgresql,
  "MS SQL": DiMsqlServer,
  Docker: SiDocker,
  Linux: SiLinux,
  Git: SiGit,
  Grafana: SiGrafana,
  Excel: BsFillFileExcelFill,
  "Power BI": TbChartInfographic,
};

export function Skills() {
  return (
    <section id="habilidades" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Habilidades
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Herramientas con las que trabajo a diario y me siento cómodo.
      </p>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.group} className="group bg-bg p-8 transition-colors duration-300 hover:bg-surface">
            <h3 className="font-display text-lg font-medium tracking-tight text-fg">
              {group.group}
            </h3>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => {
                const Icon = icons[item];
                if (!Icon) {
                  return (
                    <li key={item} className="flex items-center gap-3 text-muted">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" />
                      {item}
                    </li>
                  );
                }
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-muted transition-colors duration-300 group-hover:text-fg"
                  >
                    <Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0 text-faint transition-colors duration-300 group-hover:text-violet" />
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}