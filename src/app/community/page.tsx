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

export const metadata = createPageMetadata("/community");

const breadcrumbJsonLd = createBreadcrumbJsonLd("/community");

const docsBaseUrl = siteConfig.links.docs.replace(/\/$/, "");

const pathLinks = [
  {
    label: "Explore apps",
    href: "/ecosystem",
    meta: "Users",
    description:
      "Try live apps, bridge GOR, and verify your activity in the explorer.",
  },
  {
    label: "Build on Gorbagana",
    href: "/build",
    meta: "Builders",
    description:
      "Deploy programs, test app flows, and publish work the community can use.",
  },
  {
    label: "Check the network",
    href: "/network",
    meta: "Operators",
    description:
      "Find endpoints, validator references, explorer links, and network values.",
  },
  {
    label: "Contribute",
    href: siteConfig.links.github,
    meta: "Contributors",
    description:
      "Open repos, report issues, improve references, and submit ecosystem updates.",
  },
] as const;

const channelLinks = [
  {
    label: "Telegram",
    href: siteConfig.links.telegram,
    meta: "Community",
    description:
      "Join the main Gorbagana chat for community discussion, updates, and builder coordination.",
  },
  {
    label: "X",
    href: siteConfig.links.x,
    meta: "Updates",
    description:
      "Follow official Gorbagana announcements, ecosystem posts, and public network updates.",
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    meta: "Source",
    description:
      "Open public repositories, report issues, and follow network-related development.",
  },
] as const;

const routingLinks = [
  {
    label: "Chat",
    href: siteConfig.links.telegram,
    meta: "Telegram",
    description:
      "Use the main chat for community discussion, quick questions, and coordination.",
  },
  {
    label: "Updates",
    href: siteConfig.links.x,
    meta: "X",
    description:
      "Follow public announcements, ecosystem posts, and network updates.",
  },
  {
    label: "Issues",
    href: siteConfig.links.github,
    meta: "GitHub",
    description:
      "Use public repositories for source, technical issues, and documentation fixes.",
  },
  {
    label: "Transactions",
    href: gorbaganaNetwork.urls.explorer,
    meta: "Explorer",
    description:
      "Check transaction signatures, accounts, programs, blocks, and validator pages.",
  },
  {
    label: "Submit project",
    href: "/ecosystem#submit-project",
    meta: "Ecosystem",
    description:
      "Share a project with a URL, category, and clear evidence of Gorbagana support.",
  },
  {
    label: "Build help",
    href: siteConfig.links.docs,
    meta: "Docs",
    description:
      "Use setup, deployment, RPC, compatibility, and troubleshooting references.",
  },
] as const;

const startLinks = [
  {
    label: "Bridge GOR",
    href: gorbaganaNetwork.urls.bridge,
    meta: "Token",
    description:
      "Move GOR between Solana and the Gorbagana native network before using apps or deploying.",
  },
  {
    label: "Explore apps",
    href: "/ecosystem",
    meta: "Ecosystem",
    description:
      "Browse apps, launchpads, privacy tools, and network services already running on Gorbagana.",
  },
  {
    label: "Read docs",
    href: siteConfig.links.docs,
    meta: "Guides",
    description:
      "Use setup guides, deployment docs, RPC references, and compatibility notes.",
  },
  {
    label: "Explorer",
    href: gorbaganaNetwork.urls.explorer,
    meta: "Activity",
    description:
      "Inspect transactions, accounts, programs, blocks, and validators on Gorbagana.",
  },
] as const;

const agentLinks = [
  {
    label: "llms.txt",
    href: "/llms.txt",
    meta: "Index",
    description:
      "A concise AI-readable index for the official site, docs, network links, and ecosystem resources.",
  },
  {
    label: "SKILL.md",
    href: "/SKILL.md",
    meta: "Agent guide",
    description:
      "A procedural guide for AI coding agents building, deploying, and debugging on Gorbagana.",
  },
  {
    label: "Docs llms.txt",
    href: `${docsBaseUrl}/llms.txt`,
    meta: "Docs index",
    description:
      "The AI-readable index generated from the Gorbagana documentation source.",
  },
  {
    label: "llms-full.txt",
    href: `${docsBaseUrl}/llms-full.txt`,
    meta: "Docs context",
    description:
      "Full AI-readable documentation generated from the Gorbagana docs site.",
  },
] as const;

const communityPrinciples = [
  {
    title: "Use public channels",
    meta: "Coordination",
    description:
      "Keep project announcements, support requests, and ecosystem submissions easy for others to verify.",
  },
  {
    title: "Point to live work",
    meta: "Ecosystem",
    description:
      "Projects should link to something people can use, inspect, test, or follow.",
  },
  {
    title: "Build in the open",
    meta: "Developers",
    description:
      "Gorbagana started in public, and the strongest contributions are still easy to inspect.",
  },
  {
    title: "Keep references current",
    meta: "Docs",
    description:
      "Network endpoints, bridge links, and deployment notes should stay aligned with the live chain.",
  },
  {
    title: "Learn the origin",
    meta: "Story",
    description:
      "Read the public story to understand how the chain moved from a challenge to a live network.",
  },
] as const;

export default function CommunityPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Community"
        title="Join Gorbagana"
        description="Choose the right channel for chat, updates, source, project submissions, and builder support."
      >
        <InteriorSection title="Choose your path">
          <PathGrid links={pathLinks} />
        </InteriorSection>

        <InteriorSection title="Channels">
          <ChannelGrid links={channelLinks} />
        </InteriorSection>

        <InteriorSection title="Where to go">
          <ResourceGrid links={routingLinks} />
        </InteriorSection>

        <InteriorSection title="Start here">
          <ResourceGrid links={startLinks} />
        </InteriorSection>

        <InteriorSection title="AI agents">
          <ResourceGrid links={agentLinks} />
        </InteriorSection>

        <InteriorSection title="How to participate">
          <InfoGrid items={communityPrinciples} />
        </InteriorSection>
      </InteriorPage>
    </>
  );
}

function PathGrid({ links }: { links: typeof pathLinks }) {
  return (
    <div className="grid sm:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group flex min-h-56 min-w-0 flex-col justify-between border-b border-white/10 px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 even:sm:border-l"
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
              {link.meta}
            </p>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4dff91]"
              weight="bold"
            />
          </div>
          <div>
            <h3 className="font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white sm:text-4xl">
              {link.label}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              {link.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

function ChannelGrid({ links }: { links: typeof channelLinks }) {
  return (
    <div className="grid lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group flex min-h-52 min-w-0 flex-col justify-between border-b border-white/10 px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 lg:border-r lg:last:border-r-0"
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
              {link.meta}
            </p>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4dff91]"
              weight="bold"
            />
          </div>
          <div>
            <h3 className="font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white">
              {link.label}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-zinc-400">
              {link.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
