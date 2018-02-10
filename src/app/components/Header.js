import React from "react";

export class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-defult">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><a href="#Home">Home</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}