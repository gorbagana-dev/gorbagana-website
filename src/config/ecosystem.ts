export const ecosystemCategoryLabels = [
  "Apps",
  "Infrastructure",
  "Launchpads",
  "Privacy",
] as const;

export type EcosystemCategory = (typeof ecosystemCategoryLabels)[number];

export const ecosystemCategorySlugs = {
  Apps: "apps",
  Infrastructure: "infrastructure",
  Launchpads: "launchpads",
  Privacy: "privacy",
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
  {
    label: "Trash Talk",
    href: "https://www.trashtalk.zone/",
    meta: "Social app",
    category: "Apps",
    description:
      "A public on-chain message wall where users pay in GOR to publish posts on Gorbagana.",
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
    label: "Dumpster",
    href: "https://dumpster.cash",
    meta: "Launchpad",
    category: "Launchpads",
    description:
      "The official launchpad for creating, trading, and discovering tokens on Gorbagana.",
  },
  {
    label: "Privacy Trash",
    href: "https://privacytrash.com",
    meta: "Private transfers",
    category: "Privacy",
    description:
      "A private transfer app for moving GOR through shielded balances.",
  },
] as const satisfies readonly EcosystemProject[];
