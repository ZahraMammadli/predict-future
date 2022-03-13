import LeftMenu from "../../components/LeftMenu/LeftMenu";
import PredictionsForm from "../../components/PredictionsForm/PredictionsForm";
import RightTab from "../../components/RightTab/RightTab";
import "./HomePage.css";

export default function () {
  return (
    <div className="w-70">
      <div className="d-flex">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="center-col">
          <PredictionsForm />
        </div>
        <RightTab />
      </div>
    </div>
  );
}
