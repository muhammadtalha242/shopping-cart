import React from "react";
import Item from "./Item"

class DisplayItems extends React.Component{
constructor(){
    super()
    //this.renderProduct = this.renderProduct.bind(this);
}

renderProduct(){
    //const array = this.props.products.products;
    // let count =0;
    // console.log("counter: ",count++,array);
    // array.map((obj)=>{
    //     return <Item key={obj.id}/>
    // })
    }

    render(){
        const array = this.props.products.products;
        let count =0;
        //console.log("counter: ",count++,array);

        return(
            <div>
                {console.log("counter: ",count++,array)}
                <Item obj={this.props.products.products}/>
            </div>
        )
    }
}
export default DisplayItems