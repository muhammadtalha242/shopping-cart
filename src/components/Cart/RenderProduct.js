import React from "react"
import Icon from "../../icon/closeIcon.png";
import { formatPrice } from "../../helpers.js";
import "./renderProduct.css";

class RanderProduct extends React.Component {
    render(){
     const product = this.props.product;
    const count = this.props.count;
     const orderId= this.props.orderId;
    console.log(orderId);
    return (
        <div key={this.props.orderId} className="product">
            <img
                src={Icon}
                className="del-icon"
                onClick={() => this.props.removeFromOrder(orderId)}
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
}
export default RanderProduct;