import React from "react";

class SizeButton extends React.Component {

    constructor(){
        super();
        this.clickHandler =this.clickHandler.bind(this);
    }

    clickHandler(event){
        const word = event.target.textContent;
        let matched = [];
        const wholeData = this.props.products;

        matched = wholeData.filter(data =>{
            if(data.availableSizes.includes(word)){
                return data;
            }
            return "";
        });

       this.props.filterSizes(matched);
    }

    render(){
        const size = ["XS","S","M","ML","L","XL","XXL"];
        return (
            <div className="sizegap" >
                {size.map(size => {
                    return <button onClick={this.clickHandler} className="round-button" key={size}>{size}</button>
                })}
            </div>
        )
    }
}
export default SizeButton;