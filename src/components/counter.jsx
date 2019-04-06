import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag1", "tag2", "tag3"]
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;

		return (
			<ul>
				{this.state.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	render() {
		// compiles to React.createElement
		return (
			//react.fragment seems to be like template in vue, prevents unnecessary additional elements
			<div>
				{/* this works because javascript does need the two sides to be booleans, the second part is truthy */}
				{/* and js returns the second operand */}
				{this.state.tags.length === 0 && "Please Create a New Tag"}
				{this.renderTags()}
			</div>
		);
	}
}

export default Counter;
