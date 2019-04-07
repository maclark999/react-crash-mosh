import React, { Component } from 'react';

class Navbar extends Component {
	render() { 
		return (
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">Total Counters:
					<span className="badge badge-pill badge-secondary m-2">
						{this.props.totalCounters}
					</span>
				</span>
			</nav>
		);
	}
}
 
export default Navbar;