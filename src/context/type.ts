export const CREATOR = {
  AI: "AI",
  USER: "USER",
} as const;

export type Creator = (typeof CREATOR)[keyof typeof CREATOR];
