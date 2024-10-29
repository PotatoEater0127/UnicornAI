import avatar from "../../assets/avatar.svg";
import "./index.css";

function Aside() {
  return (
    <aside className="aside">
      <img src={avatar} className="avatar" alt="avatar" />
    </aside>
  );
}

export default Aside;
