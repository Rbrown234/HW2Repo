import { Link } from "react-router-dom";
import { useState } from "react";

function Checkout(props) {
  function sum(nums) {
    return nums.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  //const [isDisabled, setIsDisabled] = useState(true);
  //const [checked, setChecked] = useState(false);

  //const canBeSubmitted = () => {
  //  return checked ? setIsDisabled(true) : setIsDisabled(false);
  //};
  //const onCheckboxClick = () => {
  // setChecked(!checked);
  // return canBeSubmitted();
  //};

  let lineItemEls = [];
  for (let myfish of props.chosenFish) {
    lineItemEls.push(
      <li>
        <strong>{myfish.name}</strong>: ${myfish.price.toFixed(2)}
      </li>
    );
  }

  const prices = props.chosenFish.map(function (myFish) {
    return myFish.price;
  });
  const total = sum(prices);

  return (
    <div className="Checkout">
      <ol>{lineItemEls}</ol>
      <div>Total Price: ${total.toFixed(2)}</div>
      <div>
        <input type="checkbox" />I agree to be billed ${total.toFixed(2)} and
        solemly swear to adhere to law of no backsies
      </div>
      <div>
        <input type="checkbox" />I accept the
        <Link to="/ToS">terms and conditions</Link> of purchase
      </div>
      <button>Submit Order</button>
    </div>
  );
}

export default Checkout;
