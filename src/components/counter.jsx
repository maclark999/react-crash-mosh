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
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
				{/* this works because javascript does need the two sides to be booleans, the second part is truthy */}
				{/* and js returns the second operand */}
				{this.state.tags.length === 0 && "Please Create a New Tag"}
				{this.renderTags()}
			</div>
		);
	}

	handleIncrement() {
		console.log("button clicked");
	}

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
