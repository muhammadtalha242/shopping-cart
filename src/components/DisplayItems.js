import React from "react";
import Item from "./Item"
import Sizes from "./Sizes";

class DisplayItems extends React.Component{

     render(){
         console.log("inside DisplayItem render",this.props.products)
         const array=this.props.products;
        return(
            <div>{
                

                array.map((object,key) =>{
                   // console.log("this is key: ",key)
                   // console.log("This is object: ",object)
                  return  <Item key={key} object={object}/>
               })}
                {/* {this.renderProduct()}
                <Item  object={this.props.products.products}/> */}

            </div>
        )
    }
}
export default DisplayItems