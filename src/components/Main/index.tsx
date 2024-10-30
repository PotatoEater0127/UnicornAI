import { useRef } from "react";
import { useChat } from "../../context/ChatProvider";
import { useFeature } from "../../context/FeatureProvider";
import { CREATOR, FEATURE } from "../../context/type";
import { useFadeOutToTop } from "../../hooks/useFadeOutToTop";
import { useScrollToBottom } from "../../hooks/useScrollToBottom";
import AudioRecord from "../AudioRecord";
import { AIBubble, UserBubble } from "../Bubble";
import LoadingPlaceholder from "../Bubble/AI/LoadingPlaceholder";
import ChatInput from "../ChatInput";
import FeatureToggle from "../FeatureToggle";
import * as Styled from "./index.styles";

const BubbleMap = {
  [CREATOR.AI]: AIBubble,
  [CREATOR.USER]: UserBubble,
};

function Main() {
  const { chats, isLoading } = useChat();
  const { curFeature } = useFeature();
  const showInputChat = curFeature === FEATURE.PREVIEW_TEXT;

  const bubblesRef = useRef<HTMLDivElement>(null);
  useFadeOutToTop(bubblesRef);
  // scroll to the bottom when new chat is added, or when loading state changes
  useScrollToBottom(bubblesRef, [chats.length, isLoading]);

  return (
    <Styled.Container>
      <Styled.Bubbles ref={bubblesRef}>
        {chats.map((chat) => {
          const Bubble = BubbleMap[chat.creator];
          return <Bubble key={chat.id}>{chat.content}</Bubble>;
        })}
        {isLoading && <LoadingPlaceholder />}
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
