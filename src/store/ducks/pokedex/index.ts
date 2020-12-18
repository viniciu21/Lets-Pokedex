import { Reducer } from "redux";

import { PokedexTypes, PokedexState } from "./types";

const INITIAL_STATE: PokedexState = {
	pokemons: [],
	loading: true,
	filtredPokemons: [],
	types: [],
	staredPokemons: [],
	pages: 0,
};

const pokedexReducer: Reducer<PokedexState> = (
	state = INITIAL_STATE,
	action
) => {
	switch (action.type) {
		case PokedexTypes.getDataPokemonsStart:
			return { ...state, loading: true };
		case PokedexTypes.getDataPokemonsSuccess:
			return { ...state, pokemons: action.payload,filtredPokemons: action.payload,  loading: false };
		case PokedexTypes.makePokemonStared:
			return {
				...state,
				pokemons: action.payload,
			};
		case PokedexTypes.setFiltredPokemons:
			return { ...state, filtredPokemons: action.payload };
		case PokedexTypes.setStaredPokemons:
			return {...state, staredPokemons: action.payload };
		case PokedexTypes.updatePagination:
			return {...state, pages: action.payload};
		default:
			return state;
	}
};

export default pokedexReducer;
