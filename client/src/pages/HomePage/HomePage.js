import LeftMenu from "../../components/LeftMenu/LeftMenu";
import PredictionsForm from "../../components/PredictionsForm/PredictionsForm";
import Feed from "../../components/PredictionStream/feed";
import "./HomePage.css";
import WordCloud from "../../components/WordCloud/WordCloud";
import Nebula from "../../assets/videos/Nebula.mp4";

export default function () {
  return (
    <div className="feature">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          margin: "0",
          height: "100vh",
          width: "100vw",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Nebula} type="video/mp4" />
      </video>
      <div className="w-80">
        <div className="d-flex">
          <div className="left-menu">
            <LeftMenu />
          </div>
          <div className="center-col">
            <WordCloud />
            <PredictionsForm />
            <Feed />
          </div>
        </div>
      </div>
    </div>
  );
}
