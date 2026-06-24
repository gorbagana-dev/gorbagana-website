import { JsonLd } from "@/components/json-ld";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";
import { EndpointGrid } from "@/features/network/components/network-actions";
import { NetworkStatsRail } from "@/features/network-status/components/network-proof";
import {
  DetailGrid,
  InfoGrid,
  InteriorPage,
  InteriorSection,
  ResourceGrid,
} from "@/features/site/components/interior-page";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/network");

const breadcrumbJsonLd = createBreadcrumbJsonLd("/network");
const docsBaseUrl = siteConfig.links.docs.replace(/\/$/, "");

const networkReferences = [
  {
    label: "Network setup",
    href: `${docsBaseUrl}/docs/build/setup`,
    meta: "Docs",
    description:
      "Configure wallets, clients, and local tooling for Gorbagana.",
  },
  {
    label: "Deploy programs",
    href: `${docsBaseUrl}/docs/build/deploy-programs`,
    meta: "Programs",
    description:
      "Build, deploy, upgrade, inspect, and manage SVM programs.",
  },
  {
    label: "CLI reference",
    href: `${docsBaseUrl}/docs/reference/cli`,
    meta: "Commands",
    description:
      "Use the canonical command examples from the docs reference.",
  },
  {
    label: "Cheat sheet",
    href: `${docsBaseUrl}/docs/reference/cheat-sheet`,
    meta: "Reference",
    description:
      "Copy endpoints, token values, links, and deployment references.",
  },
] as const;

export default function NetworkPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Network"
        title="Gorbagana Network"
        description="Connect clients, move GOR, check validators, and verify activity with the live Gorbagana network references."
      >
        <InteriorSection title="Live network">
          <NetworkStatsRail />
        </InteriorSection>

        <InteriorSection title="Endpoints">
          <EndpointGrid
            items={[
              {
                label: "RPC endpoint",
                value: gorbaganaNetwork.urls.rpc,
                href: gorbaganaNetwork.urls.rpc,
                meta: "Connect",
                description:
                  "Use this endpoint with Solana-compatible clients, scripts, wallets, and deployment tooling.",
              },
              {
                label: "Explorer",
                value: gorbaganaNetwork.urls.explorer,
                href: gorbaganaNetwork.urls.explorer,
                meta: "Inspect",
                description:
                  "Search transactions, accounts, programs, blocks, and validator activity.",
              },
              {
                label: "Bridge",
                value: gorbaganaNetwork.urls.bridge,
                href: gorbaganaNetwork.urls.bridge,
                meta: "Move GOR",
                description:
                  "Move GOR between Solana and the Gorbagana native network.",
              },
              {
                label: "Validators",
                value: gorbaganaNetwork.urls.validators,
                href: gorbaganaNetwork.urls.validators,
                meta: "Operate",
                description:
                  "View validator information through the Gorbagana explorer.",
              },
            ]}
          />
        </InteriorSection>

        <InteriorSection title="Token and bridge">
          <DetailGrid
            items={[
              {
                label: "Runtime",
                value: "SVM",
              },
              {
                label: "Native token",
                value: gorbaganaNetwork.nativeCurrency.symbol,
              },
              {
                label: "Native decimals",
                value: String(gorbaganaNetwork.nativeCurrency.decimals),
              },
              {
                label: "Solana GOR token",
                value: gorbaganaNetwork.solanaTokenAddress,
              },
            ]}
          />
          <InfoGrid
            items={[
              {
                title: "Native GOR pays for transactions",
                meta: "Gas",
                description:
                  "GOR is the native gas asset on Gorbagana. Users need native GOR to pay transaction fees.",
              },
              {
                title: "Solana GOR is bridge-side liquidity",
                meta: "Bridge",
                description:
                  "The Solana token address is the bridge-side GOR asset used when moving value between Solana and Gorbagana.",
              },
            ]}
          />
        </InteriorSection>

        <InteriorSection title="Builder references">
          <ResourceGrid links={networkReferences} />
          <InfoGrid
            items={[
              {
                title: "Connect clients",
                meta: "Setup",
                description:
                  "Use the public endpoint for early work, then move production traffic to infrastructure you can monitor.",
              },
              {
                title: "Bridge GOR",
                meta: "Funding",
                description:
                  "Bridge GOR from Solana, fund the wallet you use for deploys, and keep enough native GOR for fees.",
              },
              {
                title: "Deploy SVM programs",
                meta: "Programs",
                description:
                  "Use familiar Solana tooling and keep program addresses outside app code.",
              },
              {
                title: "Inspect transactions",
                meta: "Explorer",
                description:
                  "Use explorer logs and account views to verify deployments, state changes, and transaction behavior.",
              },
            ]}
          />
        </InteriorSection>
      </InteriorPage>
    </>
  );
}
