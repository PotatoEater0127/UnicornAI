import * as Styled from "./App.styles";
import Aside from "./components/Aside";
import Main from "./components/Main";

function App() {
  return (
    <Styled.Container>
      <Aside />
      <Main />
    </Styled.Container>
  );
}

export default App;
