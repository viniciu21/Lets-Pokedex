import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataPokemonsStart } from "../store/ducks/pokedex/actions";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
import {ApplicationState} from '../store';

const Layout = () => {

	const {pages} = useSelector<ApplicationState, ApplicationState["pokedexReducer"]>((state) => state.pokedexReducer)
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDataPokemonsStart(pages));
	}, [pages, dispatch])
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<BrowserRouter>
				<CssBaseline />
				<Header />
				<Routes />
			</BrowserRouter>
		</div>
	);
};

export default Layout;
