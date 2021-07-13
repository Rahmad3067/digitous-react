import React from 'react';

const myCSS1 = {
    backgroundColor : 'red',
};
const myCSS2 = {
    backgroundColor : 'green',
};


class Counter extends React.Component {


    // constructor () {
    //     super();
    //       this.state = {
    //         count: 0,
    //       }
    
    //   }

    render(){
        return(
            <div className='card'>

            <div className='container'>
                <div><h1>Counter</h1></div>
            <div className='row'>
                <button className='btn1' style={myCSS1} onClick={ this.props.subtractFunction
                
            }>-</button>
            <h2>{this.props.count}</h2>
            <button className='btn2' style={myCSS2} onClick={this.props.addFunction
            
            }>+</button>

                </div>
            </div>
            </div>
        )
    }
}



export default Counter;