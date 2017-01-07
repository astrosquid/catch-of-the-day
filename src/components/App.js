import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
	constructor() {
		super();

		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);

		// use getinitialState for non-es6 implementations
		this.state = {
			fishes: {},
			order: {}
		};
	}

	addFish(fish) {
		// update the state...
		const fishes = {...this.state.fishes}; // duplicate your state for performance and safety
		// add in our new fish
		const timestamp = Date.now(); // use timestamp for a unique identifier
		fishes[`fish-${timestamp}`] = fish; // add in our new fish to the copy of our state
		// set state
		this.setState({ fishes }); // inform react that we've made changes to this part of our state
	}

	loadSamples() {
		this.setState({
			fishes: sampleFishes
		})
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{
							Object
								.keys(this.state.fishes)
								.map(key => <Fish key={key} details={this.state.fishes[key]} />)
						}
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
			</div>
      )
	}
}

export default App;