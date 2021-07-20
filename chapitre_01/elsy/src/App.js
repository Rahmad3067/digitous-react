import React from "react";
import Box from './components/Box';
import './styles/bootstrap.css';
import './styles/global.css';
import './App.css';



const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -120,
      steps: 3000,
    }
  }
  onHeartChange=(e) => {
    this.setState({heart: e.target.value})
    this.calculateWater();
  }
  onStepsChange=(e) => {
    this.setState({steps: e.target.value})
    this.calculateWater();
  }
  onTemperatureChange=(e) => {

    this.setState({temperature: e.target.value})
    this.calculateWater();

  }

  calculateWater =()=> {
    let drinkWater = 1.5
    let x = 0
    let y = 0
    let z = 0
    if (this.state.temperature > 20) {
      let multiplier = this.state.temperature - 20
      x = multiplier*0.02
    }
    if (this.state.heart > 120) {
      let multiplier = this.state.heart - 120
      y = multiplier*0.0008
    }
    if (this.state.steps > 10000) {
      let multiplier = this.state.steps - 10000
      z = multiplier*0.00002
    }
    drinkWater = drinkWater + x + y + z
    this.setState((prevState) => {
      return {
        ...prevState,
        water: drinkWater
      };
    });
  }
  render() {
    return (
      <div className = "container-fluid">
        <h1 className="text-primary">Hello !</h1>
        <div className= "row">
        
          <Box icon='local_drink' color='#3A85FF' value={this.state.water} unit='L' onChange={this.calculateWater} />
          <Box icon="directions_walk" color="black" value={this.state.steps} unit='steps' min={stepsMin} max={stepsMax} onChange={this.onStepsChange} />
          <Box icon="favorite" color="red" value={this.state.heart} unit='bpm' min={heartMin} max={heartMax} onChange={this.onHeartChange}/>
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit='°C' min={tempMin} max={tempMax} onChange={this.onTemperatureChange} />
        </div>
      </div>
    );
  }
}

export default App;