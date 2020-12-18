import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CardPoke from "../../components/CardPoke/index";
import { ApplicationState } from "../../store/index";
import _ from "lodash";
import Loading from "../../components/Loading/index";
import Search from "../../components/Search/index";
import { setFiltredPokemons, setStaredPokemons } from "../../store/ducks/pokedex/actions";
import { Pokemon } from "../../store/ducks/pokedex/types";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		cardArea: {
			padding: theme.spacing(5),
		},
	})
);

const PokedexStared = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const { pokemons, filtredPokemons, loading } = useSelector<
		ApplicationState,
		ApplicationState["pokedexReducer"]
	>((state) => state.pokedexReducer);

	useEffect(() => {
		const dataLocalStorage = localStorage.getItem("pokemonsStared");
		const pokemonsStared: Pokemon[]= dataLocalStorage && JSON.parse(dataLocalStorage);
		dispatch(setStaredPokemons(pokemonsStared));
		dispatch(setFiltredPokemons(pokemonsStared));
	}, [pokemons, dispatch]);

	return (
		<div className={classes.root}>
			<Search stared />
			{loading ? (
				<Loading />
			) : (
				<div className={classes.cardArea}>
					<Grid container spacing={3} justify="center" alignItems="center">
						{_.isEmpty(filtredPokemons) ? (
							<img
								src="https://raw.githubusercontent.com/figormartins/pokemon/master/frontend/src/assets/not-found.png"
								alt="pokemon-not-found"
							/>
						) : (
							filtredPokemons.map((pokemon) => {
								return (
									<Grid item xs={12} md={3} sm={6} key={pokemon.id}>
										<CardPoke pokemon={pokemon} />
									</Grid>
								);
							})
						)}
					</Grid>
				</div>
			)}
		</div>
	);
};

export default PokedexStared;
