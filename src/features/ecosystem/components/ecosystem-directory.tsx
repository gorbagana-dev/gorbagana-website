import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import {
  ecosystemCategoryHref,
  ecosystemCategoryLabels,
  ecosystemCategorySlugs,
  type EcosystemProject,
} from "@/config/ecosystem";

export function EcosystemDirectory({
  projects,
}: {
  projects: readonly EcosystemProject[];
}) {
  const categories = ecosystemCategoryLabels
    .map((category) => ({
      label: category,
      href: ecosystemCategoryHref(category),
      id: ecosystemCategorySlugs[category],
      projects: projects.filter((project) => project.category === category),
    }))
    .filter((category) => category.projects.length > 0);

  return (
    <>
      <div className="border-b border-white/10 px-6 py-6 sm:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] font-medium text-zinc-300 uppercase transition hover:border-[#4dff91]/50 hover:bg-[#4dff91]/10 hover:text-[#4dff91]"
            >
              {category.label}{" "}
              <span className="text-zinc-600">{category.projects.length}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {categories.map((category) => (
          <section
            key={category.label}
            id={category.id}
            className="grid scroll-mt-28 lg:grid-cols-[13rem_minmax(0,1fr)]"
          >
            <div className="border-b border-white/10 px-6 py-6 sm:px-8 lg:border-r lg:border-b-0">
              <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                {category.label}
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {category.projects.length}{" "}
                {category.projects.length === 1 ? "project" : "projects"}
              </p>
            </div>
            <div className="divide-y divide-white/10">
              {category.projects.map((project) => (
                <ProjectRow key={project.label} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function ProjectRow({ project }: { project: EcosystemProject }) {
  const domain = project.href
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");

  return (
    <Link
      href={project.href}
      className="group grid min-w-0 gap-6 px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 lg:grid-cols-[minmax(13rem,0.9fr)_minmax(0,1.3fr)_minmax(6.5rem,0.3fr)] lg:items-center"
    >
      <div className="min-w-0">
        <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
          {project.meta}
        </p>
        <h3 className="mt-3 font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white">
          {project.label}
        </h3>
      </div>
      <p className="max-w-2xl text-sm leading-6 text-zinc-400">
        {project.description}
      </p>
      <div className="flex min-w-0 items-center justify-between gap-4 lg:justify-end">
        <span className="min-w-0 truncate font-mono text-xs font-medium text-zinc-500 uppercase transition group-hover:text-[#4dff91]">
          {domain}
        </span>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4dff91]"
          weight="bold"
        />
      </div>
    </Link>
  );
}
