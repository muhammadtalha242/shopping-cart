import React from "react";

class Sort extends React.Component {

    constructor(){
        super();
        this.sortOrder = this.sortOrder.bind(this);
      }
    
    sortOrder(event){
        const selectedValue = event.target.value;
        const products = this.props.products;
        let matched = [];
        
        if(selectedValue === "Lowest to Highest"){
           matched =  products.sort((a,b)=> (a.price - b.price) )
        }
        else if(selectedValue === "Highest to Lowest"){
           matched =  products.sort((a,b)=> (b.price - a.price))
        }
        else if(selectedValue === "Select"){
            matched =  this.props.products
         }
        this.props.filterSizes(matched);
    }
    render(){
        return(
            <div>
                <span className="title">Order by</span>{" "}
                <select onChange={this.sortOrder}>
                    <option key="Select" value = "Select">Select</option>
                    <option key = "Low" value="Lowest to Highest">Lowest to Highest</option>
                    <option key = "High" value="Highest to Lowest">Highest to Lowest</option>
                </select>
            </div>
        )
    }
}
export default Sort;