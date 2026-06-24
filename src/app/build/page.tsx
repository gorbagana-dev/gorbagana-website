import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { JsonLd } from "@/components/json-ld";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";
import {
  InfoGrid,
  InteriorPage,
  InteriorSection,
  ResourceGrid,
} from "@/features/site/components/interior-page";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/build");

const breadcrumbJsonLd = createBreadcrumbJsonLd("/build");

const docsBaseUrl = siteConfig.links.docs.replace(/\/$/, "");

const buildPath = [
  {
    title: "Set up",
    meta: "RPC",
    description:
      "Connect clients and tooling to the live network before reads, transfers, and deploys.",
    href: `${docsBaseUrl}/docs/build/setup`,
    cta: "Setup docs",
  },
  {
    title: "Fund",
    meta: "Bridge",
    description:
      "Move GOR onto Gorbagana and keep enough native GOR in the deploy wallet for fees and program rent.",
    href: gorbaganaNetwork.urls.bridge,
    cta: "Open bridge",
  },
  {
    title: "Deploy",
    meta: "Programs",
    description:
      "Build SVM programs with Solana or Anchor tooling, then deploy to the Gorbagana RPC endpoint.",
    href: `${docsBaseUrl}/docs/build/deploy-programs`,
    cta: "Deploy docs",
  },
  {
    title: "Inspect",
    meta: "Explorer",
    description:
      "Verify transactions, program accounts, logs, and validator activity in the explorer after every deploy.",
    href: gorbaganaNetwork.urls.explorer,
    cta: "Open explorer",
  },
] as const;

const buildReasons = [
  {
    title: "Familiar SVM path",
    meta: "Tooling",
    description:
      "Use Solana-style accounts, programs, transactions, RPC, and deployment tooling.",
  },
  {
    title: "Lower-cost iteration",
    meta: "Testing",
    description:
      "Try high-frequency app flows, games, social mechanics, and token experiments without treating every action like a high-cost transaction.",
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
      "Ship into a community that tries on-chain apps, memes, games, tools, and experiments in public.",
  },
] as const;

const builderTypes = [
  {
    title: "Solana builders",
    meta: "SVM",
    description:
      "Port familiar program, client, and deployment patterns to a separate live network.",
  },
  {
    title: "Consumer app builders",
    meta: "Apps",
    description:
      "Test social, game, and community mechanics where frequent transactions are part of the product.",
  },
  {
    title: "Infrastructure teams",
    meta: "Support",
    description:
      "Add Gorbagana support through familiar RPC behavior and SVM assumptions.",
  },
  {
    title: "Ecosystem teams",
    meta: "Launch",
    description:
      "Launch apps, tools, tokens, and experiments for users already active on Gorbagana.",
  },
] as const;

const developerResources = [
  {
    label: "Quickstart",
    href: `${docsBaseUrl}/docs/quickstart`,
    meta: "Start",
    description:
      "Configure the network, connect a wallet, fund it, and send the first transaction.",
  },
  {
    label: "Deploy programs",
    href: `${docsBaseUrl}/docs/build/deploy-programs`,
    meta: "Programs",
    description:
      "Build, deploy, upgrade, inspect, and manage SVM programs on Gorbagana.",
  },
  {
    label: "First app",
    href: `${docsBaseUrl}/docs/guides/first-app`,
    meta: "Apps",
    description:
      "Connect to RPC, read a balance, send a small transfer, and open it in the explorer.",
  },
  {
    label: "Cheat sheet",
    href: `${docsBaseUrl}/docs/reference/cheat-sheet`,
    meta: "Reference",
    description:
      "Copy the common endpoints, CLI commands, bridge link, and deployment references.",
  },
] as const;

const toolingResources = [
  {
    label: "Solana CLI",
    href: `${docsBaseUrl}/docs/reference/cli`,
    meta: "Core",
    description:
      "Use standard CLI commands for keys, balances, RPC configuration, deploys, logs, and program inspection.",
  },
  {
    label: "Anchor",
    href: `${docsBaseUrl}/docs/build/anchor`,
    meta: "Framework",
    description:
      "Use Anchor when your program already follows the common Solana Rust development workflow.",
  },
  {
    label: "Frontend clients",
    href: `${docsBaseUrl}/docs/build/frontend`,
    meta: "Apps",
    description:
      "Use Solana-compatible TypeScript clients for RPC reads, transaction building, and app flows.",
  },
  {
    label: "Wallet setup",
    href: `${docsBaseUrl}/docs/build/wallets`,
    meta: "Wallets",
    description:
      "Configure Backpack and other Solana-compatible wallets for Gorbagana network access.",
  },
] as const;

function BuildPathGrid() {
  return (
    <div className="grid sm:grid-cols-2">
      {buildPath.map((step) => (
        <Link
          key={step.title}
          href={step.href}
          className="group min-w-0 border-b border-white/10 px-6 py-8 transition hover:bg-white/[0.03] sm:px-8 even:sm:border-l"
        >
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                {step.meta}
              </p>
              <h3 className="mt-3 font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white sm:text-4xl">
                {step.title}
              </h3>
            </div>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-zinc-500 transition group-hover:text-[#4dff91]"
              weight="bold"
            />
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
            {step.description}
          </p>
          <p className="mt-5 font-mono text-xs font-bold text-white uppercase transition group-hover:text-[#4dff91]">
            {step.cta}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default function BuildPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Build"
        title="Build on Gorbagana"
        description="Bring Solana-style tooling to a live network built for lower-cost app experiments and fast on-chain feedback."
      >
        <InteriorSection title="Developer path">
          <BuildPathGrid />
        </InteriorSection>

        <InteriorSection title="Start building">
          <ResourceGrid links={developerResources} />
        </InteriorSection>

        <InteriorSection title="Why build on Gorbagana?">
          <div className="border-b border-white/10 px-6 py-8 sm:px-8">
            <p className="max-w-2xl text-base leading-7 text-zinc-400">
              Gorbagana gives Solana-style builders a live SVM network where
              frequent app actions, games, social flows, and token experiments
              stay affordable to test.
            </p>
          </div>
          <InfoGrid items={buildReasons} />
        </InteriorSection>

        <InteriorSection title="Tooling">
          <ResourceGrid links={toolingResources} />
        </InteriorSection>

        <InteriorSection title="Who it is for">
          <InfoGrid items={builderTypes} />
        </InteriorSection>
      </InteriorPage>
    </>
  );
}
