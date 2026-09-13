import Capsule from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-2863.jpg";
import Mattress from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-147.jpg";
import CerealBox from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-2989.jpg";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import TealBin from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-2702.jpg";
import BlueBin from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-565.jpg";
import Gray from "../../../../design-system/gorbagana/assets/gorbagios/gorbagio-153.jpg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const characters = [
  { id: 2702, image: TealBin, alt: "Teal-bin Gorbagio with green fur, a pale cream face, and golden eyes." },
  { id: 565, image: BlueBin, alt: "Blue-bin Gorbagio with a pale face, golden eyes, and a bright green crown." },
  { id: 2863, image: Capsule, alt: "Green and white capsule Gorbagio with a cream face and a small fanged smile." },
  { id: 147, image: Mattress, alt: "Beige mattress Gorbagio with a bright pink face and pink horns." },
  { id: 2989, image: CerealBox, alt: "Orange cereal-box Gorbagio with a pink laughing face." },
  { id: 153, image: Gray, alt: "Rounded gray Gorbagio wearing a green and white cap." },
];

export function GorbagiosFeature() {
  return (
    <section id="gorbagios" aria-labelledby="gorbagios-heading" className="scroll-mt-24 grid gap-10 border-b border-brand-pink bg-card px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-20">
      <div className="min-w-0">
        <p className="font-mono text-xs tracking-[0.16em] text-brand-pink uppercase">GORBAGIO / The NFT collection</p>
        <h2 id="gorbagios-heading" className="mt-5 font-heading text-4xl text-primary sm:text-6xl">4,444 pieces.<br />All trash. All character.</h2>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Meet the Gorbagios: the NFT collection at the heart of Gorbagana’s trash culture. Bins with attitude, discarded mattresses, strange little creatures. A whole cast of misfits to make your own.</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Pick a face for your corner of the internet. Make a meme. Give your Gorbagio a story. The chain is the infrastructure; the characters are how we show up.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="h-12 px-5 uppercase"><Link href={siteConfig.links.gorbagios}>Explore Gorbagios <ArrowUpRightIcon aria-hidden="true" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-5 uppercase"><Link href={siteConfig.links.telegram}>Meet the community</Link></Button>
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">Browse the collection on Magic Eden.</p>
      </div>
      <div className="mx-auto w-full max-w-[600px]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {characters.map((character) => (
            <figure key={character.id} className="overflow-hidden rounded-md border border-border bg-background">
              <Image src={character.image} alt={character.alt} sizes="(max-width: 520px) 40vw, 190px" className="aspect-square h-auto w-full object-cover" />
              <figcaption className="px-3 py-3 font-mono text-xs text-brand-cyan">GORBAGIO #{character.id}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">A few faces from the collection. Same trash, different vibes.</p>
      </div>
    </section>
  );
}
