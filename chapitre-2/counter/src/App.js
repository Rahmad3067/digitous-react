import React from "react";
import './App.css';
import Counter from './components/Counter';
import './components/Counter.css'





function addFunction(plus) {
  this.setState(plus =>{
    if (plus.count > 0) {
      return  {count: plus.count-1}
    }

  })
  

}







class App extends React.Component {

  constructor () {
    super();
      this.state = {
        count: 0,
      }

  };

   addFunction=()=> {
    this.setState({
      count: this.state.count+1
       
  
    })
    
  
  }
  subtractFunction=()=> {
    if(this.state.count >0 ) {
      this.setState({
        count: this.state.count-1
         
    
      })

    }
    
    
  
  }



  
  render() {
    return(
      <div>
        <Counter count={this.state.count} addFunction={this.addFunction} subtractFunction = {this.subtractFunction}
        />
      </div>
    )
  }
  
}

  




  



export default App;


