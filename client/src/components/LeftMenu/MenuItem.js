import { Link } from "react-router-dom";

export default function MenuItem({ name, Icon }) {
  return (
    <div>
      <Link to="/landing">
        <h3>
          <span className="mi-icon">{Icon ? <Icon /> : ""}</span>{" "}
          <span className="mi-name"> {name}</span>
        </h3>
      </Link>
    </div>
  );
}
