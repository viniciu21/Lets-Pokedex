export enum PokedexTypes {
	getDataPokemonsStart = "@pokedex/getDataPokemonsStart",
	getDataPokemonsSuccess = "@pokedex/getDataPokemonsSuccess",
	getDataPokemonsFailure = "@pokedex/getDataPokemonsFailure",
	makePokemonStared = "@pokedex/makePokemonStared",
	setFiltredPokemons = "@pokedex/setFiltredPokemons",
	setStaredPokemons = "@pokedex/setStaredPokemons",
	updatePagination = "@pokedex/updatePagination",
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
