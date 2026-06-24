import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/features/site/components/site-chrome";

type InteriorPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

type ResourceLink = {
  label: string;
  href: string;
  description: string;
  meta?: string;
};

type InfoItem = {
  title: string;
  description: string;
  meta?: string;
};

type DetailItem = {
  label: string;
  value: string;
};

export function InteriorPage({
  eyebrow,
  title,
  description,
  children,
}: InteriorPageProps) {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-dvh overflow-x-hidden bg-[#050505] text-white"
      >
        <section className="px-4 pt-20 sm:px-5">
          <div className="mx-auto w-full max-w-[1824px] border-x border-b border-white/10">
            <div className="px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-[#4dff91] uppercase">
                {eyebrow}
              </p>
              <h1 className="mt-5 max-w-6xl font-heading text-[clamp(3.25rem,6.4vw,7.5rem)] leading-[0.92] font-black tracking-[-0.055em] text-white">
                {title}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                {description}
              </p>
            </div>
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export function InteriorSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid border-t border-white/10 lg:grid-cols-[0.72fr_1.28fr]">
      <div className="border-b border-white/10 px-6 py-8 sm:px-10 lg:border-r lg:border-b-0">
        <h2 className="max-w-xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function ResourceGrid({ links }: { links: readonly ResourceLink[] }) {
  return (
    <div className="grid sm:grid-cols-2">
      {links.map((link) => (
        <ResourceCard key={link.label} {...link} />
      ))}
    </div>
  );
}

export function ResourceCard({
  label,
  href,
  description,
  meta,
}: ResourceLink) {
  return (
    <Link
      href={href}
      className="group min-w-0 border-b border-white/10 px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 even:sm:border-l"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          {meta ? (
            <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
              {meta}
            </p>
          ) : null}
          <h3 className="truncate font-heading text-2xl font-black tracking-[-0.03em] text-white">
            {label}
          </h3>
        </div>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-zinc-500 transition group-hover:text-[#4dff91]"
          weight="bold"
        />
      </div>
      <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </Link>
  );
}

export function TextRows({
  rows,
}: {
  rows: readonly {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="divide-y divide-white/10 border-t border-white/10">
      {rows.map((row) => (
        <div key={row.title} className="px-6 py-7 sm:px-8">
          <h3 className="font-heading text-2xl font-black tracking-[-0.03em] text-white">
            {row.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
            {row.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function InfoGrid({ items }: { items: readonly InfoItem[] }) {
  return (
    <div className="grid sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="min-w-0 border-b border-white/10 px-6 py-7 sm:px-8 even:sm:border-l"
        >
          {item.meta ? (
            <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
              {item.meta}
            </p>
          ) : null}
          <h3 className="font-heading text-2xl font-black tracking-[-0.03em] text-white">
            {item.title}
          </h3>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function DetailGrid({ items }: { items: readonly DetailItem[] }) {
  return (
    <div className="grid sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-0 border-b border-white/10 px-6 py-6 sm:px-8 even:sm:border-l"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
            {item.label}
          </p>
          <p className="mt-3 break-words font-heading text-2xl font-black tracking-[-0.03em] text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
