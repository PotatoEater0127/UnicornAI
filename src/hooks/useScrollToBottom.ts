import { useLayoutEffect } from "react";

export const useScrollToBottom = (
  ref: React.RefObject<HTMLDivElement>,
  dependencies: React.DependencyList
) => {
  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useLayoutEffect(() => {
    scrollToBottom();
  }, dependencies);
};
