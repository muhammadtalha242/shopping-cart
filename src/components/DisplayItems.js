import React from "react";
import Item from "./Item"

class DisplayItems extends React.Component{

     render(){
         const array=this.props.products;
        return(
            <div className="display-item-container">{

                

                array.map((object,key) =>{
                  
<<<<<<< HEAD
                  return  <Item key={key} object={object} addToCart={this.props.addToCart}/>
=======
                  return  <Item key={key} object={object} addToCart={this.props.addToCart} data-key={key}/>
>>>>>>> master
               })}
               
            </div>
        )
    }
}
export default DisplayItems