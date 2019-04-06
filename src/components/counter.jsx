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
					onClick={() => this.handleIncrement({id: 1})}
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

	// //this is called before mounted for the component
	// constructor() {
	// 	super();
	// 	// https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
	// https://medium.com/@nikolalsvk/loosing-bind-this-in-react-8637ebf372cf
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	//apparently this may still be the experimental version of setting the this context using .bind like in above
	// this means the method resides on each instance of the class and not on the prototype and testing may be harder
	//I still think it looks cleaner this way though, so I'm going with it
	handleIncrement = product => {
		//have to explicitly tell react what has changed
		this.setState({ count: this.state.count + 1});
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
