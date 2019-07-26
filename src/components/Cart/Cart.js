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
    for (var i = 0; i < products.length; i++) {
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
      <div className="cart-right">
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
          {/* <CheckOutButton orders={this.props.orders} idFinding={this.idFinding} removeFromOrder={this.props.removeFromOrder}/> */}
          <CheckOutButton  idFinding={this.idFinding} {...this.props}/>
        </div>
        {/* <button onClick={this.toggleCart}>press Me</button> */}
      </div>
    );
  }
}
export default Cart;
