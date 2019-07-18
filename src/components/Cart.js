import React from "react"


class Cart extends React.Component {
    constructor(){
        super()
        this.idFinding= this.idFinding.bind(this);
        this.randerProduct=this.randerProduct.bind(this);
    }
    
    idFinding(key){
        const products = this.props.products;
        for (var i = 0; i < 17; i++) {
            if(products[i]["id"].toString() === key){
                return products[i];
            }
        }
        
    }

    


    randerProduct(key){
        const product = this.idFinding(key);
        const count = this.props.orders[key];
        return(
            <div key={key} className="product">
            <button className="del-icon" onClick={()=> this.props.removeFromOrder(key)}></button>
             <div className="display-product">
                
                <img src="https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.df97d7c2.jpg" width="70px" height="60px" alt={product["title"]}/>
                
                
            </div>
                <div className="product-title">
                    Product: {product["title"]}
                    <div className="display-discp">
                         <p>
                             {product["availableSizes"][0]}|{product["description"]}
                             <br/>
                             Quantity: {count}
                             </p>
                     </div>
                </div>
                     
                <div className="display-price">
                      price: {(count * product["price"])}
                     </div>
                {/* <div className="display-quantity"></div> */}
               
            </div>
        )
    }
    
    renderPrice(orderIds){
        const total = orderIds.reduce((prevTotal, key)=>{
            const product = this.idFinding(key);
            const count = this.props.orders[key];
            if(product){
                return (prevTotal + (count * product["price"]) || 0 )
            }
            return prevTotal;
        },0)
        return total
    }
    



    render(){
        const orderIds = Object.keys(this.props.orders);

       const total = this.renderPrice(orderIds);
        return(
            <div className="cart-container">
                <div className="cart-header" >
                
                <div className="order">
                
                </div>
                </div>
                <div className="cart-content">
                {orderIds.map(this.randerProduct)}
                </div>
                <div className="cart-footer">
                <div className="total">
                    <strong>Total: </strong>
                    {(total)}
                </div>
                </div>
            </div>
        )
    }
}
export default Cart