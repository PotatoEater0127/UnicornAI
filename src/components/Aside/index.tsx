import avatar from "../../assets/avatar.svg";

import * as Styled from "./index.styles";

function Aside() {
  return (
    <Styled.Container>
      <img src={avatar} className="avatar" alt="avatar" />
    </Styled.Container>
  );
}

export default Aside;
