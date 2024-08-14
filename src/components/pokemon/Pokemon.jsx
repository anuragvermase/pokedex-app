//CSS imports
import { Link } from "react-router-dom";
import "./Pokemon.css";
function Pokemon({ name, id, url }) {
  return (
    <Link to={'/pokemon/${id}'} className="pokemon-wrapper">
      <div className="pokemon">
        <div id="top-left-id">{id}</div>

        <div className="pokemon-name">{name}</div>

        <img className="pokemon-image" src={url} />
      </div>
    </Link>
  );
}

export default Pokemon;
