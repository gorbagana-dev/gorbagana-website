"use client";

import type { ReactNode } from "react";

import { NumberTicker } from "@/components/ui/number-ticker";
import { gorbaganaNetwork } from "@/config/network";
import { useNetworkStatus } from "@/features/network-status/hooks/use-network-status";
import type { NetworkStatus } from "@/features/network-status/types/network-status";
import { cn } from "@/lib/utils";

type NetworkStatsRailVariant = "compact" | "full";

type NetworkStat = {
  label: string;
  size?: "large" | "normal";
  renderValue: (data: NetworkStatus) => ReactNode;
};

const compactStats = [
  {
    label: "Slot",
    size: "large",
    renderValue: (data: NetworkStatus) => (
      <NumberTicker
        className="tracking-normal text-white tabular-nums"
        startValue={Math.max(0, data.latestSlot - 18)}
        value={data.latestSlot}
      />
    ),
  },
  {
    label: "Validators",
    size: "normal",
    renderValue: (data: NetworkStatus) =>
      data.validatorCount === null ? (
        "N/A"
      ) : (
        <NumberTicker
          className="tracking-normal text-white tabular-nums"
          startValue={0}
          value={data.validatorCount}
        />
      ),
  },
  {
    label: "Token",
    size: "normal",
    renderValue: () => gorbaganaNetwork.nativeCurrency.symbol,
  },
  {
    label: "Runtime",
    size: "normal",
    renderValue: () => "SVM",
  },
] as const satisfies readonly NetworkStat[];

const fullStats = [
  compactStats[0],
  {
    label: "Block height",
    size: "large",
    renderValue: (data: NetworkStatus) =>
      <NumberTicker
        className="tracking-normal text-white tabular-nums"
        startValue={Math.max(0, data.blockHeight - 18)}
        value={data.blockHeight}
      />,
  },
  {
    label: "Epoch",
    size: "normal",
    renderValue: (data: NetworkStatus) => (
      <NumberTicker
        className="tracking-normal text-white tabular-nums"
        startValue={0}
        value={data.epoch}
      />
    ),
  },
  compactStats[1],
] as const satisfies readonly NetworkStat[];

export function NetworkStatsRail({
  variant = "full",
}: {
  variant?: NetworkStatsRailVariant;
}) {
  const networkStatus = useNetworkStatus();
  const isCompact = variant === "compact";
  const stats = variant === "compact" ? compactStats : fullStats;

  return (
    <aside
      className={cn(
        "grid border-t border-white/10",
        isCompact
          ? "grid-cols-2 lg:grid-cols-1 lg:border-t-0"
          : "sm:grid-cols-2 lg:border-t-0",
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            isCompact
              ? "border-white/10 px-5 py-5 odd:border-r [&:nth-child(-n+2)]:border-b lg:border-r-0 lg:border-b lg:px-6 lg:py-7 lg:last:border-b-0"
              : "min-w-0 border-b border-white/10 px-5 py-5 sm:px-6 sm:py-7 even:sm:border-l",
            isCompact &&
              stat.label === "Slot" &&
              "col-span-2 odd:border-r-0 lg:col-span-1",
            !isCompact && stat.label === "Slot" && "sm:border-l-0",
          )}
        >
          <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
            {stat.label}
          </p>
          <p
            className={cn(
              "mt-3 font-heading leading-none font-black tracking-[-0.035em] text-white tabular-nums",
              isCompact
                ? stat.label === "Slot"
                  ? "text-[clamp(2rem,12vw,3rem)] sm:text-4xl lg:text-5xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
                : stat.size === "large"
                  ? "text-[clamp(2rem,11vw,3.75rem)] sm:text-[clamp(2.4rem,4.5vw,3.75rem)]"
                  : "text-4xl sm:text-5xl",
            )}
          >
            {networkStatus.data ? stat.renderValue(networkStatus.data) : "..."}
          </p>
        </div>
      ))}
    </aside>
  );
}
