import React, { useEffect, useState } from "react";
import * as Styled from "./index.styles";

function TypingEffect({
  className,
  text = "",
  speed = 30,
  enableEffect = false,
  children,
}: {
  className?: string;
  text?: string;
  speed?: number;
  enableEffect?: boolean;
  children?: React.ReactNode;
}) {
  const [visibleText, setVisibleText] = useState("");
  const [hiddenText, setHiddenText] = useState(text);

  useEffect(() => {
    if (!enableEffect) {
      setVisibleText(text);
      setHiddenText("");
      return;
    }

    if (!text) {
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setVisibleText((prev) => prev + text[index]);
      setHiddenText((prev) => prev.slice(1));
      index++;
      if (index === text.length - 1) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [speed, text, enableEffect]);

  return (
    <Styled.P className={className}>
      <Styled.Visible>{visibleText}</Styled.Visible>
      <Styled.Hidden>{hiddenText}</Styled.Hidden>
      {children}
    </Styled.P>
  );
}

export default TypingEffect;
