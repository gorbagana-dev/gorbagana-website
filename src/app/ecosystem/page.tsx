import { JsonLd } from "@/components/json-ld";
import { ecosystemProjects } from "@/config/ecosystem";
import { siteConfig } from "@/config/site";
import { EcosystemDirectory } from "@/features/ecosystem/components/ecosystem-directory";
import {
  InfoGrid,
  InteriorPage,
  InteriorSection,
  ResourceGrid,
} from "@/features/site/components/interior-page";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ecosystem");

const breadcrumbJsonLd = createBreadcrumbJsonLd("/ecosystem");

const submissionRequirements = [
  {
    title: "Project name and URL",
    meta: "Basics",
    description:
      "Share the public website, app, repository, or documentation page people can open.",
  },
  {
    title: "Category",
    meta: "Directory",
    description:
      "Choose the closest category: app, infrastructure, launchpad, privacy, wallet, tooling, or another clear label.",
  },
  {
    title: "Gorbagana support",
    meta: "Evidence",
    description:
      "Include a transaction, program address, app screen, repository change, or public page that shows Gorbagana support.",
  },
  {
    title: "Contact",
    meta: "Follow-up",
    description:
      "Add a maintainer contact or project channel so the listing can be checked if details change.",
  },
] as const;

export default function EcosystemPage() {
  return (
    <>
      {breadcrumbJsonLd ? <JsonLd data={breadcrumbJsonLd} /> : null}
      <InteriorPage
        eyebrow="Ecosystem"
        title="Explore Gorbagana"
        description="Apps, launchpads, privacy tools, and network services already running on Gorbagana."
      >
        <InteriorSection title="Directory">
          <EcosystemDirectory projects={ecosystemProjects} />
        </InteriorSection>

        <div id="submit-project" className="scroll-mt-24">
          <InteriorSection title="Submit project">
            <div>
              <InfoGrid items={submissionRequirements} />
              <ResourceGrid
                links={[
                  {
                    label: "Open GitHub",
                    href: siteConfig.links.github,
                    meta: "Submission",
                    description:
                      "Share the project name, URL, category, proof of Gorbagana support, and contact.",
                  },
                  {
                    label: "Open docs",
                    href: siteConfig.links.docs,
                    meta: "Documentation",
                    description:
                      "Use the docs for network setup, wallet configuration, and deployment references.",
                  },
                ]}
              />
            </div>
          </InteriorSection>
        </div>
      </InteriorPage>
    </>
  );
}
