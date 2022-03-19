import { Link } from "react-router-dom";

export default function MenuItem({ id, name, Icon }) {
  console.log(id);
  return (
    <div>
      <Link to={"/post/" + id}>
        <h3>
          <span className="mi-icon">{Icon ? <Icon /> : ""}</span>{" "}
          <span className="mi-name"> {name}</span>
        </h3>
      </Link>
    </div>
  );
}
