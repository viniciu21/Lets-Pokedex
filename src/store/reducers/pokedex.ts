import { Reducer } from "redux";

import { PokedexTypes, PokedexState } from "../types/pokedex";

const INITIAL_STATE: PokedexState = {
	pokemons: [],
};

const pokedexReducer: Reducer<PokedexState> = (
	state = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case PokedexTypes.test:
			return { ...state };
		default:
			return state;
	}
};

export default pokedexReducer;
