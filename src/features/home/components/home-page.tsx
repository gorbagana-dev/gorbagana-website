import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import CultureBanner from "../../../../design-system/gorbagana/assets/brand/gorbagana-banner.png";
import BrandPortrait from "../../../../design-system/gorbagana/assets/brand/gorbagana-pfp.png";
import { Button } from "@/components/ui/button";
import { ecosystemProjects, type EcosystemProject } from "@/config/ecosystem";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";
import { NetworkStatsRail } from "@/features/network-status/components/network-proof";
import { SiteFooter, SiteHeader } from "@/features/site/components/site-chrome";
import { HomeMotionRoot } from "./home-motion-root";

const docsBaseUrl = siteConfig.links.docs.replace(/\/$/, "");

const actionLinks = [
  {
    label: "Build",
    meta: "Developers",
    href: "/build",
    description: "Set up RPC, fund a wallet, deploy programs, and inspect results.",
  },
  {
    label: "Network",
    meta: "Network",
    href: "/network",
    description: "Endpoints, validators, bridge, token values, and live activity.",
  },
  {
    label: "Bridge GOR",
    meta: "Token",
    href: gorbaganaNetwork.urls.bridge,
    description: "Move GOR between Solana and Gorbagana.",
  },
  {
    label: "Open explorer",
    meta: "Activity",
    href: gorbaganaNetwork.urls.explorer,
    description: "Inspect blocks, transactions, programs, and accounts.",
  },
] as const;

const useLinks = [
  {
    label: "Bridge GOR",
    meta: "Bridge",
    href: gorbaganaNetwork.urls.bridge,
    description:
      "Move GOR from Solana to the Gorbagana native network before using apps.",
  },
  {
    label: "Connect Backpack",
    meta: "Wallet",
    href: `${docsBaseUrl}/docs/build/wallets`,
    description:
      "Add Gorbagana to Backpack and keep native GOR available for fees.",
  },
  {
    label: "Explore apps",
    meta: "Apps",
    href: "/ecosystem",
    description:
      "Open live apps, launchpads, infrastructure, and privacy tools in the ecosystem.",
  },
  {
    label: "Check activity",
    meta: "Explorer",
    href: gorbaganaNetwork.urls.explorer,
    description:
      "Verify transactions, accounts, programs, and validators in the explorer.",
  },
] as const;

