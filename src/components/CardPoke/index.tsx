import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { makePokemonStared, setStaredPokemons } from "../../store/ducks/pokedex/actions";
import { Pokemon } from "../../store/ducks/pokedex/types";
import { ApplicationState } from "../../store";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Paper,
	Chip,
} from "@material-ui/core";
import StarRateSharpIcon from "@material-ui/icons/StarRateSharp";

import './BgColor.css';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			border: "10",
		},
	})
);

interface CardPokeProps {
	pokemon: Pokemon;
}

const CardPoke: React.FC<CardPokeProps> = ({ pokemon }) => {
	const dispatch = useDispatch();
	const pokedexState = useSelector<
		ApplicationState,
		ApplicationState["pokedexReducer"]
	>((state) => state.pokedexReducer);

	const classes = useStyles();

	//Make a pokemon stared and put him in localStorage

	const handleStared = () => {
		const pokemonStared:Pokemon = {...pokemon, stared: true};
		let existData = localStorage.getItem("pokemonsStared");
		let pokemonToLocalStorage = existData ? [...JSON.parse(existData)] : [];
		!(pokemonToLocalStorage.find(poke => poke.id === pokemonStared.id)) && pokemonToLocalStorage.push(pokemonStared);
		localStorage.setItem("pokemonsStared", JSON.stringify(pokemonToLocalStorage));

		const pokemonsUpdated: Pokemon[] = pokedexState.pokemons.map((poke) => {
			if (poke.id === pokemonStared.id) return pokemonStared;
			return poke;
		});
		const pokemonsStaredReducer: Pokemon[] = pokemonsUpdated.filter(poke => poke.stared === true);
		dispatch(setStaredPokemons(pokemonsStaredReducer));
		dispatch(makePokemonStared(pokemonsUpdated));
	};

	//Make a pokemon unStared and update the localStorage

	const handleUnStared = () => {
		const pokemonUnStared:Pokemon = {...pokemon, stared: false};

		let existData = localStorage.getItem("pokemonsStared");

		let pokemonToLocalStorage = existData ? [...JSON.parse(existData)] : [];

		const pokemonsFiltred = pokemonToLocalStorage.filter(poke => poke.id !== pokemonUnStared.id);

		localStorage.setItem("pokemonsStared", JSON.stringify(pokemonsFiltred));

		const pokemonsUpdated: Pokemon[] = pokedexState.pokemons.map((poke) => {
			if (poke.id === pokemon.id) return { ...poke, stared: false };
			return poke;
		});

		dispatch(setStaredPokemons(pokemonsUpdated));
		dispatch(makePokemonStared(pokemonsUpdated));
	};

	return (
		<Paper className={classes.paper}>
			<Card className={classes.root} elevation={5}>
				<CardActionArea>
					<CardMedia
						image={pokemon.imgUrl}
						component="img"
						className={`${pokemon.types[0]}`}
						alt={pokemon.name}
						title={pokemon.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{`Pokemon ${pokemon.id} - ${pokemon.name}`}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="h6">
							This is {pokemon.name}, he is{" "}
							{pokemon.types.map((type) => (
								<Chip label={type} key={type} color="primary" />
							))}{" "}
							types, he is so friendly!!!!.
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary" onClick={handleStared}>
						Favorite
					</Button>
					<Button size="small" color="primary" onClick={handleUnStared}>
						UnFavorite
					</Button>
					<div className={classes.root} />
					{pokemon.stared && <StarRateSharpIcon />}
				</CardActions>
			</Card>
		</Paper>
	);
};

export default CardPoke;
