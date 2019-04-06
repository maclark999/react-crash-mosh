import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4},
			{ id: 2, value: 0},
			{ id: 3, value: 0},
			{ id: 4, value: 0},
		]
	}
	render() { 
		return (
		<div>{this.state.counters.map(counter =>
			//this sets props value and selected on the counter component
			<Counter key={counter.id} value={counter.value}>
				{/* this will show up as children in the ocunter component, obviously this is a simplified
				version of this, but how you can pass stuff to child */}
				<h4>Counter #{counter.id}</h4>
			</Counter>
			)}
		</div>
		);
	}
}
 
export default Counters;