import React from "react";
import Steps from './components/Steps'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const tempMin = "-20"
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className = "container-fluid">
        <h1 className="text-primary">Hello !</h1>
        <div className= "row">
        <p>Heart : {heartMin} </p>
          <p>temperature : {tempMin} </p>
          <p>Steps : {stepsMin} </p>
          <Steps />
        </div>
      </div>
    );
  }
}

export default App;