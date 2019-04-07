import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Counters from "./components/counters";


class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4},
			{ id: 2, value: 0},
			{ id: 3, value: 0},
			{ id: 4, value: 0},
		]
	}

	handleIncrement = counter => {
		//make a copy of state
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		//copy the counters version of counter, so doesn't mutate state directly
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});
	};

	handleReset = () => {
		const counters = this.state.counters.map(counter => {
			counter.value = 0;
			return counter;
		});
		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(counter => counter.id !== counterId);
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
