import miniAvatar from "../../../assets/avatar/mini.svg";
import { Arrow, Chat } from "../index.styles";
import * as Styled from "./index.styles";

function AIBubble({
  className,
  text,
  children,
  isLoading = false,
  showTypingEffect = false,
}: {
  className?: string;
  text: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  showTypingEffect?: boolean;
}) {
  return (
    <Styled.Container className={className} $isLoading={isLoading}>
      <Styled.MiniAvatar src={miniAvatar} />
      <Styled.Wrapper>
        <Chat text={text} enableEffect={showTypingEffect}>
          {isLoading && <Styled.LoadingAnimation />}
          {children}
        </Chat>
        <Arrow />
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default AIBubble;
