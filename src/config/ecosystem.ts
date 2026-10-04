import { siteConfig } from "@/config/site";

export const ecosystemCategoryLabels = [
  "Apps",
  "Collectibles",
  "Infrastructure",
  "Launchpads",
] as const;

export type EcosystemCategory = (typeof ecosystemCategoryLabels)[number];

export const ecosystemCategorySlugs = {
  Apps: "apps",
  Collectibles: "collectibles",
  Infrastructure: "infrastructure",
  Launchpads: "launchpads",
} as const satisfies Record<EcosystemCategory, string>;

export function ecosystemCategoryHref(category: EcosystemCategory) {
  return `/ecosystem#${ecosystemCategorySlugs[category]}`;
}

export type EcosystemProject = {
  label: string;
  href: string;
  meta: string;
  category: EcosystemCategory;
  description: string;
};

export const ecosystemProjects = [
  { label: "Gorbagios", href: siteConfig.links.gorbagios, meta: "NFT collection", category: "Collectibles", description: "4,444 discarded-object characters from Gorbagana culture. Explore the GORBAGIO collection on Magic Eden." },
  {
    label: "Scraps",
    href: "https://scraps.gorbagana.wtf",
    meta: "Multisig",
    category: "Apps",
    description: "Manage shared funds and program upgrades with your team.",
  },
  {
    label: "Binswap",
    href: "https://binswap.wtf",
    meta: "DEX",
    category: "Apps",
    description: "Swap tokens and provide liquidity on Gorbagana.",
  },
  {
    label: "Junkheap",
    href: "https://junkheap.wtf",
    meta: "NFT marketplace",
    category: "Apps",
    description: "The NFT marketplace native to Gorbagana.",
  },
  {
    label: "Trash Scan",
    href: "https://explorer.gorbagana.wtf",
    meta: "Explorer",
    category: "Infrastructure",
    description:
      "The official explorer for Gorbagana blocks, transactions, accounts, programs, and validators.",
  },
  {
    label: "TrashID",
    href: "https://trashid.wtf",
    meta: "Name service",
    category: "Infrastructure",
    description: "Register and manage your .gor name on Gorbagana.",
  },
  {
    label: "Dumpster",
    href: "https://dumpster.cash",
    meta: "Launchpad",
    category: "Launchpads",
    description:
      "The official launchpad for creating, trading, and discovering tokens on Gorbagana.",
  },
] as const satisfies readonly EcosystemProject[];
