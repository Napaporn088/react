import React from 'react';
class Calculator extends React.Component {
	constructor(){
			super();
			this.state = {X : "", A : ""};
		}
		setA(AA){
			const aa = AA.target.value;
			this.setState({A : aa});
		}
		setX(BB){
			const xx = BB.target.value;
			this.setState({X : xx});
		}

	render(){

		
		return(
			<div>
				<div>A : <input onChange={this.setA.bind(this)}/></div>	
				<div>B : <input onChange={this.setX.bind(this)}/></div>
				<div>Sum = {this.state.A + this.state.X}</div>			


				</div>
			);
	}
}
export default Calculator;