import LeftMenu from "../components/LeftMenu/LeftMenu";
import WordCloud from "../components/WordCloud/WordCloud";
import Nebula from "../assets/videos/Nebula.mp4";

const Explore = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
