import { JsonLd } from "@/components/json-ld";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";
import {
  InteriorPage,
  InteriorSection,
  ResourceGrid,
  TextRows,
} from "@/features/site/components/interior-page";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { XLogoIcon } from "@phosphor-icons/react/ssr";

export const metadata = createPageMetadata("/origin");

const breadcrumbJsonLd = createBreadcrumbJsonLd("/origin");

const timeline = [
  {
    time: "Hour 0",
    title: "The challenge starts in public",
    description:
      "A debate between Anatoly Yakovenko and Lex_Node around Solana, branding, and forkability turns into a 48-hour challenge.",
  },
  {
    time: "Hour 6",
    title: "GOR appears on Solana",
    description:
      "The token gives the idea a live market, a name, and a community center before the chain itself is ready.",
  },
  {
    time: "Hour 22",
    title: "The first network path comes online",
    description:
      "Gorbagana builders bring up the early validator path with custom genesis, RPC access, and working transactions.",
  },
  {
    time: "Today",
    title: "The chain keeps running",
    description:
      "Gorbagana now has RPC access, explorer views, bridge support, docs, native GOR, and live ecosystem projects.",
  },
] as const;

const whyItMattered = [
  {
    title: "Tested in public",
    description:
      "The point was not just that Solana code could be copied. The useful test was whether a new network could become reachable, usable, and interesting fast enough for builders to care.",
  },
  {
    title: "Built on familiar tooling",
    description:
      "Accounts, programs, transactions, RPC, and Solana-style tooling gave builders a known surface instead of a new runtime to learn from zero.",
  },
  {
    title: "Shipped before the pitch",
    description:
      "There was no polished announcement first. The chain, token, explorer, and wallet path became the explanation.",
  },
] as const;

const currentNetwork = [
  {
    label: "Runtime",
    value: "SVM",
  },
  {
    label: "Native token",
    value: "GOR",
  },
  {
    label: "RPC endpoint",
    value: gorbaganaNetwork.urls.rpc,
  },
  {
    label: "Explorer",
    value: gorbaganaNetwork.urls.explorer,
  },
] as const;

const people = [
  {
    group: "Creator",
    members: [
      {
        name: "@lex_node",
        href: "https://x.com/lex_node",
      },
    ],
  },
  {
    group: "Core Team",
    members: [
      {
        name: "@AFDudley0",
        href: "https://x.com/AFDudley0",
      },
      {
        name: "@itsdarthdev",
        href: "https://x.com/itsdarthdev",
      },
      {
        name: "@vo_0id",
        href: "https://x.com/vo_0id",
      },
      {
        name: "@rizzmadedev",
        href: "https://x.com/rizzmadedev",
      },
      {
        name: "@nakakash0o",
        href: "https://x.com/nakakash0o",
      },
    ],
  },
  {
    group: "Contributors",
    members: [
      {
        name: "@_TomHoward",
        href: "https://x.com/_TomHoward",
      },
      {
        name: "@internet_shubhi",
        href: "https://x.com/internet_shubhi",
      },
      {
        name: "@Ec1ipse_sol",
        href: "https://x.com/Ec1ipse_sol",
      },
      {
        name: "@Sarv_shaktiman",
        href: "https://x.com/Sarv_shaktiman",
      },
    ],
  },
  {
    group: "Infrastructure",
    members: [
      {
        name: "Laconic",
        href: "https://x.com/laconicnetwork",
      },
    ],
  },
] as const;

