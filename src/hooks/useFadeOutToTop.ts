import { throttle } from "lodash";
import { RefObject, useCallback, useEffect } from "react";

const applyOpacityBasedOnDistance = (parentElement: HTMLElement) => {
  const parentRect = parentElement.getBoundingClientRect();

  Array.from(parentElement.children).forEach((child) => {
    const childRect = child.getBoundingClientRect();
    const distanceToTop = Math.abs(childRect.bottom - parentRect.top);

    // start from the 3/5 of the container, otherwise the children will be already too transparent at the beginning
    const maxDistance = (parentRect.height * 3) / 5;

    const opacity = Math.max(0, distanceToTop / maxDistance);
    child.setAttribute("style", `opacity: ${opacity.toFixed(2)}`);
  });
};

// the more closer to the top of a container, the more transparent the children become
export const useFadeOutToTop = (containerRef: RefObject<HTMLElement>) => {
  const handleOpacityAdjustment = useCallback(() => {
    console.log("scroll");
    if (containerRef.current) {
      applyOpacityBasedOnDistance(containerRef.current);
    }
  }, [containerRef]);

  // for scroll
  useEffect(() => {
    const container = containerRef.current;
    handleOpacityAdjustment();

    const throttledOpacityAdjust = throttle(handleOpacityAdjustment, 16);

    if (container) {
      container.addEventListener("scroll", throttledOpacityAdjust);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", throttledOpacityAdjust);
      }
    };
  }, [containerRef, handleOpacityAdjustment]);

  // for resize
  useEffect(() => {
    const container = containerRef.current;

    const throttledOpacityAdjust = throttle(handleOpacityAdjustment, 16);

    if (container) {
      window.addEventListener("resize", throttledOpacityAdjust);
    }
    return () => {
      window.removeEventListener("resize", throttledOpacityAdjust);
    };
  }, [containerRef, handleOpacityAdjustment]);
};
