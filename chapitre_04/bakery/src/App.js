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
      items: []
    }
  }
  addItem=(name, price) => {
    let item2 = this.state.items
    item2.push({name: 'xx', price: 'xx'})
    this.setState({items: item2 })
    console.log(this.state.items)
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
      <div className="app">
        
        <Button children="Add" onClick={this.selectAdd} />
        <Button children="Cart" onClick={this.selectCart} />
        <Button children="Pay" onClick={this.selectPay} />
        {this.renderTab()}
      </div>
      
      
    )
  }
}

export default App;