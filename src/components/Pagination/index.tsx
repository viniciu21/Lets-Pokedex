import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import { updatePagination } from "../../store/ducks/pokedex/actions";
import { ApplicationState } from "../../store";

const Pagination = () => {
	const {pages} = useSelector<ApplicationState, ApplicationState["pokedexReducer"]>((state) => state.pokedexReducer);

	const dispatch = useDispatch();

	const goPrevious = () => {
		const prevPage = pages - 1;
		dispatch(updatePagination(prevPage));
	};

	const goNext = () => {
		const prevPage = pages + 1;
		dispatch(updatePagination(prevPage));
	};

	return (
		<Grid>
			{pages !== 0 && (
				<Button onClick={() => goPrevious()}>Decrement</Button>
			)}
			<Button onClick={() => goNext()}>Increment</Button>
		</Grid>
	);
};

export default Pagination;
