import { useRef, useState } from "react";
import { useChat } from "../../context/ChatProvider";
import { AI_RESPONSE } from "../../context/data";
import { CREATOR } from "../../context/type";
import sleep from "../../utils/sleep";
import * as Styled from "./index.styles";

// milliseconds, simulate response time
const WAIT_TIME = {
  AI: 800,
  USER: 200,
};

function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const { addChat } = useChat();

  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const clearInput = () => {
    if (!textareaRef.current) {
      return;
    }
    textareaRef.current.value = "";
  };

  const userRespond = async (content: string) => {
    setIsLoading(true);
    await sleep(WAIT_TIME.USER);
    addChat(content, CREATOR.USER);
  };

  const aiRespond = async () => {
    await sleep(WAIT_TIME.AI);
    addChat(AI_RESPONSE, CREATOR.AI);
    setIsLoading(false);
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
    await aiRespond();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Only submit if Shift is not pressed
    if (event.key === "Enter" && !event.shiftKey) {
      // Prevent newline
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit} ref={formRef}>
      {isLoading && <Styled.Loading />}
      <textarea
        className="textarea"
        ref={textareaRef}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Aa"
        disabled={isLoading}
      />
      <button type="submit" className="send" disabled={isLoading} />
    </Styled.Form>
  );
}

export default Chat;
