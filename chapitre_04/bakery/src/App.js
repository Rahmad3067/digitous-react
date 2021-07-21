import React from "react"
import './App.css';
import Button from "./components/Button";
import Add from "./components/Add";
import Cart from "./components/Cart";
import Pay from "./components/Pay";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: [],
      price: 0,
    }
  }





  addItem=(item) => {
    let item2 = this.state.items
    item2.push(item)
    this.setState({items: item2 })
  }

  

  


  selectAdd =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "add"
      };
    });
  }
  selectCart =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "cart"
      };
    });
  }
  selectPay =()=> {
    this.setState((prevState) => {
      return {
        ...prevState,
        activeTab: "pay"
      };
    });
  }
  renderTab () {
    if (this.state.activeTab === "add"){
      return (
        <Add addItem={this.addItem}/>
      )
    }
    if (this.state.activeTab === "cart"){
      return (
        <Cart items={this.state.items} />
      )
    }
    if (this.state.activeTab === "pay"){
      return (
        <Pay />
      )
    }
  }
  render () {
    return (
      <div className="container mt-5 ml-5">
        <div className='mb-3'>

        <Button isSelected={this.state.activeTab === 'add'} children="Add" onClick={this.selectAdd} />
        <Button isSelected={this.state.activeTab === 'cart'} children="Cart" onClick={this.selectCart} />
        <Button isSelected={this.state.activeTab === 'pay'} children="Pay" onClick={this.selectPay} />
        </div>
        

        {this.renderTab()}
        
        
      </div>
      
      
    )
  }
}

export default App;