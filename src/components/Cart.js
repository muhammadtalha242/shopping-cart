import React from "react";
import { formatPrice } from "../helpers.js";
import Icon from "../icon/closeIcon.png";

class Cart extends React.Component {
  constructor() {
    super();
    this.idFinding = this.idFinding.bind(this);
    this.randerProduct = this.randerProduct.bind(this);
  }

  idFinding(key) {
    const products = this.props.products;
    for (var i = 0; i < 17; i++) {
      if (products[i]["id"].toString() === key) {
        return products[i];
      }
    }
  }

  randerProduct(key) {
    const product = this.idFinding(key);
    const count = this.props.orders[key];
    return (
      <div key={key} className="product">
        <img
          src={Icon}
          className="del-icon"
          onClick={() => this.props.removeFromOrder(key)}
          width="10px"
          alt="Close Icon"
        />
        <div className="display-product">
          <img
            src={product["image"]}
            className="img-float"
            width="70px"
            height="60px"
            alt={product["title"]}
          />
        </div>

        <div className="product-title">
          <span className="title-product">
            {product["title"]} <br />
            <br />
            <span className="price-right">
              <strong>Price: </strong>

              {formatPrice(count * product["price"])}
            </span>{" "}
          </span>

          <div className="display-discp">
            <p className="p-float">
              {product["availableSizes"][0]}|{product["description"]}
              <br />
              Quantity: {count}
            </p>
          </div>
        </div>

        <hr />
      </div>
    );
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

        <div className="cart-content">{orderIds.map(this.randerProduct)}</div>

        <div className="cart-footer">
          <div className="total">
            <strong>Total: </strong>
            <span className="total-price">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
