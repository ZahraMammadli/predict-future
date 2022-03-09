import LeftMenu from "../components/LeftMenu";

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
