import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="First name" />
          <input type="text" name="" id="" placeholder="Last name" />
        </div>
        <input type="text" name="" id="" placeholder="Email address" />
        <input type="text" name="" id="" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="City" />
          <input type="text" name="" id="" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder="Zip code" />
          <input type="text" name="" id="" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEDD TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
