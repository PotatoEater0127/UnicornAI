import { useRef, useState } from "react";
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
  const [rowNumber, setRowNumber] = useState(1);
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
    setChatStatus(STATUS.WAITING_USER_INPUT);
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

    // add new line
    if (event.key === "Enter" && event.shiftKey) {
      const MAX_ROW = 4;
      setRowNumber((prev) => Math.min(prev + 1, MAX_ROW));
    }

    // remove new line
    if (event.key === "Backspace" && event.shiftKey) {
      const MIN_ROW = 1;
      setRowNumber((prev) => Math.max(prev - 1, MIN_ROW));
    }
  };

  const isBusy =
    chatStatus === STATUS.AI_THINKING ||
    chatStatus === STATUS.WAITING_USER_INPUT;

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit} ref={formRef} $hidden={hidden}>
        {isBusy && <Styled.Loading />}
        <textarea
          className="textarea"
          ref={textareaRef}
          onKeyDown={handleKeyDown}
          rows={rowNumber}
          placeholder="Aa"
          disabled={isBusy || hidden}
        />
        <button type="submit" className="send" disabled={isBusy} />
      </Styled.Form>
    </Styled.Container>
  );
}

export default ChatInput;
