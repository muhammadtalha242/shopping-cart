import React from "react";
import Item from "./Item"

class DisplayItems extends React.Component{
constructor(){
    super()
    this.renderProduct = this.renderProduct.bind(this);
}

renderProduct(){
    const array = this.props.products.products;
    let count =0;
    console.log("counter: ",count++,array);
    array.map((key,obj)=>{
        return <Item key={key} object={obj}/>
    })
    }

    render(){
       const array = this.props.products.products;

        return(
            <div>
                <Item product={this.props.products.products}/>

                {/* {this.renderProduct()} */}
            </div>
        )
    }
}
export default DisplayItems