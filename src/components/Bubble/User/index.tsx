import { Arrow, Chat } from "../index.styles";
import * as Styled from "./index.styles";

function UserBubble({
  children,
  text,
  showTypingEffect = false,
}: {
  children?: React.ReactNode;
  text?: string;
  showTypingEffect?: boolean;
}) {
  return (
    <Styled.Container>
      <Chat text={text} enableEffect={showTypingEffect}>
        {children}
      </Chat>
      <Arrow />
    </Styled.Container>
  );
}

export default UserBubble;
