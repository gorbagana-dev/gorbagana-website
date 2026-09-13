"use client";

import Link from "next/link";
import {
  ArrowUpRightIcon,
  CheckIcon,
  CopyIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

import { cn } from "@/lib/utils";

type EndpointItem = {
  label: string;
  value: string;
  description: string;
  href?: string;
  meta?: string;
};

function copyValue(value: string) {
  if (!navigator.clipboard) {
    return Promise.reject(new Error("Clipboard unavailable"));
  }

  return navigator.clipboard.writeText(value);
}

function CopyButton({
  copied,
  failed,
  label,
  onCopy,
}: {
  copied: boolean;
  failed?: boolean;
  label: string;
  onCopy: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        "inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-sm border px-4 font-mono text-xs font-bold uppercase transition active:translate-y-px",
        copied
          ? "border-primary/50 bg-primary text-background"
          : failed
            ? "border-red-400/40 bg-red-400/10 text-red-200 hover:border-red-300/60"
          : "border-border bg-white/[0.03] text-white hover:border-primary/50 hover:text-primary",
      )}
      aria-label={label}
    >
      {copied ? (
        <CheckIcon aria-hidden="true" className="size-3.5" weight="bold" />
      ) : (
        <CopyIcon aria-hidden="true" className="size-3.5" weight="bold" />
      )}
      {copied ? "Copied" : failed ? "Retry" : "Copy"}
    </button>
  );
}

export function EndpointGrid({ items }: { items: readonly EndpointItem[] }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copyFailedKey, setCopyFailedKey] = useState<string | null>(null);

  function handleCopy(key: string, value: string) {
    setCopyFailedKey(null);

    void copyValue(value)
      .then(() => {
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(null), 1800);
      })
      .catch(() => {
        setCopyFailedKey(key);
        window.setTimeout(() => setCopyFailedKey(null), 1800);
      });
  }

  return (
    <div className="grid sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-0 border-b border-border px-6 py-7 sm:px-8 even:sm:border-l"
        >
          {item.meta ? (
            <p className="mb-2 font-mono text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {item.meta}
            </p>
          ) : null}
          <h3 className="font-heading text-2xl font-black tracking-[-0.03em] text-white">
            {item.label}
          </h3>
          <p className="mt-4 break-all font-mono text-sm leading-6 text-foreground">
            {item.value}
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CopyButton
              copied={copiedKey === item.label}
              failed={copyFailedKey === item.label}
              label={`Copy ${item.label}`}
              onCopy={() => handleCopy(item.label, item.value)}
            />
            {item.href ? (
              <Link
                href={item.href}
                aria-label={`Open ${item.label}`}
                className="inline-flex h-9 items-center justify-center gap-2 rounded-sm border border-border bg-white/[0.03] px-4 font-mono text-xs font-bold text-white uppercase transition hover:border-primary/50 hover:text-primary active:translate-y-px"
              >
                Open
                <ArrowUpRightIcon
                  aria-hidden="true"
                  className="size-3.5"
                  weight="bold"
                />
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
