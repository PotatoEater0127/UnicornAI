import { useChat } from "../../context/ChatProvider";
import { STATUS } from "../../context/type";
import Avatar from "../Avatar";

import * as Styled from "./index.styles";

function Aside() {
  const { chatStatus } = useChat();
  return (
    <Styled.Aside>
      <Avatar isSpeaking={chatStatus === STATUS.AI_RESPONDING} />
    </Styled.Aside>
  );
}

export default Aside;
