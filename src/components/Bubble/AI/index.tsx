import miniAvatar from "../../../assets/avatar/mini.svg";
import { Arrow, Chat } from "../index.styles";
import * as Styled from "./index.styles";

function AIBubble({
  className,
  children,
  isLoading = false,
}: {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}) {
  return (
    <Styled.Container className={className} $isLoading={isLoading}>
      <Styled.MiniAvatar src={miniAvatar} />
      <Styled.Wrapper>
        <Chat>
          {isLoading && <Styled.LoadingAnimation />}
          {children}
        </Chat>
        <Arrow />
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default AIBubble;
