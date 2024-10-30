import { useEffect, useRef } from "react";
import base from "../../assets/avatar/base.svg";
import earring from "../../assets/avatar/earring.svg";
import mouthClose from "../../assets/avatar/mouth_close.svg";
import mouthOpen from "../../assets/avatar/mouth_open.svg";
import * as Styled from "./index.styles";

const VISIBILITY = {
  VISIBLE: "visible",
  HIDDEN: "hidden",
};

function Avatar({ isSpeaking = false }: { isSpeaking?: boolean }) {
  const openLips = useRef<HTMLImageElement>(null);
  const closedLips = useRef<HTMLImageElement>(null);

  const openMouth = () => {
    if (!openLips?.current || !closedLips?.current) {
      return;
    }
    openLips.current.style.visibility = VISIBILITY.VISIBLE;
    closedLips.current.style.visibility = VISIBILITY.HIDDEN;
  };

  const closeMouth = () => {
    if (!openLips?.current || !closedLips?.current) {
      return;
    }
    openLips.current.style.visibility = VISIBILITY.HIDDEN;
    closedLips.current.style.visibility = VISIBILITY.VISIBLE;
  };

  // speaking animation
  useEffect(() => {
    if (!isSpeaking) {
      return;
    }
    const interval = setInterval(() => {
      // randomly choose open or close mouth
      const shouldOpen = Math.random() > 0.5;
      if (shouldOpen) {
        openMouth();
      } else {
        closeMouth();
      }
    }, 100);
    return () => {
      clearInterval(interval);
      closeMouth();
    };
  }, [isSpeaking]);

  return (
    <Styled.Container>
      <Styled.Base src={base} alt="base" />
      <Styled.Mouth src={mouthOpen} ref={openLips} alt="mouth-open" />
      <Styled.Mouth src={mouthClose} ref={closedLips} alt="mouth-close" />
      <Styled.Earring src={earring} alt="earring" />
    </Styled.Container>
  );
}

export default Avatar;
