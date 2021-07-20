import React from "react"


class Add extends React.Component {
    constructor() {
        super();
        this.state =  {
            productName : '',
            price: 1,

        }
    }


    updateProductName=(e) => {
        this.setState({productName: e.target.value})
    }

    updatePrice=(e) => {
        this.setState({price: e.target.value})
    }


    render(){
        return (
            <div>
                <input type='text' onChange={this.updateProductName}></input>
                <input type='range' min='1' max='10' onChange={this.updatePrice}></input>
                <button onClick={this.props.addItem}>Add</button>

            </div>
        )
    }
}

export default Add;