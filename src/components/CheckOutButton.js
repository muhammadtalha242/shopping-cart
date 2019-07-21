import React from "react";
import { withRouter } from 'react-router-dom'

class CheckOutButton extends React.Component {

    constructor(){
        super()
        this.addHistoy= this.addHistoy.bind(this);
        this.addProps=this.addProps.bind(this);
    }
    addHistoy(){
        this.props.history.push(`/HomePage/${this.props.OrderId}/${this.props.count}`);
        
    }

    addProps(){
        const pro={...this.props}
        console.log(pro);
    }

    render() {
        return (
            <div>
                {this.addProps()}
                <button onClick={this.addHistoy}>Add to cart</button>
            </div>
        )
    }
}
export default withRouter(CheckOutButton);