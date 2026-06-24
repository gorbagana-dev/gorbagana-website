import type { Metadata } from "next";

import { publicRoutes, routeUrl, type PublicRoute } from "@/config/routes";
import { siteConfig } from "@/config/site";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Gorbagana",
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");

  return path === "/" ? base : `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata(path: PublicRoute["path"]): Metadata {
  const route = publicRoutes.find((item) => item.path === path);

  if (!route) {
    return {};
  }

  const url = routeUrl(siteConfig.url, route.path);

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [ogImage.url],
    },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function createBreadcrumbJsonLd(path: PublicRoute["path"]) {
  const route = publicRoutes.find((item) => item.path === path);

  if (!route || route.path === "/") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: routeUrl(siteConfig.url, "/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: route.title,
        item: routeUrl(siteConfig.url, route.path),
      },
    ],
  };
}
