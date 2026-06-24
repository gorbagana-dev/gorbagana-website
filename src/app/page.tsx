import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";
import { HomePage as HomePageContent } from "@/features/home/components/home-page";
import { absoluteUrl } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: absoluteUrl("/icon.svg"),
          sameAs: [
            siteConfig.links.github,
            siteConfig.links.telegram,
            siteConfig.links.x,
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
        }}
      />
      <HomePageContent />
    </>
  );
}
