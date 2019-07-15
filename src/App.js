import React from 'react';
import DisplayItems from "./components/DisplayItems"
import productSample from "./components/productSample"

import './App.css';

class App extends React.Component {

  constructor(){
    super()
    this.state={
      products:[]
    }
  }

  // sample is load as app component is mounted
  componentDidMount(){
    this.setState({
      products : productSample
    })
  }

  /**
   * No NEED TO BUILD A SEPRATE FUNCTION TO LOAD DATA
   */
  // loadSamples(){
  //   this.setState({
  //     products : productSample
  //   })
  // }


  render(){
  return (
    <div>
    <DisplayItems products={this.state.products}/>
    </div>
  );
}
}
export default App;
