import Arrow from "../ components/Arrow";
import Chat from "../ components/Chat";
import * as Styled from "./index.styles";

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <Styled.Container>
      <Chat>{children}</Chat>
      <Arrow />
    </Styled.Container>
  );
}

export default UserBubble;
