import React from "react";


class CheckOutButton extends React.Component {
 
    constructor() {
        super();
        this.moveToCart = this.moveToCart.bind(this);
      }
    
      moveToCart() {
        //const userId = "123";
        // console.log(this.props)
      }

  render() {
    return (
      <div >
         
      <button className="checkout" onClick={()=>  {this.props.history.push('/cart');} }>CheckOut</button>
      </div>
    );
  }
}
export default CheckOutButton;