const whyReasons = [
  {
    title: "SVM-compatible development",
    meta: "Tooling",
    description:
      "Use familiar accounts, programs, transactions, RPC, and Solana-style tooling.",
  },
  {
    title: "On-chain room to ship",
    meta: "Experiments",
    description:
      "Run frequent on-chain actions across apps, games, social flows, and token systems without cost dominating the product.",
  },
  {
    title: "Ready to ship",
    meta: "Network",
    description:
      "Bridge GOR, connect a wallet, deploy programs, and verify activity without waiting for a test environment.",
  },
  {
    title: "Community-native apps",
    meta: "Users",
    description:
      "Build for users who already try apps, tokens, tools, and experiments in public.",
  },
] as const;

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <HomeMotionRoot>
        <section data-hero-stage className="px-4 pt-20 sm:px-5">
          <div className="brand-hero mx-auto w-full max-w-[1440px] border-x border-b border-border">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="brand-hero-copy min-w-0 px-6 py-12 sm:px-10 lg:py-20">
                <p className="brand-sticker mb-8">Built by degens for dreamers</p>
                <h1 className="font-heading text-[clamp(3rem,5.5vw,5.5rem)] text-primary">Trash chain.<br />Serious builders.</h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">A Solana fork for internet-native apps. Build on a live Solana-derived L1 with native GOR and SVM-compatible tooling.</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="h-12 px-6 uppercase"><Link href="/build">Start building <ArrowUpRightIcon aria-hidden="true" /></Link></Button>
                  <Button asChild size="lg" variant="outline" className="h-12 px-6 uppercase"><Link href="/network">View network</Link></Button>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 sm:p-10">
                <Image src={BrandPortrait} alt="Green Gorbagana bin character against a neon synthwave sunset." priority sizes="(min-width: 1024px) 40vw, 90vw" className="brand-art h-auto w-full max-w-[480px]" />
              </div>
            </div>
            <div className="border-t border-border bg-card [&>aside]:lg:grid-cols-4"><NetworkStatsRail variant="full" /></div>
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1440px] divide-y divide-border border-x border-b border-border md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {actionLinks.map((actionLink) => (
              <ActionLink key={actionLink.label} {...actionLink} />
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="relative isolate mx-auto grid w-full max-w-[1440px] gap-12 overflow-hidden border-x border-b border-border px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
            <div className="relative z-10 max-w-2xl">
              <SectionHeading className="max-w-2xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                A familiar SVM path for real apps.
              </SectionHeading>
              <p className="mt-7 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Gorbagana keeps the Solana-style developer surface while giving
                builders a live network for apps, tokens, games, tools, and
                community-native products.
              </p>
            </div>
            <div className="relative z-10 grid border border-border sm:grid-cols-2">
              {whyReasons.map((reason) => (
                <WhyReason key={reason.title} {...reason} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 border-x border-b border-border px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div className="min-w-0">
              <SectionHeading className="max-w-4xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Find what is live on Gorbagana.
              </SectionHeading>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Apps, launchpads, privacy tools, and network services already
                running on Gorbagana.
              </p>
              <div className="mt-9">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-sm border-border bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                >
                  <Link href="/ecosystem">View ecosystem</Link>
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 grid-cols-1 border border-border sm:grid-cols-2">
              {ecosystemProjects.map((project) => (
                <EcosystemPreview
                  key={project.label}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1440px] border-x border-b border-border lg:grid-cols-[0.72fr_1.28fr]">
            <div
              className="border-b border-border px-6 py-16 sm:px-10 lg:border-r lg:border-b-0 lg:py-20"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Network culture
              </p>
              <SectionHeading className="mt-5 max-w-2xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                Built in public. Running live.
              </SectionHeading>
              <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Gorbagana pairs live SVM infrastructure with the public energy
                of apps, launchpads, tools, bridge flows, and builders shipping
                on-chain.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-sm bg-primary px-6 font-mono text-sm font-bold text-black uppercase hover:bg-primary-hover"
                >
                  <Link href="/ecosystem">Explore ecosystem</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-sm border-border bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                >
                  <Link href="/origin">Read origin</Link>
                </Button>
              </div>
            </div>
            <div
              className="relative min-h-[260px] overflow-hidden bg-black sm:min-h-[360px] lg:min-h-[520px]"
            >
              <Image
                src={CultureBanner}
                alt="Gorbagana graffiti wordmark, green bin character, and neon city with the slogans Trash people, better people and Built by degens for dreamers."
                fill
                sizes="(min-width: 1024px) 68vw, 100vw"
                className="object-contain"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.08)_55%,rgba(0,0,0,0.45)_100%)]"
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5" id="use-gorbagana">
          <div className="mx-auto grid w-full max-w-[1440px] border-x border-b border-border lg:grid-cols-[0.86fr_1.14fr]">
            <div className="border-b border-border px-6 py-16 sm:px-10 lg:border-r lg:border-b-0 lg:py-20">
              <SectionHeading className="max-w-2xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                Start using Gorbagana.
              </SectionHeading>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Bridge GOR, connect Backpack, open live apps, and verify
                activity with the explorer.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-sm bg-primary px-6 font-mono text-sm font-bold text-black uppercase hover:bg-primary-hover"
                >
                  <Link href={gorbaganaNetwork.urls.bridge}>Bridge GOR</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-sm border-border bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                >
                  <Link href="/ecosystem">View apps</Link>
                </Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2">
              {useLinks.map((useLink) => (
                <UseLink key={useLink.label} {...useLink} />
              ))}
            </div>
          </div>
        </section>

        <section data-origin-section className="px-4 sm:px-5">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden border-x border-b border-border px-6 py-16 sm:px-10 lg:py-20">
            <div className="relative z-10 max-w-4xl">
              <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
                Origin
              </p>
              <SectionHeading className="mt-5 max-w-4xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                From a 48-hour challenge to a live chain.
              </SectionHeading>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-12 w-fit rounded-sm border-border bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
              >
                <Link href="/origin">Read origin</Link>
              </Button>
            </div>
          </div>
        </section>
      </HomeMotionRoot>
      <SiteFooter />
    </>
  );
}

function SectionHeading({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}

function UseLink({
  label,
  meta,
  href,
  description,
}: {
  label: string;
  meta: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-52 min-w-0 flex-col justify-between border-b border-border p-6 transition last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:p-8 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          {meta}
        </p>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          weight="bold"
        />
      </div>
      <div>
        <h3 className="font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
          {label}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}

function WhyReason({
  title,
  meta,
  description,
}: {
  title: string;
  meta: string;
  description: string;
}) {
  return (
    <div
      className="min-w-0 border-b border-border px-6 py-7 last:border-b-0 sm:min-h-56 sm:border-b-0 sm:px-8 sm:even:border-l sm:[&:nth-child(-n+2)]:border-b"
    >
      <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {meta}
      </p>
      <h3 className="mt-4 font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function EcosystemPreview({
  project,
}: {
  project: EcosystemProject;
}) {
  return (
    <Link
      href={project.href}
      className="group flex min-h-40 min-w-0 flex-col border-b border-border p-5 transition last:border-b-0 hover:bg-white/[0.03] sm:min-h-44 sm:border-b-0 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
          {project.meta}
        </p>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          weight="bold"
        />
      </div>
      <div className="mt-8">
        <h3 className="font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
          {project.label}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 break-words text-muted-foreground">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

function ActionLink({
  label,
  meta,
  href,
  description,
}: {
  label: string;
  meta: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block min-h-40 min-w-0 px-6 py-7 transition hover:bg-white/[0.03] sm:px-10 lg:px-6"
    >
      <div className="flex min-w-0 items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            {meta}
          </p>
          <h2 className="mt-2 font-heading text-xl font-black tracking-[-0.02em] text-white">
            {label}
          </h2>
        </div>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:text-primary"
          weight="bold"
        />
      </div>
      <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}
