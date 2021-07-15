import React from 'react';
import './counter.css'

// const myCSS1 = {
//     backgroundColor : 'red',
// };
// const myCSS2 = {
//     backgroundColor : 'green',
// };


class Counter extends React.Component {

    render(){
        return(
            <div className='card'>

            <div className='container'>
                <div><h1>Counter</h1></div>
            <div className='row'>
                <button className='btn1'  onClick={ this.props.substractFunction
                
            }>-</button>
            <h2>{this.props.count}</h2>
            <button className='btn2'  onClick={this.props.addFunction
            
            }>+</button>

                </div>
            </div>
            </div>
        )
    }
}



export default Counter;