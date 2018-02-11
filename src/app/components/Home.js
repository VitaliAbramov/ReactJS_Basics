import React from "react";

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age: props.initialAge,
			status: 0
		};
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age+3
		});
	}

	render() {
		return (
			<div>
				<p>In a Component !</p>
				<p>User name is {this.props.name}, and he is {this.state.age} years old.</p>
				<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make it!</button>
			</div>
		);
	}
}
Home.propTypes = {
	//name: React.PropTypes.string,
	//age: React.PropTypes.number
};