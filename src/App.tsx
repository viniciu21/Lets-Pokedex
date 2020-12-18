import React from "react";
import { Provider } from "react-redux";
import Layout from "./Layout";

import store from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	);
};

export default App;
