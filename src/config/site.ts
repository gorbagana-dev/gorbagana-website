export const siteConfig = {
  name: "Gorbagana",
  title: "Gorbagana",
  description:
    "Gorbagana is a live Solana-derived L1 with native GOR, SVM-compatible tooling, a bridge, explorer, docs, and a growing app ecosystem.",
  url: "https://gorbagana.wtf",
  links: {
    docs: "https://docs.gorbagana.wtf/",
    github: "https://github.com/gorbagana-dev",
    telegram: "https://t.me/gorbagana_portal",
    x: "https://x.com/Gorbagana_chain",
  },
} as const;

export const siteNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Build",
    href: "/build",
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    label: "Network",
    href: "/network",
  },
  {
    label: "Origin",
    href: "/origin",
  },
  {
    label: "Community",
    href: "/community",
  },
] as const;
