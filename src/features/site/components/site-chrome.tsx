import Link from "next/link";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  ListIcon,
  TelegramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ecosystemCategoryHref } from "@/config/ecosystem";
import { gorbaganaNetwork } from "@/config/network";
import { siteConfig } from "@/config/site";

const navigationGroups = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Build",
    href: "/build",
    links: [
      {
        label: "Get started",
        href: "/build",
      },
      {
        label: "Network setup",
        href: "/network",
      },
      {
        label: "Deploy programs",
        href: "/build",
      },
      {
        label: "Tooling",
        href: "/build",
      },
      {
        label: "GitHub",
        href: siteConfig.links.github,
      },
    ],
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    links: [
      {
        label: "Apps",
        href: ecosystemCategoryHref("Apps"),
      },
      {
        label: "Infrastructure",
        href: ecosystemCategoryHref("Infrastructure"),
      },
      {
        label: "Launchpads",
        href: ecosystemCategoryHref("Launchpads"),
      },
      {
        label: "Privacy",
        href: ecosystemCategoryHref("Privacy"),
      },
      {
        label: "Submit project",
        href: "/ecosystem#submit-project",
      },
      {
        label: "Community",
        href: "/community",
      },
    ],
  },
  {
    label: "Network",
    href: "/network",
    links: [
      {
        label: "Overview",
        href: "/network",
      },
      {
        label: "Bridge",
        href: gorbaganaNetwork.urls.bridge,
      },
      {
        label: "Explorer",
        href: gorbaganaNetwork.urls.explorer,
      },
      {
        label: "RPC",
        href: gorbaganaNetwork.urls.rpc,
      },
      {
        label: "Validators",
        href: gorbaganaNetwork.urls.validators,
      },
      {
        label: "Token",
        href: "/network",
      },
    ],
  },
  {
    label: "Origin",
    href: "/origin",
    links: [
      {
        label: "Story",
        href: "/origin",
      },
      {
        label: "Timeline",
        href: "/origin",
      },
    ],
  },
] as const;

