import LeftMenu from "../../components/LeftMenu/LeftMenu";
import RightTab from "../../components/RightTab/RightTab";
import "./HomePage.css";

export default function () {
  return (
    <div className="w-70">
      <div className="d-flex">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="center-col">Center column </div>
        <RightTab />
      </div>
    </div>
  );
}
