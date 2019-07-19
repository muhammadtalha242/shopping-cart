import React from "react";


class CheckOut extends React.Component {
 
    constructor() {
        super();
        this.moveToCart = this.moveToCart.bind(this);
      }
    
    //   moveToCart(event) {
    //       const userId = "123";
    //       //this.props.history.push(`/store/${userId}`);  
    //     //console.log(event.target)
    //   }

  render() {
    return (
      <div >
        <img src="https://i.pinimg.com/564x/11/67/67/1167672eda63244c3901a5f4af734995.jpg" alt="Test"/>
      </div>
    );
  }
}
export default CheckOut;
