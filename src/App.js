import React from 'react';
import DisplayItems from "./components/DisplayItems"
import productSample from "./components/productSample"
import Sizes from "./components/Sizes"
import Sort from "./components/Sort"
import './App.css';

class App extends React.Component {

constructor(){
  super();
  this.filterSizes = this.filterSizes.bind(this);
  this.state={
    products:productSample.products,
    filterData:""
  };
}
filterSizes(match){
  console.log(match)
   this.setState({filterData:match})
}


  render(){

    console.log("inside App render",this.state.products)
  return (
    <div>
      {/* {this.loadSamples()} */}
      {/* <button onClick={this.loadSamples}>laodSamples</button> */}

      <Sizes products={this.state.products} filterSizes={this.filterSizes} />
      <Sort/>
      <DisplayItems products={this.state.products}/>
      {/* {this.renderProduct()} */}

    </div>
  );
}
}
export default App
