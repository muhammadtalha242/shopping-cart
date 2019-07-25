import React from 'react';
import DisplayItems from "./components/Display-Items/DisplayItems"
// import productSample from "./components/Sample-Data/productSample"
import Sizes from "./components/Sort-Buttons/Sizes"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import './App.css';
import shoppingCart from "./icon/shopping-cart.png"
import axios from "axios";
class App extends React.Component {
  constructor() {
    super();
    this.filterSizes = this.filterSizes.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.toggleCart = this.toggleCart.bind(this);                   //dispaly and hide cart component 

    this.state = {
      // products: productSample.products,                 //Product sample Data
      // filterData: productSample.products,             //Data after applying sort and filters  
      order: {},                                      //contain Order id and count 
      isShowing: false,                              //To maintain state of the cart component

      error: null,
      isLoaded: false,
      products: [],
      filterData: []
    };
  }


//Using fetch promise to get products from api  
  fetchProducts(url){
    fetch(url)
      .then(product => {
        console.log("A responce from fetch call :",product)

        return product.json()
      })
      .then((output) => {
        console.log("A responce from .json() call :",output)
        this.setState({
          isLoaded: true,
          products: output.products,
          filterData: output.products

        });
      },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  //Using axios libray for ajax call to retrive data from api
  axiosProducts(url){
    console.log("using axios: ")
    axios.get(url)
    .then(response => {
      this.setState({
        isLoaded:true,
        products :response.data.products,
        filterData:response.data.products
      })
    })
    .catch((error) =>{
      this.setState({
        error,
        isLoaded: true
      })
    })
    
  }


  componentDidMount() {
    // this.fetchProducts("https://api.myjson.com/bins/l37cp")    
    this.axiosProducts("https://api.myjson.com/bins/12ik89")
    
  }


  //To update state of filterData
  filterSizes(match) {
    console.log(match);
    this.setState({ filterData: match });
  }

  //To update state of order
  addToCart(key) {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  //To Remove and order 
  removeFromOrder(key) {
    console.log("inside remove fnction (key):", key);
    const order = { ...this.state.order };
    delete order[key];
    console.log("Deleted")
    this.setState({ order });
  }


  //dispaly and hide cart component
  toggleCart() {
    const cart = document.getElementsByClassName("cart-right");
    const cart2 = document.getElementsByClassName("cart-container");
    let showing = this.state.isShowing;
    if (showing) {
      cart2[0].classList.add("cart-right");
      cart[0].classList.remove("cart-container");
      showing = false;
      this.setState({ isShowing: showing })
    }
    else {
      cart[0].classList.add("cart-container");
      cart2[0].classList.remove("cart-right");
      showing = true;
      this.setState({ isShowing: showing })

    }
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>
        <h1>Error</h1>
        <h3>error.message</h3>
      </div>
    }
    else {
      // console.log(products);
      return (
        <div className="header">
          <Header />

          <div className="root">
            <Sizes products={this.state.products} filterSizes={this.filterSizes} />
            {!isLoaded ? <h1>Loading Products</h1> :
              <React.Fragment>
                <DisplayItems
                  products={this.state.filterData}
                  addToCart={this.addToCart} />
                <Cart
                  orders={this.state.order}
                  products={this.state.products}
                  removeFromOrder={this.removeFromOrder} />
                {console.log("loaded")}
                <img
                  src={shoppingCart}
                  className="toggle-button"
                  onClick={() => this.toggleCart()}
                  width="50px"
                  height="50px"
                  alt="Shopping Cart"
                />
             </React.Fragment>
            }
          </div>

        </div>
      );
    }
  }
}

export default App;