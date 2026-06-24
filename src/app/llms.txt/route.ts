import { publicRoutes, routeUrl } from "@/config/routes";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const docsBaseUrl = siteConfig.links.docs.replace(/\/$/, "");

function pageUrl(path: (typeof publicRoutes)[number]["path"]) {
  return routeUrl(siteConfig.url, path);
}

function llmsText() {
  return `# Gorbagana

> Gorbagana is a live SVM network and Solana fork for building and testing Solana-style apps with native GOR, bridge support, docs, and explorer verification.

Important notes:
- Gorbagana is Solana/SVM-compatible, but it has its own native network, token, RPC endpoint, explorer, and bridge.
- Use native GOR for fees, transfers, and program deployments on Gorbagana.
- Use the bridge to move between Solana GOR and native GOR.
- The docs site is the source of truth for setup, deployment, RPC, operator, and compatibility references.
- Use SKILL.md for action-oriented AI-agent guidance when building, deploying, debugging, or explaining Gorbagana work.

## Official Site
- [Home](${pageUrl("/")}): Overview, live network proof, and main entry points.
- [Build](${pageUrl("/build")}): Developer path for RPC setup, funding, program deployment, tooling, and guides.
- [Network](${pageUrl("/network")}): Live network values for RPC, explorer, bridge, validators, and token references.
- [Ecosystem](${pageUrl("/ecosystem")}): Apps, launchpads, privacy tools, and network services already running on Gorbagana.
- [Origin](${pageUrl("/origin")}): Public origin story, timeline, people, and receipts.
- [Community](${pageUrl("/community")}): Channels, contribution paths, network links, and AI-agent resources.

## AI Agent Resources
- [SKILL.md](${siteConfig.url.replace(/\/$/, "")}/SKILL.md): Procedural guide for AI coding agents building, deploying, debugging, and verifying Gorbagana work.

## Developer Documentation
- [Docs](${docsBaseUrl}/docs): Human-readable Gorbagana documentation.
- [Docs llms.txt](${docsBaseUrl}/llms.txt): AI-readable index generated from the documentation source.
- [Docs llms-full.txt](${docsBaseUrl}/llms-full.txt): Full AI-readable documentation context.
- [Quickstart](${docsBaseUrl}/docs/quickstart): Configure the network, connect a wallet, fund it, and send a transaction.
- [Testing](${docsBaseUrl}/docs/build/testing): Run local tests and a small live Gorbagana smoke test before deployment.
- [Security checklist](${docsBaseUrl}/docs/build/security-checklist): Review accounts, signers, PDAs, CPIs, tokens, and upgrade authority before deployment.
- [Deploy programs](${docsBaseUrl}/docs/build/deploy-programs): Build, deploy, upgrade, inspect, and manage SVM programs on Gorbagana.
- [Solana compatibility](${docsBaseUrl}/docs/concepts/solana-compatibility): What carries over from Solana and what changes on Gorbagana.
- [Cheat sheet](${docsBaseUrl}/docs/reference/cheat-sheet): Common endpoints, CLI commands, bridge links, and deployment references.
- [Glossary](${docsBaseUrl}/docs/reference/glossary): Short definitions for common Gorbagana and SVM terms.

## Network Resources
- [RPC endpoint](${gorbaganaNetwork.urls.rpc}): Solana-compatible HTTP RPC endpoint.
- [Explorer](${gorbaganaNetwork.urls.explorer}): Inspect blocks, transactions, accounts, programs, and validators.
- [Validators](${gorbaganaNetwork.urls.validators}): Validator view in the explorer.
- [Bridge](${gorbaganaNetwork.urls.bridge}): Move GOR between Solana and Gorbagana.

## Community
- [Telegram](${siteConfig.links.telegram}): Main community chat.
- [X](${siteConfig.links.x}): Official updates.
- [GitHub](${siteConfig.links.github}): Public repositories and development activity.

## Optional
- [Trash Talk](https://www.trashtalk.zone/): Public on-chain message wall on Gorbagana.
- [Trash Scan](${gorbaganaNetwork.urls.explorer}): Official Gorbagana explorer.
- [Dumpster](https://dumpster.cash): Token launchpad for Gorbagana.
- [Privacy Trash](https://privacytrash.com): Private transfer app for GOR.
`;
}

export function GET() {
  return new Response(llmsText(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
