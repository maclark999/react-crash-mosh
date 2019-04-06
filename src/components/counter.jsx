import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag1", "tag2", "tag3"]
	};

	render() {
		// compiles to React.createElement
		return (
			//react.fragment seems to be like template in vue, prevents unnecessary additional elements
			<React.Fragment>
				<ul>
					{this.state.tags.map(tag => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		//jsx expressions are like normal js objects
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
