import React from "react";
import DisplayItems from "./components/DisplayItems";
import productSample from "./components/productSample";
import Sizes from "./components/Sizes";
import Cart from "./components/Cart";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.filterSizes = this.filterSizes.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.state = {
      products: productSample.products,
      filterData: productSample.products,
      order: {}
    };
  }
  filterSizes(match) {
    console.log(match);
    this.setState({ filterData: match });
  }
  addToCart(key) {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  removeFromOrder(key) {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  }

  render() {
    return (
      <div className="root">
        <Sizes products={this.state.products} filterSizes={this.filterSizes} />

        <DisplayItems
          products={this.state.filterData}
          addToCart={this.addToCart}
        />
        
        <Cart
          orders={this.state.order}
          products={this.state.products}
          removeFromOrder={this.removeFromOrder}
        />
      </div>
    );
  }
}
export default App;
