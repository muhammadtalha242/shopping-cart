import React from "react";
import AddToCart from "./AddToCart";
class Item extends React.Component{

    constructor(){
        super();
        this.freeShipping = this.freeShipping.bind(this);
        this.freeShippingRemove = this.freeShippingRemove.bind(this);
      }

    freeShipping(){
        const header  = document.querySelector(".display-item-shipping");
        header.classList.add("display-item-shipping-hover")
    }
    freeShippingRemove(){
        const header  = document.querySelector(".display-item-shipping");
        header.classList.remove("display-item-shipping-hover")
    }

    render(){
    const object = this.props.object;
    const isFreeShipping = object["isFreeShipping"] ? "Free Shipping":"No Free Shipping";
    const price = object["price"].toString();
    

        return(
            <div  className="display-item" onMouseEnter={() => this.freeShipping()} onMouseLeave={() => this.freeShippingRemove()}>
               
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