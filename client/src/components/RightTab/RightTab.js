import SearchBar from "../SearchBar/SearchBar";
import "./RightTab.css";

export default function RightTab() {
  return (
    <div className="right-tab">
      <SearchBar />
      <div className="">
        <h3>Side bar</h3>
      </div>
    </div>
  );
}
