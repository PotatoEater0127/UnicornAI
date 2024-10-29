import React, { createContext, ReactNode, useContext, useState } from "react";

import { FEATURE, Feature } from "./type";

export type FeatureContextType = {
  curFeature: Feature;
  setFeature: (feature: Feature) => void;
};

export const FeatureContext = createContext<FeatureContextType | undefined>(
  undefined
);

type FeatureProviderProps = {
  children: ReactNode;
};

export const FeatureProvider: React.FC<FeatureProviderProps> = ({
  children,
}) => {
  const [curFeature, setCurFeature] = useState<Feature>(FEATURE.PREVIEW_TEXT);

  const setFeature = (feature: Feature) => {
    setCurFeature(feature);
  };

  return (
    <FeatureContext.Provider value={{ curFeature, setFeature }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeature = (): FeatureContextType => {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error("useChat must be used within a FeatureProvider");
  }
  return context;
};
