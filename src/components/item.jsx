import "./item.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Item = (props) => {
  // state variables
  const [amount, setAmount] = useState(1);

  // logic (fns)
  const getAmount = (a) => {
    setAmount(a);
    console.log(`Quantity is now ${a}`);
  };

  const getTotal = () => {
    let price = props.data.price;
    let total = price * amount;
    return total.toFixed(2);
  };

  // effects

  // return
  return (
    <div className="item">
      <img src={"/img/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>
      <label className="price">${props.data.price}</label>
      <br />
      <label className="shipping">Free Shipping</label>
      <hr />
      <div className="item-buttons">
        <label className="total">Total: ${getTotal()}</label>
        <QuantityPicker onChange={getAmount} />
        <button className="btn btn-sm btn-success">Add To Cart</button>
      </div>
    </div>
  );
};

export default Item;
