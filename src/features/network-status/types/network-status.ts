export type NetworkStatus = {
  blockHeight: number;
  epoch: number;
  latestSlot: number;
  rpcUrl: string;
  slotIndex: number;
  slotsInEpoch: number;
  updatedAt: Date;
  validatorCount: number | null;
};
