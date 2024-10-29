import * as Styled from "./App.styles";
import Aside from "./components/Aside";
import Main from "./components/Main";
import RootProvider from "./context/RootProvider";

function App() {
  return (
    <RootProvider>
      <Styled.Container>
        <Aside />
        <Main />
      </Styled.Container>
    </RootProvider>
  );
}

export default App;
