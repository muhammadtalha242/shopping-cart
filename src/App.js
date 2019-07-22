import React from 'react';
import DisplayItems from "./components/Display-Items/DisplayItems"
import productSample from "./components/Sample-Data/productSample"
import Sizes from "./components/Sort-Buttons/Sizes"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import './App.css';

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
    console.log("inside remove fnction (key):", key );
    const order = { ...this.state.order };
    delete order[key];
    console.log("Deleted")
    this.setState({ order });
  }

  render() {
    return (
      <div className="header">
        <Header />

        <div className="root">
          <Sizes products={this.state.products} filterSizes={this.filterSizes} />

          <DisplayItems
            products={this.state.filterData}
            addToCart={this.addToCart}
          />
          <Cart
            orders={this.state.order}
            products={this.state.products}
            removeFromOrder={this.removeFromOrder} />
        </div>
      </div>
    );
  }
}

export default App;
