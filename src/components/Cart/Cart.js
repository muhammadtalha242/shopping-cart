import React from "react";
import RenderProduct from './RenderProduct';
import { formatPrice } from "../../helpers";
import CheckOutButton from "./CheckOutButton";
import "./cart.css";

class Cart extends React.Component {
  constructor() {
    super();
    this.idFinding = this.idFinding.bind(this);
  }

  idFinding(key) {
    const products = this.props.products;
    for (var i = 0; i < 17; i++) {
      if (products[i]["id"].toString() === key) {
        return products[i];
      }
    }
  }



  renderPrice(orderIds) {
    const total = orderIds.reduce((prevTotal, key) => {
      const product = this.idFinding(key);
      const count = this.props.orders[key];
      if (product) {
        return prevTotal + count * product["price"] || 0;
      }
      return prevTotal;
    }, 0);
    return total;
  }


  render() {
    const orderIds = Object.keys(this.props.orders);

    const total = this.renderPrice(orderIds);
    return (
      <div className="cart-container">
        <div className="cart-header">
          <div className="order">Shopping Cart </div>
        </div>
        <div className="cart-content">{
          orderIds.map((key) => {
            const product = this.idFinding(key);
            const count = this.props.orders[key];
            return <RenderProduct key={key} orderId={key} product={product} count={count} removeFromOrder={this.props.removeFromOrder}/>
          })}</div>

        <div className="cart-footer">
          <div className="total">
            <strong>Total: </strong>
            <span className="total-price">{formatPrice(total)}</span>
          </div>
          <CheckOutButton/>
        </div>
      </div>
    );
  }
}
export default Cart;
