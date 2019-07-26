import React from "react";
import { withRouter } from 'react-router-dom'
import "./checkOutButton.css"
class CheckOutButton extends React.Component {

    constructor(){
        super()
        this.addHistoy= this.addHistoy.bind(this);
    }
    addHistoy(){
        console.log("This is prop: " ,this.props);
        const ord={id:"12", count:12};
        const url = `/HomePage/${JSON.stringify(ord)}`;
        this.props.history.push(encodeURI(url));
        
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
