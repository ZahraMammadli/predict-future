import LeftMenu from "../../components/LeftMenu/LeftMenu";
import PredictionsForm from "../../components/PredictionsForm/PredictionsForm";
import Feed from "../../components/PredictionStream/feed";
import RightTab from "../../components/RightTab/RightTab";
import "./HomePage.css";
import WordCloud from "../../components/WordCloud/WordCloud";

export default function () {
  return (
    <div className="w-80">
      <div className="d-flex">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="center-col">
          <div className="center-col">
            {/* <WordCloud /> */}
            <PredictionsForm />
          </div>
          <div className="center-col">
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}
