import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
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
          <div className="mx-auto w-full max-w-[1824px] border-x border-b border-white/10">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,316px)] xl:grid-cols-[minmax(0,1fr)_332px]">
              <div
                data-hero-copy
                className="min-w-0 lg:border-r lg:border-white/10"
              >
                <div className="px-5 pt-12 pb-10 sm:px-8 sm:pt-16 sm:pb-12 lg:px-10 lg:pt-20">
                  <TextAnimate
                    as="h1"
                    animation="slideUp"
                    by="word"
                    duration={0.56}
                    startOnView={false}
                    once
                    className="max-w-[1100px] font-heading text-[clamp(3rem,5.9vw,6.7rem)] leading-[0.92] font-black tracking-[-0.052em] text-white"
                  >
                    A Solana fork for internet-native apps
                  </TextAnimate>
                </div>
                <div className="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-10">
                  <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                    Build apps, tokens, and network services on a live
                    Solana-derived L1 with native GOR and SVM-compatible
                    tooling.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full bg-[#4dff91] px-6 font-mono text-sm font-bold text-black uppercase hover:bg-[#72ffaa]"
                    >
                      <Link href="/build">Start building</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                    >
                      <Link href="/network">View network</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div
                data-hero-stats
                className="relative min-w-0 overflow-hidden lg:border-t lg:border-white/10"
              >
                <NetworkStatsRail variant="compact" />
                <BorderBeam
                  borderWidth={1}
                  colorFrom="#4dff91"
                  colorTo="#d7ffe5"
                  duration={10}
                  size={120}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1824px] divide-y divide-white/10 border-x border-b border-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
            {actionLinks.map((actionLink) => (
              <ActionLink key={actionLink.label} {...actionLink} reveal />
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1824px] gap-12 border-x border-b border-white/10 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
            <div className="max-w-2xl">
              <AnimatedSectionHeading className="max-w-2xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                A familiar SVM path for real apps.
              </AnimatedSectionHeading>
              <p className="mt-7 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Gorbagana keeps the Solana-style developer surface while giving
                builders a live network for apps, tokens, games, tools, and
                community-native products.
              </p>
            </div>
            <div className="grid border border-white/10 sm:grid-cols-2">
              {whyReasons.map((reason) => (
                <WhyReason key={reason.title} {...reason} reveal />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5">
          <div className="mx-auto grid w-full max-w-[1824px] gap-12 border-x border-b border-white/10 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div className="min-w-0">
              <AnimatedSectionHeading className="max-w-4xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Find what is live on Gorbagana.
              </AnimatedSectionHeading>
              <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Apps, launchpads, privacy tools, and network services already
                running on Gorbagana.
              </p>
              <div className="mt-9">
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                >
                  <Link href="/ecosystem">View ecosystem</Link>
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 grid-cols-1 border border-white/10 sm:grid-cols-2">
              {ecosystemProjects.map((project) => (
                <EcosystemPreview
                  key={project.label}
                  project={project}
                  reveal
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-5" id="use-gorbagana">
          <div className="mx-auto grid w-full max-w-[1824px] border-x border-b border-white/10 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="border-b border-white/10 px-6 py-16 sm:px-10 lg:border-r lg:border-b-0 lg:py-20">
              <AnimatedSectionHeading className="max-w-2xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                Start using Gorbagana.
              </AnimatedSectionHeading>
              <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Bridge GOR, connect Backpack, open live apps, and verify
                activity with the explorer.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#4dff91] px-6 font-mono text-sm font-bold text-black uppercase hover:bg-[#72ffaa]"
                >
                  <Link href={gorbaganaNetwork.urls.bridge}>Bridge GOR</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
                >
                  <Link href="/ecosystem">View apps</Link>
                </Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2">
              {useLinks.map((useLink) => (
                <UseLink key={useLink.label} {...useLink} reveal />
              ))}
            </div>
          </div>
        </section>

        <section data-origin-section className="px-4 sm:px-5">
          <div className="relative mx-auto flex w-full max-w-[1824px] flex-col justify-between gap-8 border-x border-b border-white/10 px-6 py-16 sm:px-10 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-[#4dff91] uppercase">
                Origin
              </p>
              <AnimatedSectionHeading className="mt-5 max-w-4xl font-heading text-4xl leading-none font-black tracking-[-0.04em] text-white sm:text-6xl">
                From a 48-hour challenge to a live chain.
              </AnimatedSectionHeading>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-12 w-fit rounded-full border-white/15 bg-white/[0.03] px-6 font-mono text-sm font-bold text-white uppercase hover:bg-white/10 hover:text-white"
            >
              <Link href="/origin">Read origin</Link>
            </Button>
            <div
              aria-hidden="true"
              className="absolute right-6 bottom-0 left-6 h-px origin-left overflow-hidden bg-white/10 sm:right-10 sm:left-10"
            >
              <div
                data-origin-progress
                className="h-full w-full origin-left scale-x-0 bg-[#4dff91]"
              />
            </div>
          </div>
        </section>
      </HomeMotionRoot>
      <SiteFooter />
    </>
  );
}

function AnimatedSectionHeading({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <TextAnimate
      as="h2"
      animation="slideUp"
      by="word"
      duration={0.46}
      once
      className={className}
    >
      {children}
    </TextAnimate>
  );
}

function UseLink({
  label,
  meta,
  href,
  description,
  reveal = false,
}: {
  label: string;
  meta: string;
  href: string;
  description: string;
  reveal?: boolean;
}) {
  return (
    <Link
      href={href}
      data-gsap-reveal={reveal ? "" : undefined}
      className="group flex min-h-52 min-w-0 flex-col justify-between border-b border-white/10 p-6 transition last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:p-8 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
          {meta}
        </p>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4dff91]"
          weight="bold"
        />
      </div>
      <div>
        <h3 className="font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
          {label}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
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
  reveal = false,
}: {
  title: string;
  meta: string;
  description: string;
  reveal?: boolean;
}) {
  return (
    <div
      data-gsap-reveal={reveal ? "" : undefined}
      className="min-w-0 border-b border-white/10 px-6 py-7 last:border-b-0 sm:min-h-56 sm:border-b-0 sm:px-8 sm:even:border-l sm:[&:nth-child(-n+2)]:border-b"
    >
      <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
        {meta}
      </p>
      <h3 className="mt-4 font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function EcosystemPreview({
  project,
  reveal = false,
}: {
  project: EcosystemProject;
  reveal?: boolean;
}) {
  return (
    <Link
      href={project.href}
      data-gsap-reveal={reveal ? "" : undefined}
      className="group flex min-h-40 min-w-0 flex-col border-b border-white/10 p-5 transition last:border-b-0 hover:bg-white/[0.03] sm:min-h-44 sm:border-b-0 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b"
    >
      <div className="flex min-w-0 items-start justify-between gap-4">
        <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
          {project.meta}
        </p>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4dff91]"
          weight="bold"
        />
      </div>
      <div className="mt-8">
        <h3 className="font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
          {project.label}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 break-words text-zinc-400">
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
  reveal = false,
}: {
  label: string;
  meta: string;
  href: string;
  description: string;
  reveal?: boolean;
}) {
  return (
    <Link
      href={href}
      data-gsap-reveal={reveal ? "" : undefined}
      className="group block min-h-40 min-w-0 px-6 py-7 transition hover:bg-white/[0.03] sm:px-10 lg:px-6"
    >
      <div className="flex min-w-0 items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
            {meta}
          </p>
          <h2 className="mt-2 font-heading text-xl font-black tracking-[-0.02em] text-white">
            {label}
          </h2>
        </div>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="mt-1 size-5 shrink-0 text-zinc-500 transition group-hover:text-[#4dff91]"
          weight="bold"
        />
      </div>
      <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </Link>
  );
}
