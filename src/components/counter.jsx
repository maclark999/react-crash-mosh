import React, { Component } from "react";

class Counter extends Component {
	// state = {
	// 	value: this.props.counter.value
	// };

	render() {
		const { onDelete, onIncrement, counter} = this.props;
		// compiles to React.createElement
		return (
			//react.fragment seems to be like template in vue, prevents unnecessary additional elements
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					// needs to be an arrow function because passing an argument
					onClick={() => onIncrement(counter)}
					className="btn btn-secondary btn-sm">
					Increment
				</button>
				<button
					onClick={() => onDelete(counter.id)}
					className="btn btn-danger btn-sm m-2">
					Delete
				</button>
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
	// handleIncrement = product => {
	// 	//have to explicitly tell react what has changed
	// 	this.setState({ value: this.state.value + 1});
	// }

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		//jsx expressions are like normal js objects
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
