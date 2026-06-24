"use client";

import { useEffect, useState } from "react";

import { getNetworkStatus } from "@/features/network-status/api/network-status-rpc";
import type { NetworkStatus } from "@/features/network-status/types/network-status";

const REFRESH_INTERVAL_MS = 15_000;

type NetworkStatusState =
  | {
      data: NetworkStatus;
      error: null;
      status: "ready";
    }
  | {
      data: NetworkStatus | null;
      error: Error;
      status: "error";
    }
  | {
      data: NetworkStatus | null;
      error: null;
      status: "loading";
    };

export function useNetworkStatus(): NetworkStatusState {
  const [state, setState] = useState<NetworkStatusState>({
    data: null,
    error: null,
    status: "loading",
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function loadNetworkStatus() {
      try {
        const data = await getNetworkStatus(controller.signal);

        if (!isMounted) {
          return;
        }

        setState({
          data,
          error: null,
          status: "ready",
        });
      } catch (error) {
        if (!isMounted || controller.signal.aborted) {
          return;
        }

        setState((previousState) => ({
          data: previousState.data,
          error: error instanceof Error ? error : new Error("Network status failed"),
          status: "error",
        }));
      }
    }

    void loadNetworkStatus();
    const interval = window.setInterval(loadNetworkStatus, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      controller.abort();
      window.clearInterval(interval);
    };
  }, []);

  return state;
}
