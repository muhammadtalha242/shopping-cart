import React from "react";
import { withRouter } from 'react-router-dom'
import "./checkOutButton.css"
class CheckOutButton extends React.Component {

    constructor(){
        super()
        this.addHistoy= this.addHistoy.bind(this);
    }
    addHistoy(){
        console.log(this.props.orders);
        this.props.history.push(`/HomePage/${JSON.stringify(this.props.orders)}`);
        
    }


    render() {
        return (
            <div>
                <button className="check-out" onClick={this.addHistoy}>Check Out</button>
            </div>
        )
    }
}
export default withRouter(CheckOutButton);
