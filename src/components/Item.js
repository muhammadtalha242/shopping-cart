import React from "react";
import AddToCart from "./AddToCart";
class Item extends React.Component{

    render(){
    const object = this.props.object;
    const isFreeShipping = object["isFreeShipping"] ? "Free Shipping":"No Free Shipping";
    const price = object["price"].toString();
    

        return(
            <div  className="display-item">
               
            <div className="display-item-shipping">{isFreeShipping}</div>
            <img src={object["image"]} width="100%" height="270px"  alt={object["title"]}/> 
            <p className="display-item-title">{object["title"]}</p>
            <hr></hr>
            <div className="display-item-price">
            <div><small>{object["currencyFormat"]}</small><b>{Math.floor(object["price"])}</b><span>.{price.split(".")[1]}</span></div>
            <div className="display-item-investment">
            <span>or {object["installments"]} x</span>
            <b> {(object["price"]/object["installments"]).toFixed(2)}</b>
            <AddToCart productKey={object["id"]} addToCart={this.props.addToCart}/>
            </div>
            </div>
            </div>
        )
    }
}
export default Item