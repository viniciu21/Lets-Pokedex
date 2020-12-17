import React from "react";
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
import CardPoke from "../components/CardPoke";
import pokebolaPequena from "../assets/pokebolaPequena.png";
import pokedex from "../assets/pokedex.png";
import { Pokemon } from "../store/types/pokedex";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		cardArea: {
			padding: theme.spacing(5),
		},
		inputArea: {
			paddingTop: theme.spacing(2),
		},
		paperArea: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			// width: 400,
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

const Pokedex = () => {
	const classes = useStyles();
	const pokemonTest: Pokemon = {
		height: 12,
		id: 10,
		name: "pikachu",
		imgUrl:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
		stared: false,
		types: ["aqua", "normal"],
		weight: 121,
	};
	return (
		<div className={classes.root}>
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
					/>
					<IconButton className={classes.iconButton}>
						<SearchIcon />
					</IconButton>
				</Paper>
			</Grid>
			<div className={classes.cardArea}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={3} sm={6}>
						<CardPoke pokemon={pokemonTest} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Pokedex;
