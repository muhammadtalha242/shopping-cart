import React from "react";

class AddToCart extends React.Component{

    constructor(){
        super();
        this.addToCart = this.addToCart.bind(this);
      }
      addToCart(match){
        console.log("Clicked")
      }
     render(){

        return(
            <div>
                <button className="add-to-cart" key='1' onClick={this.addToCart} >Add to cart</button>
            </div>
        )
    }
}
export default AddToCart