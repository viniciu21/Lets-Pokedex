import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexGrow: 1,
			alignContent: "center",
			justifyContent: "center",
		},
	})
);

const Loading = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				src="https://raw.githubusercontent.com/figormartins/pokemon/master/frontend/src/assets/loading.gif"
				alt="Loading"
			/>
		</div>
	);
};

export default Loading;
