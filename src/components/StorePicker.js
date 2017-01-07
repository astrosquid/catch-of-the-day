import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	goToStore(event) {
		event.preventDefault();
		console.log('You changed the URL.');
		// first grab the text from the box
		// how'd we get "this"? see comment in render()
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`);
		// then transition from / to /store/:storeId 
		this.context.router.transitionTo(`/store/${storeId}`)
	}

	render() {
		// for some reason, comments in JSX are done with {/* xxx yyy zzz */}. so that's fun.
		return (
		// {/* "this" does not reference StorePicker in goToStore() unless we bind the method to the component either in the constructor or in our call below */}
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please Enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="submit">Visit Store →</button>
			</form>
      )
	}
}

// we need to expose the router (which is the root component of our application) from above to this component if we want to use it later, in goToStore()
StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
