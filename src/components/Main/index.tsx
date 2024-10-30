import { useLayoutEffect, useRef } from "react";
import { useChat } from "../../context/ChatProvider";
import { useFeature } from "../../context/FeatureProvider";
import { CREATOR, FEATURE } from "../../context/type";
import AudioRecord from "../AudioRecord";
import { AIBubble, UserBubble } from "../Bubble";
import ChatInput from "../ChatInput";
import FeatureToggle from "../FeatureToggle";
import * as Styled from "./index.styles";

const BubbleMap = {
  [CREATOR.AI]: AIBubble,
  [CREATOR.USER]: UserBubble,
};

function Main() {
  const { chats } = useChat();
  const displayChat = chats.slice().reverse();

  const { curFeature } = useFeature();
  const showInputChat = curFeature === FEATURE.PREVIEW_TEXT;

  const bubblesRef = useRef<HTMLDivElement>(null);

  // scroll to the bottom when new chat is added
  useLayoutEffect(() => {
    if (bubblesRef.current) {
      bubblesRef.current.scrollTo({
        top: bubblesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chats.length]);

  return (
    <Styled.Container>
      <Styled.Bubbles ref={bubblesRef}>
        {displayChat.map((chat) => {
          const Bubble = BubbleMap[chat.creator];
          return <Bubble key={chat.id}>{chat.content}</Bubble>;
        })}
      </Styled.Bubbles>
      <Styled.Action>
        <ChatInput hidden={!showInputChat} />
        <AudioRecord />
        <FeatureToggle />
      </Styled.Action>
    </Styled.Container>
  );
}

export default Main;
