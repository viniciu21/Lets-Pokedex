import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Grid, CardMedia } from "@material-ui/core";
import CardPoke from "../../components/CardPoke/index";
import { ApplicationState } from "../../store/index";
import _ from "lodash";
import Loading from "../../components/Loading/index";
import { setFiltredPokemons } from "../../store/ducks/pokedex/actions";
import Search from "../../components/Search/index";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			flexGrow: 1,
			justifyContent: "center",
			alignItems: "center",
		},
		cardArea: {
			padding: theme.spacing(5),
			width: "100%"
		},
		inputArea: {
			paddingTop: theme.spacing(2),
		},
		paperArea: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
		},
		iconButton: {
			padding: theme.spacing(2),
		},
		pokebol: {
			paddingRight: theme.spacing(1),
		},
		title: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		large: {
			width: theme.spacing(7),
			height: theme.spacing(7),
		},
		button: {
			padding: theme.spacing(2),
			marginBottom: theme.spacing(3),
		},
		grid: {
			minWidth: "400px",
		}
	})
);

const Pokedex = () => {
	const classes = useStyles();

	const dispatch = useDispatch();

	const { pokemons, filtredPokemons, loading } = useSelector<
		ApplicationState,
		ApplicationState["pokedexReducer"]
	>((state) => state.pokedexReducer);

	//Get pokemons from localStore and filter pokemons recived by redux

	useEffect(() => {
		let existItems = localStorage.getItem("pokemonsStared");
		let dataLocalStorage = existItems ? [...JSON.parse(existItems)] : [];

		const pokemonsStaredByStorage = pokemons.map(poke => {
			const pokeStaredInLocal = dataLocalStorage.find(pokex => pokex.id === poke.id);
			if(pokeStaredInLocal) {
				return pokeStaredInLocal;
			}
 			return poke;
		})

		dispatch(setFiltredPokemons(pokemonsStaredByStorage));
	}, [pokemons, dispatch]);

	return (
		<div className={classes.root}>
			<Search />
			{loading ? (
				<Loading />
			) : (
				<div className={classes.cardArea}>
					<Grid container spacing={3} justify="center" alignItems="center" className={classes.grid}>
						{_.isEmpty(filtredPokemons) ? (
							<CardMedia
								component="img"
								image="https://raw.githubusercontent.com/figormartins/pokemon/master/frontend/src/assets/not-found.png"
								alt="no search"
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

export default Pokedex;
