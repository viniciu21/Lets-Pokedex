import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokedexStared from "./pages/PokedexStared";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Pokedex} />
			<Route exact path="/stared" component={PokedexStared} />
		</Switch>
	);
};

export default Routes;