export default function OriginPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Origin"
        title="From public challenge to live SVM network"
        description="Gorbagana began as a public Solana fork challenge. The community turned it into a live SVM network with native GOR, apps, and builders."
      >
        <InteriorSection title="The spark">
          <StoryBlock />
        </InteriorSection>

        <InteriorSection title="48 hours">
          <TextRows
            rows={timeline.map((item) => ({
              title: `${item.time}: ${item.title}`,
              description: item.description,
            }))}
          />
        </InteriorSection>

        <InteriorSection title="Why it mattered">
          <EssayCards items={whyItMattered} />
        </InteriorSection>

        <InteriorSection title="What exists now">
          <NetworkSnapshot items={currentNetwork} />
          <ResourceGrid
            links={[
              {
                label: "Build",
                href: "/build",
                meta: "Developers",
                description:
                  "Configure tooling, bridge GOR, deploy programs, and inspect transactions.",
              },
              {
                label: "Ecosystem",
                href: "/ecosystem",
                meta: "Live projects",
                description:
                  "Browse apps, launchpads, privacy tools, and network services already running on Gorbagana.",
              },
              {
                label: "Network",
                href: "/network",
                meta: "Reference",
                description:
                  "Find endpoints, bridge, validator, and token references.",
              },
              {
                label: "Docs",
                href: siteConfig.links.docs,
                meta: "Guides",
                description:
                  "Read setup, wallet, deployment, and network references.",
              },
            ]}
          />
        </InteriorSection>

        <InteriorSection title="People">
          <div className="border-b border-white/10 px-6 py-8 sm:px-8">
            <p className="max-w-2xl text-base leading-7 text-zinc-400">
              Gorbagana is maintained by its core team and supported by
              contributors across development, infrastructure, community, and
              ecosystem work.
            </p>
          </div>
          <PeopleGrid groups={people} />
        </InteriorSection>

        <InteriorSection title="Receipts">
          <ResourceGrid
            links={[
              {
                label: "Origin docs",
                href: "https://docs.gorbagana.wtf/network-history/project-origins.html",
                meta: "Timeline",
                description:
                  "The public Gorbagana timeline from the first challenge to the early network.",
              },
              {
                label: "DL News",
                href: "https://www.dlnews.com/articles/defi/solana-copycat-gorbagana-reaches-60m-as-joke-turns-serious/",
                meta: "Coverage",
                description:
                  "External coverage of the fork, market attention, and early developer activity.",
              },
              {
                label: "GitHub",
                href: siteConfig.links.github,
                meta: "Source",
                description:
                  "Public Gorbagana repositories and network-related project code.",
              },
              {
                label: "Explorer",
                href: gorbaganaNetwork.urls.explorer,
                meta: "Live chain",
                description:
                  "Inspect current transactions, accounts, programs, and validators.",
              },
            ]}
          />
        </InteriorSection>
      </InteriorPage>
    </>
  );
}

function PeopleGrid({
  groups,
}: {
  groups: readonly {
    group: string;
    members: readonly {
      name: string;
      href: string;
    }[];
  }[];
}) {
  return (
    <div className="grid sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.group}
          className="min-w-0 border-b border-white/10 px-6 py-7 sm:px-8 even:sm:border-l"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
            {group.group}
          </p>
          <div className="mt-5 flex flex-col items-start gap-3">
            {group.members.map((member) => (
              <a
                key={member.name}
                href={member.href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex max-w-full items-center gap-2 font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white transition hover:text-[#4dff91]"
              >
                <span className="truncate">{member.name}</span>
                <XLogoIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-zinc-500 transition group-hover/link:text-[#4dff91]"
                  weight="bold"
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function StoryBlock() {
  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10">
      <div className="max-w-3xl space-y-6 text-lg leading-8 text-zinc-300">
        <p>
          Gorbagana did not begin as a foundation roadmap or a careful brand
          rollout. It started in public, inside a debate about whether a chain
          is only its code, or whether defaults, distribution, and social
          gravity matter just as much.
        </p>
        <p>
          The challenge was direct: if Solana can be forked, make the fork real.
          Within hours, GOR had appeared on Solana. Within a day, builders were
          working through the parts that make a chain usable: genesis, validator
          path, RPC, wallet access, and a way for people to inspect what was
          happening.
        </p>
        <p>
          That is why the story stuck. The name was strange, but the work was
          concrete. Gorbagana became a live SVM network because the community
          treated the joke like a build spec.
        </p>
      </div>
      <div className="mt-10 grid border border-white/10 sm:grid-cols-3">
        <StoryStat label="Challenge" value="48 hours" />
        <StoryStat label="Runtime" value="SVM" />
        <StoryStat label="Gas" value="GOR" />
      </div>
    </div>
  );
}

function StoryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
      <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
        {label}
      </p>
      <p className="mt-3 font-heading text-3xl leading-none font-black tracking-[-0.04em] text-white">
        {value}
      </p>
    </div>
  );
}

function EssayCards({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
  }[];
}) {
  return (
    <div className="grid sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="min-w-0 border-b border-white/10 px-6 py-7 sm:border-r sm:px-8 sm:last:border-r-0"
        >
          <h3 className="font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
            {item.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-zinc-400">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function NetworkSnapshot({
  items,
}: {
  items: readonly {
    label: string;
    value: string;
  }[];
}) {
  return (
    <div className="grid border-b border-white/10 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-0 border-b border-white/10 px-6 py-6 sm:px-8 sm:odd:border-r"
        >
          <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
            {item.label}
          </p>
          <p className="mt-3 truncate font-heading text-2xl leading-none font-black tracking-[-0.03em] text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
