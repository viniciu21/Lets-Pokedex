import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
	Avatar,
	Grid,
	IconButton,
	InputBase,
	Paper,
	Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ApplicationState } from "../../store/index";
import _ from "lodash";
import pokedex from "../../assets/pokedex.png";
import { setFiltredPokemons } from "../../store/ducks/pokedex/actions";
import pokebolaPequena from "../../assets/pokebolaPequena.png";
import Pagination from "../Pagination/index";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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
	})
);

interface SearchProps {
	stared?: boolean;
}

const Search: React.FC<SearchProps> = ({ stared }) => {
	const classes = useStyles();
	const [valueInput, setValueInput] = useState<string>("");
	const dispatch = useDispatch();

	const { pokemons, staredPokemons } = useSelector<
		ApplicationState,
		ApplicationState["pokedexReducer"]
	>((state) => state.pokedexReducer);

	const handleFilterPokemons = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setValueInput(e.target.value);
		if (stared) {
			const pokemonsFiltratedStar = staredPokemons.filter((pokemon) =>
				_.includes(pokemon.name, e.target.value)
			);
			dispatch(setFiltredPokemons(pokemonsFiltratedStar));
		} else {
			const pokemonsFiltrated = pokemons.filter((pokemon) =>
				_.includes(pokemon.name, e.target.value)
			);
			dispatch(setFiltredPokemons(pokemonsFiltrated));
		}
	};

	return (
		<Grid
			container
			justify="center"
			className={classes.inputArea}
			alignItems="center"
			direction="column"
		>
			<div className={classes.title}>
				<Typography component="h4" variant="h4" color="inherit">
					PokeDex
				</Typography>
				<Avatar src={pokedex} className={classes.large} />
			</div>
			<Paper className={classes.paperArea}>
				<Avatar src={pokebolaPequena} className={classes.pokebol} />
				<InputBase
					placeholder="Search your best pokemon"
					inputProps={{ "aria-label": "Search your best pokemon" }}
					value={valueInput}
					onChange={(e) => handleFilterPokemons(e)}
				/>
				<IconButton className={classes.iconButton}>
					<SearchIcon />
				</IconButton>
				{!stared && <Pagination />}
			</Paper>
		</Grid>
	);
};

export default Search;
