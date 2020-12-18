import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { shallow } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import Pokedex from '../pages/Pokedex';

it("Should to be render a Pokedex page", () => {
	const component = shallow(
	<Provider store={store}>
		<BrowserRouter>
			<Pokedex/>
		</BrowserRouter>
	</Provider>
	)
	expect(component).toMatchSnapshot();
})
