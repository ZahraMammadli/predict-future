import LeftMenu from "../../components/LeftMenu/LeftMenu";
import PredictionsForm from "../../components/PredictionsForm/PredictionsForm";
import Feed from "../../components/PredictionStream/feed";
import RightTab from "../../components/RightTab/RightTab";
import "./HomePage.css";

export default function () {
  return (
    <div className="w-80">
      <div className="d-flex">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="center-col">
          <PredictionsForm />
          <Feed />
        </div>
        <RightTab />
      </div>
    </div>
  );
}
