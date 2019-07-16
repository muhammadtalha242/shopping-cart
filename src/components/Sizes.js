import React from "react";
import SizeButton from "./SizeButton";
class Sizes extends React.Component {

    render(){

        return(
            <div className="filters">
               <span className="title">Sizes:</span> 
                <SizeButton products = {this.props.products} filterSizes={this.props.filterSizes}/>
            </div>
        )
    }
}
export default Sizes;