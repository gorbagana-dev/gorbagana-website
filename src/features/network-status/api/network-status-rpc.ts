import { gorbaganaNetwork } from "@/config/network";
import {
  epochInfoSchema,
  rpcResponseSchema,
  voteAccountsSchema,
} from "@/features/network-status/schemas/network-status-schemas";
import type { NetworkStatus } from "@/features/network-status/types/network-status";
import type { z } from "zod";

type RpcMethod =
  | "getEpochInfo"
  | "getVoteAccounts";

class RpcRequestError extends Error {
  constructor(method: RpcMethod, message: string) {
    super(`${method}: ${message}`);
    this.name = "RpcRequestError";
  }
}

async function callRpc<T extends z.ZodType>({
  method,
  params,
  resultSchema,
  signal,
}: {
  method: RpcMethod;
  params?: unknown[];
  resultSchema: T;
  signal?: AbortSignal;
}): Promise<z.infer<T>> {
  const response = await fetch(gorbaganaNetwork.urls.rpc, {
    body: JSON.stringify({
      id: method,
      jsonrpc: "2.0",
      method,
      ...(params ? { params } : {}),
    }),
    cache: "no-store",
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    signal,
  });

  if (!response.ok) {
    throw new RpcRequestError(method, `HTTP ${response.status}`);
  }

  const parsed = rpcResponseSchema(resultSchema).safeParse(await response.json());

  if (!parsed.success) {
    throw new RpcRequestError(method, "Unexpected RPC response shape");
  }

  if (parsed.data.error) {
    throw new RpcRequestError(method, parsed.data.error.message);
  }

  if (parsed.data.result === undefined) {
    throw new RpcRequestError(method, "Missing RPC result");
  }

  return parsed.data.result;
}

export async function getNetworkStatus(signal?: AbortSignal): Promise<NetworkStatus> {
  const [epochInfo, voteAccounts] = await Promise.all([
    callRpc({
      method: "getEpochInfo",
      params: [{ commitment: "finalized" }],
      resultSchema: epochInfoSchema,
      signal,
    }),
    callRpc({
      method: "getVoteAccounts",
      params: [{ commitment: "finalized" }],
      resultSchema: voteAccountsSchema,
      signal,
    }).catch(() => null),
  ]);

  return {
    blockHeight: epochInfo.blockHeight ?? epochInfo.absoluteSlot,
    epoch: epochInfo.epoch,
    latestSlot: epochInfo.absoluteSlot,
    rpcUrl: gorbaganaNetwork.urls.rpc,
    slotIndex: epochInfo.slotIndex,
    slotsInEpoch: epochInfo.slotsInEpoch,
    updatedAt: new Date(),
    validatorCount: voteAccounts
      ? voteAccounts.current.length + voteAccounts.delinquent.length
      : null,
  };
}
