import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { shallow } from 'enzyme';
import { BrowserRouter } from "react-router-dom";
import PokedexStared from '../pages/PokedexStared';

it("Should to be render a Pokedex page", () => {
	const component = shallow(
	<Provider store={store}>
		<BrowserRouter>
			<PokedexStared/>
		</BrowserRouter>
	</Provider>
	)
	const contains = component.contains(<PokedexStared/>);
	expect(contains).toBe(true);
})
