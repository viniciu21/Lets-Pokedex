import React from "react";
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
} from "@material-ui/core";
import StarRateSharpIcon from "@material-ui/icons/StarRateSharp";

import { Pokemon } from "../store/types/pokedex";

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
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<Card className={classes.root} elevation={5}>
				<CardActionArea>
					<CardMedia
						image={pokemon.imgUrl}
						component="img"
						alt={pokemon.name}
						height="200"
						title={pokemon.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{`Pokemon ${pokemon.id} - ${pokemon.name}`}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{`This pokemon of type ${pokemon.types.map(
								(type) => `,${type}`
							)} and height ${pokemon.height} cm and weight of ${
								pokemon.weight
							}, and he is nice.`}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						{pokemon.stared ? "Unfavorite" : "Favorite"}
					</Button>
					<Button size="small" color="primary" disabled>
						Learn More
					</Button>
					<div className={classes.root} />
					{pokemon.stared && <StarRateSharpIcon />}
				</CardActions>
			</Card>
		</Paper>
	);
};

export default CardPoke;
