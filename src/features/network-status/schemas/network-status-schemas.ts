import { z } from "zod";

export const rpcErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
});

export const rpcResponseSchema = <T extends z.ZodType>(resultSchema: T) =>
  z.object({
    jsonrpc: z.literal("2.0").optional(),
    id: z.union([z.string(), z.number()]).optional(),
    result: resultSchema.optional(),
    error: rpcErrorSchema.optional(),
  });

export const epochInfoSchema = z.object({
  absoluteSlot: z.number(),
  blockHeight: z.number().optional(),
  epoch: z.number(),
  slotIndex: z.number(),
  slotsInEpoch: z.number(),
  transactionCount: z.number().optional(),
});

export const voteAccountsSchema = z.object({
  current: z.array(z.unknown()),
  delinquent: z.array(z.unknown()),
});

export type EpochInfo = z.infer<typeof epochInfoSchema>;
export type VoteAccounts = z.infer<typeof voteAccountsSchema>;
