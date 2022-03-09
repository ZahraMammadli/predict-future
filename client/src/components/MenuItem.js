import { Link } from "react-router-dom";

export default function MenuItem({ name, Icon }) {
  return (
    <div>
      <Link to="/landing">
        <h3>
          {Icon ? <Icon /> : ""} {name}
        </h3>
      </Link>
    </div>
  );
}
