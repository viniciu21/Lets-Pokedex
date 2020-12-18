import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout';
import { Provider } from 'react-redux';
import store from '../store';

it("Shoud be possibel render a component layout", ()=> {
	const component = shallow(
		<Provider store={store}>
			<Layout ></Layout>
			</Provider>	);
	expect(component).toMatchSnapshot();
})
