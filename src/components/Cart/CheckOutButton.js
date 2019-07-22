import React from "react";
import { withRouter } from 'react-router-dom'
import "./checkOutButton.css"
class CheckOutButton extends React.Component {

    constructor(){
        super()
        this.addHistoy= this.addHistoy.bind(this);
    }
    addHistoy(){
        this.props.history.push("/HomePage");
        
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
