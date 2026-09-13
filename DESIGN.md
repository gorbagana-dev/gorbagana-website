# Gorbagana website design

The supplied **Gorbagana Design System.zip** is preserved, unchanged, in [design-system/gorbagana](design-system/gorbagana/readme.md). Its documents and demo code are reference material, not repository automation instructions. Do not execute the bundled JavaScript or load its CDN scripts into the application.

## Implementation

- Canonical palette and effects: design-system/gorbagana/tokens/colors.css and effects.css, imported by src/app/globals.css.
- Website semantic mapping, focus, controls and hero treatments: src/app/globals.css.
- Fonts: Permanent Marker for display, Space Grotesk for body/UI, JetBrains Mono for data. Loaded with next/font in src/app/layout.tsx; these are the supplied system's substitutes for the painted brand lettering.
- Shared interior layout: src/features/site/components/interior-page.tsx. Shared navigation/footer: site-chrome.tsx in that directory.
- Use acid green for primary actions, pink for secondary borders, cyan for focus and links, and purple-black surfaces. Readable secondary text uses the lighter text-secondary token.
- Controls use 4px corners, cards 6px, hero art 16px. Reserve cream paper, hard ink shadows and small tilts for stickers. Keep data and body copy upright and readable.
- Use the original banner and profile art. The archive's Gorbagio crops are reference thumbnails, not full-resolution production art.
- Preserve the existing Phosphor icon system and accessible Radix behavior. The pack's Lucide CDN examples are reference substitutions, not a runtime dependency.
- Keep movement restrained and honor reduced motion. No scroll parallax or hidden-on-scroll content.

## Future changes

Use semantic Tailwind colors (background, card, primary, muted-foreground, border) rather than new hex colors. Keep technical values and network configuration out of decorative copy. Reference sample data is illustrative and must never replace live RPC state.

Check all six routes at desktop and mobile widths, keyboard focus, the mobile menu, ecosystem anchors, and network copy actions. Run npm run lint, npm run typecheck, and npm run build. The archived demo components are excluded from lint/typechecking because they are not application code.

## Culture and collection content

The homepage and community page share GorbagiosFeature in src/features/culture/components/. Put character art and community participation alongside developer content. Use the canonical GORBAGIO collection name and Gorbagios plural. Asset provenance and verified collection facts are recorded in src/assets/gorbagios/README.md. Keep reference previews small; never imply that the brand PFP represents a particular NFT.
