export const siteConfig = {
  name: "Gorbagana",
  title: "Gorbagana",
  description:
    "Gorbagana is a Solana-derived L1 for trash culture, Gorbagios NFTs, meme-native apps, and builders. Meet the characters. Join the community. Build with GOR.",
  url: "https://gorbagana.wtf",
  links: {
    gorbagios: "https://magiceden.io/marketplace/gorbagio",
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
