import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex/index";
import PokedexStared from "./pages/PokedexStared/index";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Pokedex} />
			<Route exact path="/stared" component={PokedexStared} />
		</Switch>
	);
};

export default Routes;
