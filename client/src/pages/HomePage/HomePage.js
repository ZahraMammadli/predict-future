import LeftMenu from "../../components/LeftMenu/LeftMenu";
import "./HomePage.css";

export default function () {
  return (
    <div className="d-flex">
      <div className="left-menu">
        <LeftMenu />
      </div>
      <div className="center-col">Center column </div>
      <div className="right-tab">Right tab</div>
    </div>
  );
}
