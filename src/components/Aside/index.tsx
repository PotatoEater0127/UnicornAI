import avatar from "../../assets/avatar.svg";

import * as Styled from "./index.styles";

function Aside() {
  return (
    <Styled.Aside>
      <img src={avatar} className="avatar" alt="avatar" />
    </Styled.Aside>
  );
}

export default Aside;
