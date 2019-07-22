import React from "react";


class CheckOut extends React.Component {
 
  

  render() {
    return (
      <div >
        <img src="https://i.pinimg.com/564x/11/67/67/1167672eda63244c3901a5f4af734995.jpg" alt="Test"/>
        <button onClick={() => {
          this.props.history.push("/")}}>Back</button>
      </div>
    )
  }
}
export default CheckOut;
