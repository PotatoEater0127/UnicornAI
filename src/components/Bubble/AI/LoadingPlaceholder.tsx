import styled from "styled-components";
import AIBubble from ".";

function LoadingPlaceholder({ className }: { className?: string }) {
  return (
    <AIBubble className={className} isLoading>
      <span className="placeholder">
        These content are for styling purpose. So that the bubble can be
        responsive to the content inside it.
      </span>
    </AIBubble>
  );
}

export default styled(LoadingPlaceholder)`
  .placeholder {
    visibility: hidden;
  }
`;
