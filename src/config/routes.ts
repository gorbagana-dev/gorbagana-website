export type PublicRoute = {
  path: "/" | "/build" | "/ecosystem" | "/network" | "/origin" | "/community";
  title: string;
  description: string;
  priority: number;
};

export const publicRoutes = [
  {
    path: "/",
    title: "Gorbagana",
    description:
      "Gorbagana is a live Solana-derived L1 with native GOR, SVM-compatible tooling, a bridge, explorer, docs, and a growing app ecosystem.",
    priority: 1,
  },
  {
    path: "/build",
    title: "Build on Gorbagana",
    description:
      "Ship Solana-style apps on Gorbagana with familiar SVM tooling and on-chain verification.",
    priority: 0.9,
  },
  {
    path: "/ecosystem",
    title: "Gorbagana Ecosystem",
    description:
      "Browse apps, launchpads, privacy tools, and network services already running on Gorbagana.",
    priority: 0.8,
  },
  {
    path: "/network",
    title: "Gorbagana Network",
    description:
      "Find the live network values for connecting clients, moving GOR, checking validators, and verifying activity.",
    priority: 0.8,
  },
  {
    path: "/origin",
    title: "Gorbagana Origin",
    description:
      "How a public Solana fork challenge became a live SVM network with builders, apps, and native GOR.",
    priority: 0.6,
  },
  {
    path: "/community",
    title: "Gorbagana Community",
    description:
      "Find the right Gorbagana channel for chat, updates, source, project submissions, and builder support.",
    priority: 0.7,
  },
] as const satisfies readonly PublicRoute[];

export function routeUrl(baseUrl: string, path: PublicRoute["path"]) {
  const base = baseUrl.replace(/\/$/, "");

  return path === "/" ? base : `${base}${path}`;
}

export function getPublicRoute(path: PublicRoute["path"]) {
  return publicRoutes.find((route) => route.path === path);
}
