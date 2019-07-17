import React from "react";

class Sort extends React.Component {

    render(){
        const status = "";
            
        return(
            <div className="filters">
                <select ref={(input)=>{this.status = input}}>
                    <option key="Select">Select</option>
                    <option key = "Low">Lowest to highest</option>
                    <option key = "High" >Highest to lowest</option>
                </select>
            </div>
        )
    }
}
export default Sort;