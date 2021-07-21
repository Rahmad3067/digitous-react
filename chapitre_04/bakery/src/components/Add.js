import React from "react"
import './add.css'


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
    insertItem = () => {
        this.props.addItem({
            name: this.state.productName, 
            price: this.state.price})
    }




    render(){
        return (
            <div className='row'>
                <input className='border border-warning' type='text' onChange={this.updateProductName}></input>
                <input className='ml-2' id='textInput' type='range' min='1' max='10' value={this.state.price} onChange={this.updatePrice}></input>
                <label className='ml-2' type='text'>{this.state.price}€</label>
                <button className='bg-primary btn' onClick={this.insertItem}>Add</button>

            </div>
        )
    }
}

export default Add;