import { useLayoutEffect, useRef } from "react";
import { useChat } from "../../context/ChatProvider";
import { CREATOR } from "../../context/type";
import { AIBubble, UserBubble } from "../Bubble";
import Chat from "../Chat";
import * as Styled from "./index.styles";

const BubbleMap = {
  [CREATOR.AI]: AIBubble,
  [CREATOR.USER]: UserBubble,
};

function Main() {
  const { chats } = useChat();
  const displayChat = chats.slice().reverse();

  const bubblesRef = useRef<HTMLDivElement>(null);

  // scroll to the bottom
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
      <Chat />
    </Styled.Container>
  );
}

export default Main;
