import { Search } from "@material-ui/icons";
import "./SearchBar.css";

function SearchBar() {
    return (
      <div className="search-bar">
        <div className="search-bar__input">
          <Search className="search-bar__searchIcon" />
          <input placeholder="Search" type="text" />
        </div>
        </div>
        }