import { Link } from "react-router-dom";
import "./Homepage.css";
import config from "../config";
import Product from "./Product";

function Darkhome(props) {
  let fishEls = [];
  for (let myfish of config.fish) {
    fishEls.push(
      <Product
        onFishChosen={props.onFishChosen}
        name={myfish.name}
        price={myfish.price}
        image={myfish.image}
        id={myfish.id}
      />
    );
  }
  return (
    <div>
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="Homepage-products">{fishEls}</div>
      <Link to="/Darkcheckout">Checkout</Link>
    </div>
  );
}

export default Darkhome;
