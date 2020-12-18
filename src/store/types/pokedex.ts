export enum PokedexTypes {
	getDataPokemonsStart = "getDataPokemonsStart",
	getDataPokemonsSuccess = "getDataPokemonsSuccess",
	getDataPokemonsFailure = "getDataPokemonsFailure",
	makePokemonStared = "makePokemonStared",
	setFiltredPokemons = "setFiltredPokemons",
	setStaredPokemons = "setStaredPokemons",
	updatePagination = "updatePagination",
}

export interface PokedexState {
	pokemons: Pokemon[];
	loading: boolean;
	filtredPokemons: Pokemon[];
	types: string[];
	staredPokemons: Pokemon[];
	pages: number;
}

export interface Pokemon {
	id: number;
	name: string;
	types: string[];
	imgUrl: string;
	height: number;
	weight: number;
	stared: boolean;
}
