import React from "react";

class AddToCart extends React.Component{

    constructor(){
        super();
        this.inputHandler = this.inputHandler.bind(this);
      }
      inputHandler(event){
        this.props.addToCart(event.target.value)
      }

     render(){

        return(
            <div>
                <button className="add-to-cart" key={this.props.productKey} value={this.props.productKey} onClick={this.inputHandler} >Add to cart</button>
            </div>
        )
    }
}
export default AddToCart