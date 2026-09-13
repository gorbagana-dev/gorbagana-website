import type { ReactNode } from "react";

// Keep content visible without scroll effects; the brand uses restrained motion.
export function HomeMotionRoot({ children }: { children: ReactNode }) {
  return <main id="main-content" className="min-h-dvh overflow-x-hidden bg-background text-foreground">{children}</main>;
}
