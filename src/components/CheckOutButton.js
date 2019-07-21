import React from "react";
import { withRouter } from 'react-router-dom'

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
                <button onClick={this.addHistoy}>Add to cart</button>
            </div>
        )
    }
}
export default withRouter(CheckOutButton);
