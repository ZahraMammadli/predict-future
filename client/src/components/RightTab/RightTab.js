import SearchBar from "../SearchBar/SearchBar";
import "./RightTab.css";
import Trend from "./Trend";

const trends = [
  { name: "#Trend1" },
  { name: "#Trend2" },
  { name: "#Trend3" },
  { name: "#Trend4" },
];

export default function RightTab() {
  return (
    <div className="right-tab">
      <SearchBar />
      <div className="">
        {trends.map((t) => (
          <Trend trend={t.name} />
        ))}
      </div>
    </div>
  );
}
