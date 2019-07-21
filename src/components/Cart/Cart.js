import React from "react";
import { formatPrice } from "../../helpers.js";
import CheckOutButton from "../CheckOutButton";
import RenderProducts from "../RenderProduct.js";
import { withRouter } from 'react-router-dom'


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
                    <div className="order"> </div>
                </div>

                <div className="cart-content">{
                    orderIds.map((key) =>{
                        const product = this.idFinding(key);
                        const count = this.props.orders[key];
                        return <RenderProducts key={key} OrderId={key} product={product} count={count}/>})}
                    </div>

                <div className="cart-footer">
                    <div className="total">
                        <strong>Total: </strong>
                        <span className="total-price">{formatPrice(total)}</span>
                    </div>
                   
                    <div className="">{
                    orderIds.map((key) =>{
                        const product = this.idFinding(key);
                        const count = this.props.orders[key];
                        return <CheckOutButton key={key} OrderId={key} product={product} count={count}/>})}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(Cart);
