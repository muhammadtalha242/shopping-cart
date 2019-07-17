import React from 'react';
import DisplayItems from "./components/DisplayItems"
import productSample from "./components/productSample"
// import Item from "./components/Item"

import './App.css';

class App extends React.Component {

  constructor() {
    super()
    // this.loadSamples= this.loadSamples.bind(this);
    // this.renderProduct= this.renderProduct.bind(this);
    this.state={
      products:productSample.products
    }
  }

  /**
   * No NEED TO BUILD A SEPRATE FUNCTION TO LOAD DATA
   */
  // loadSamples(){
  //   this.setState({
  //     products : productSample
  //   })
  // }
  // renderProduct(){
  //   const array = this.state.products.products;

  //   array.map((key,obj)=>{
  //     return <Item key={key} object={obj}/>
  // })
  // }


  render(){
    console.log("inside App render",this.state.products)
  return (
    <div>
      {/* {this.loadSamples()} */}
      {/* <button onClick={this.loadSamples}>laodSamples</button> */}
    <DisplayItems products={this.state.products}/>
    {/* {this.renderProduct()} */}
    </div>
  );
}
}
export default App;
