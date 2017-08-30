import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.component';
import Footer from './Components/Footer';
import Calculator from './Components/Calculator';
class App extends Component {
  
	constructor(){
		super();
		this.state = {name : "Napaporn", age : 20};
	}
  onClick(){
    this.setState({name : "Guide"});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({age : age});
  }

	getVal(){
		return "getVal";

	}


  render() {
    

  	const myname =  "Guide";
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/*<p> Adding text for test the fist React application. </p>*/}


        <div> <Header /> </div>
        <div> My name is : {this.state.name} </div>
        <div> Age : {this.state.age} </div>
        <button onClick= {this.onClick.bind(this)}>Click Me Please </button>
        <input onChange={this.setAge.bind(this)}/>

      <Header title = "Test title" name = "Dear" /> 
      <Header title = {this.state.name} />

      <div><Calculator /></div> 

</div>
    );
  }
}

//const fn = (ใส่ค่าตัวแปร) => {} การเขียนฟังก์ชั่น

export default App;
