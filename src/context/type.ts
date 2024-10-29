export const CREATOR = {
  AI: "AI",
  USER: "USER",
} as const;

export type Creator = (typeof CREATOR)[keyof typeof CREATOR];

export const FEATURE = {
  PREVIEW_TEXT: "PREVIEW_TEXT",
  CLICK_RECORD: "CLICK_RECORD",
  AUTO_RECORD: "AUTO_RECORD",
} as const;

export type Feature = (typeof FEATURE)[keyof typeof FEATURE];

export const FEATURE_NAME = {
  [FEATURE.PREVIEW_TEXT]: "preview text",
  [FEATURE.CLICK_RECORD]: "click to record",
  [FEATURE.AUTO_RECORD]: "auto record",
};
