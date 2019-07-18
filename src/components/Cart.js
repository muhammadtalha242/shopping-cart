import React from "react"


class Cart extends React.Component {
    constructor(){
        super()
        this.idFinding= this.idFinding.bind(this);
    }
    
    
    idFinding(key){
        const products = this.props.products;
        for (var i = 0; i < 17; i++) {
            if(products[i]["id"].toString() === key){
                return products[i];
            }
        }
        
    }



    render(){
        const orderIds = Object.keys(this.props.orders);
        
        const total = orderIds.reduce((prevTotal, key)=>{
            const product = this.idFinding(key);
            const count = this.props.orders[key];
            if(product){
                return (prevTotal + (count * product["price"]) || 0 )
            }
            return prevTotal;
        },0)
        return(
            <div className="cart">
            <h2>Your Order</h2>
                <ul className="order">
                    <li className="total">
                    <strong>Total: </strong>
                    {(total)}
                </li>
                </ul>

            </div>
        )
    }
}
export default Cart