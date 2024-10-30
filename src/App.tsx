import * as Styled from "./App.styles";
import Aside from "./components/Aside";
import Main from "./components/Main";
import RootProvider from "./context/RootProvider";

function App() {
  return (
    <RootProvider>
      <Styled.Wrapper>
        <Styled.Content>
          <Aside />
          <Main />
        </Styled.Content>
      </Styled.Wrapper>
    </RootProvider>
  );
}

export default App;
