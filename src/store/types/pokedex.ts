export enum PokedexTypes {
	test = "test",
}

export interface PokedexState {
	pokemons: Pokemon[];
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
