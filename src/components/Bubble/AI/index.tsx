import { Arrow, Chat } from "../index.styles";
import * as Styled from "./index.styles";

function AIBubble({ children }: { children: React.ReactNode }) {
  return (
    <Styled.Container>
      <Chat>{children}</Chat>
      <Arrow />
    </Styled.Container>
  );
}

export default AIBubble;
