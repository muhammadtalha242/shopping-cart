import React from 'react';
import DisplayItems from "./components/DisplayItems"
import productSample from "./components/productSample"
import Sizes from "./components/Sizes"
import './App.css';

class App extends React.Component {

constructor(){
  super();
  this.filterSizes = this.filterSizes.bind(this);
  this.state={
    products:productSample.products,
    filterData:productSample.products,
  };
}
filterSizes(match){

  console.log(match)
   this.setState({filterData:match})
}


  render(){

  return (
    <div className="root">

      <Sizes products={this.state.products} filterSizes={this.filterSizes} />
     
      <DisplayItems products={this.state.filterData}/>

    </div>
  );
}
}
export default App
