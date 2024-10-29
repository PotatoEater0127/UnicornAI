import * as Styled from "./index.styles";

function Chat() {
  return (
    <Styled.Form>
      <textarea className="textarea" rows={1} placeholder="Aa" />
      <button className="send" />
    </Styled.Form>
  );
}

export default Chat;
