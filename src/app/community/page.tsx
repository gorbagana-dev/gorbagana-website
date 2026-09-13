import { GorbagiosFeature } from "@/features/culture/components/gorbagios-feature";
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
  { label: "Meet the Gorbagios", href: "#gorbagios", meta: "Collectors", description: "Explore the faces of the landfill and find the character that feels like you." },
  { label: "Make some good trash", href: siteConfig.links.telegram, meta: "Creators", description: "Share your memes, art, and character stories with the community. Give the trash a life of its own." },
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
  { title: "Make it yours", meta: "Characters", description: "A profile picture is a beginning. Give your Gorbagio a voice, a running joke, or a place in your next piece of art." },
  { title: "Keep the joke going", meta: "Memes", description: "Remix a good idea. Credit the people who made it. Make the next person want to join in." },
  { title: "Build something weird", meta: "Experiments", description: "Games, social tools, and on-chain experiments belong here. Share what you are making and invite people to try it." },
  { title: "Leave room in the bin", meta: "Community", description: "Welcome new faces, answer a question, and help someone find their way. You do not need an NFT or a code repository to join the conversation." },
] as const;

export default function CommunityPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Community"
        title="Welcome to the landfill"
        description="Collectors, artists, meme makers, builders. Bring a Gorbagio, a strange idea, or just yourself. There is more than one way to belong here."
      >
        <GorbagiosFeature />
        <InteriorSection title="Find your people">
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
          className="group flex min-h-56 min-w-0 flex-col justify-between border-b border-border px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 even:sm:border-l"
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {link.meta}
            </p>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              weight="bold"
            />
          </div>
          <div>
            <h3 className="font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white sm:text-4xl">
              {link.label}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
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
          className="group flex min-h-52 min-w-0 flex-col justify-between border-b border-border px-6 py-7 transition hover:bg-white/[0.03] sm:px-8 lg:border-r lg:last:border-r-0"
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {link.meta}
            </p>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              weight="bold"
            />
          </div>
          <div>
            <h3 className="font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white">
              {link.label}
            </h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
              {link.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
