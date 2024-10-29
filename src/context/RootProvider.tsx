import { ChatProvider } from "./ChatProvider";
import { FeatureProvider } from "./FeatureProvider";

function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <FeatureProvider>
      <ChatProvider>{children}</ChatProvider>
    </FeatureProvider>
  );
}

export default RootProvider;
