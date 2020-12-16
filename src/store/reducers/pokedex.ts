import { Reducer } from "redux";

import { PokedexTypes, PokedexState } from "../types/pokedex";

const INITIAL_STATE: PokedexState = {
	valor: "",
};

const pokedexReducer: Reducer<PokedexState> = (
	state = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case PokedexTypes.test:
			return { ...state, valor: "exemploRedux" };
		default:
			return state;
	}
};

export default pokedexReducer;
