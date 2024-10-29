import * as Styled from "./App.styles";
import Aside from "./components/Aside";
import Main from "./components/Main";
import { ChatProvider } from "./context/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <Styled.Container>
        <Aside />
        <Main />
      </Styled.Container>
    </ChatProvider>
  );
}

export default App;
