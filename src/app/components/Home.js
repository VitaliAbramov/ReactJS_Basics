import React from "react";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<p>In a Component !</p>
				<p>User name is {this.props.user.name}</p>
				<p>User age is {this.props.user.age}</p>
				<p>User hobbies are: </p>
				<ul>
					{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
				</ul>
			</div>
		);
	}
}

//Home.propTypes = {
//	user: React.PropTypes.object
//};