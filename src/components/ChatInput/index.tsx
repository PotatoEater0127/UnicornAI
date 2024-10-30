import { useRef } from "react";
import { useChat } from "../../context/ChatProvider";
import { FAKE_RESPONSE } from "../../context/data";
import { CREATOR, STATUS } from "../../context/type";
import sleep from "../../utils/sleep";
import * as Styled from "./index.styles";

// milliseconds, simulate response time
const WAIT_TIME = {
  AI: 1500,
  USER: 500,
};

function ChatInput({ hidden = false }: { hidden?: boolean }) {
  const { addChat, chatStatus, setChatStatus } = useChat();

  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const clearInput = () => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.value = "";
  };

  const userRespond = async (content: string) => {
    addChat(content, CREATOR.USER);
    await sleep(WAIT_TIME.USER);
  };

  const aiRespond = async () => {
    await sleep(WAIT_TIME.AI);
    addChat(FAKE_RESPONSE, CREATOR.AI);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!textareaRef.current) {
      return;
    }
    const content = (textareaRef.current.value ?? "").trim();
    if (!content) {
      return;
    }
    clearInput();
    await userRespond(content);
    setChatStatus(STATUS.AI_THINKING);
    await aiRespond();
    setChatStatus(STATUS.AI_RESPONDING);
    await sleep(4000);
    setChatStatus(STATUS.IDLE);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Only submit if Shift is not pressed
    if (event.key === "Enter" && !event.shiftKey) {
      // Prevent newline
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const isWaitingAI = chatStatus === STATUS.AI_THINKING;

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit} ref={formRef} $hidden={hidden}>
        {isWaitingAI && <Styled.Loading />}
        <textarea
          className="textarea"
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="Aa"
          disabled={isWaitingAI || hidden}
        />
        <button type="submit" className="send" disabled={isWaitingAI} />
      </Styled.Form>
    </Styled.Container>
  );
}

export default ChatInput;