const footerColumns = [
  {
    title: "Network",
    links: [
      {
        label: "Overview",
        href: "/network",
      },
      {
        label: "Bridge",
        href: gorbaganaNetwork.urls.bridge,
      },
      {
        label: "Explorer",
        href: gorbaganaNetwork.urls.explorer,
      },
      {
        label: "RPC",
        href: gorbaganaNetwork.urls.rpc,
      },
      {
        label: "Validators",
        href: gorbaganaNetwork.urls.validators,
      },
      {
        label: "Token",
        href: "/network",
      },
    ],
  },
  {
    title: "Build",
    links: [
      {
        label: "Get started",
        href: "/build",
      },
      {
        label: "Docs",
        href: siteConfig.links.docs,
      },
      {
        label: "Deploy",
        href: "/build",
      },
      {
        label: "Tooling",
        href: "/build",
      },
      {
        label: "GitHub",
        href: siteConfig.links.github,
      },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      {
        label: "Apps",
        href: ecosystemCategoryHref("Apps"),
      },
      {
        label: "Infrastructure",
        href: ecosystemCategoryHref("Infrastructure"),
      },
      {
        label: "Launchpads",
        href: ecosystemCategoryHref("Launchpads"),
      },
      {
        label: "Privacy",
        href: ecosystemCategoryHref("Privacy"),
      },
      {
        label: "Submit project",
        href: "/ecosystem#submit-project",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Community",
        href: "/community",
      },
      {
        label: "X",
        href: siteConfig.links.x,
      },
      {
        label: "Telegram",
        href: siteConfig.links.telegram,
      },
      {
        label: "GitHub",
        href: siteConfig.links.github,
      },
      {
        label: "Origin",
        href: "/origin",
      },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "X",
    href: siteConfig.links.x,
    icon: XLogoIcon,
  },
  {
    label: "Telegram",
    href: siteConfig.links.telegram,
    icon: TelegramLogoIcon,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: GithubLogoIcon,
  },
] as const;

const footerBottomLinks = [
  {
    label: "Docs",
    href: siteConfig.links.docs,
  },
  {
    label: "Bridge",
    href: gorbaganaNetwork.urls.bridge,
  },
  {
    label: "Explorer",
    href: gorbaganaNetwork.urls.explorer,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
  },
  {
    label: "llms.txt",
    href: "/llms.txt",
  },
  {
    label: "SKILL.md",
    href: "/SKILL.md",
  },
  {
    label: "llms-full.txt",
    href: `${siteConfig.links.docs.replace(/\/$/, "")}/llms-full.txt`,
  },
] as const;

export function SiteHeader() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-[#4dff91] px-4 py-2 font-mono text-xs font-bold text-black uppercase transition focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/92 px-4 backdrop-blur-xl sm:px-5">
        <nav className="mx-auto flex h-20 w-full max-w-[1824px] items-center justify-between gap-8">
          <Link
            href="/"
            className="flex min-h-9 items-center font-heading text-2xl font-black text-white"
          >
            Gorbagana
          </Link>
          <DesktopNavigation />
          <div className="flex items-center gap-2">
            <MobileMenu />
            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#4dff91] px-5 font-mono text-xs font-bold text-black uppercase hover:bg-[#72ffaa]"
            >
              <Link href={siteConfig.links.docs}>Docs</Link>
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
}

function DesktopNavigation() {
  return (
    <NavigationMenu
      viewport={false}
      className="hidden max-w-none flex-none md:flex"
    >
      <NavigationMenuList className="gap-8">
        {navigationGroups.map((item) => (
          <NavigationMenuItem key={item.label}>
            {"links" in item ? (
              <>
                <NavigationMenuTrigger className="min-h-9 rounded-none bg-transparent px-2 py-2 font-mono text-xs font-medium text-zinc-500 uppercase hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white data-open:bg-transparent data-popup-open:bg-transparent">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-60 border border-white/10 bg-[#070707]/96 p-2 text-white shadow-2xl shadow-black/30 ring-0 backdrop-blur-xl">
                  {item.links.map((link) => (
                    <NavigationMenuLink
                      key={link.label}
                      asChild
                      className="block rounded-none px-3 py-2.5 font-mono text-xs font-medium text-zinc-400 uppercase transition hover:bg-white/[0.04] hover:text-white focus:bg-white/[0.04] focus:text-white"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className="min-h-9 rounded-none bg-transparent px-2 py-2 font-mono text-xs font-medium text-zinc-500 uppercase transition hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white"
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 rounded-full border-white/10 bg-white/[0.03] px-4 font-mono text-xs font-bold text-white uppercase hover:bg-white/10 hover:text-white md:hidden"
        >
          Menu
          <ListIcon aria-hidden="true" className="size-4" weight="bold" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        showCloseButton={false}
        className="max-h-[calc(100dvh-1rem)] gap-0 overflow-y-auto border-white/10 bg-[#050505]/98 p-0 text-white shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
      >
        <SheetHeader className="border-b border-white/10 px-5 py-5">
          <div className="flex items-center justify-between gap-4">
            <SheetTitle className="font-heading text-2xl font-black tracking-[-0.04em] text-white">
              Gorbagana
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-9 rounded-full border-white/10 bg-white/[0.03] px-4 font-mono text-xs font-bold text-white uppercase hover:bg-white/10 hover:text-white"
              >
                Close
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>
        <div className="grid divide-y divide-white/10">
          {navigationGroups.map((item) => (
            <div key={item.label} className="px-5 py-5">
              <SheetClose asChild>
                <Link
                  href={item.href}
                  className="block font-heading text-3xl font-black tracking-[-0.04em] text-white"
                >
                  {item.label}
                </Link>
              </SheetClose>
              {"links" in item ? (
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                  {item.links.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.href}
                        className="flex min-h-8 items-center font-mono text-xs font-medium text-zinc-500 uppercase transition hover:text-[#4dff91]"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 p-5">
          <SheetClose asChild>
            <Link
              href={siteConfig.links.docs}
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#4dff91] px-6 font-mono text-sm font-bold text-black uppercase transition hover:bg-[#72ffaa]"
            >
              Docs
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1824px]">
        <div className="grid border-b border-white/10 lg:grid-cols-[0.8fr_2.2fr]">
          <div className="border-b border-white/10 px-6 py-8 sm:px-10 lg:border-r lg:border-b-0">
            <p className="font-heading text-2xl font-black tracking-[-0.04em] text-white">
              Gorbagana
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 lg:flex-col lg:gap-4">
              <FooterPrimaryLink href="/build" label="Build" />
              <FooterPrimaryLink href="/ecosystem" label="Ecosystem" />
              <FooterPrimaryLink href="/community" label="Community" />
              <FooterPrimaryLink href={siteConfig.links.docs} label="Docs" />
            </div>
            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex size-9 items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#4dff91]/40 hover:text-[#4dff91]"
                  >
                    <Icon aria-hidden="true" className="size-4" weight="bold" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4 lg:border-t-0">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="border-white/10 px-6 py-7 odd:border-r [&:nth-child(-n+2)]:border-b sm:px-8 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <p className="font-mono text-[11px] font-medium tracking-[0.16em] text-zinc-500 uppercase">
                  {column.title}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={`${column.title}-${link.label}`}
                      href={link.href}
                      className="flex min-h-7 min-w-7 w-fit items-center font-mono text-sm font-medium text-white/90 uppercase transition hover:text-[#4dff91]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 px-6 py-6 sm:px-10 lg:flex-row lg:items-center">
          <p className="font-mono text-xs text-zinc-500 uppercase">
            2026 Gorbagana
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex min-h-7 items-center font-mono text-xs font-medium text-zinc-500 uppercase transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterPrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex min-h-7 w-fit items-center gap-2 font-mono text-sm font-medium text-white uppercase transition hover:text-[#4dff91]"
    >
      {label}
      <ArrowUpRightIcon
        aria-hidden="true"
        className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        weight="bold"
      />
    </Link>
  );
}
