import { action } from "typesafe-actions";
import { PokedexTypes, Pokemon } from "./types";

export const getDataPokemonsStart = (data: number) =>
	action(PokedexTypes.getDataPokemonsStart, data);
export const getDataPokemonsSuccess = (data: Pokemon[]) =>
	action(PokedexTypes.getDataPokemonsSuccess, data);
export const getDataPokemonsFailure = () =>
	action(PokedexTypes.getDataPokemonsFailure);
export const makePokemonStared = (data: Pokemon[]) =>
	action(PokedexTypes.makePokemonStared, data);
export const setFiltredPokemons = (data: Pokemon[]) =>
	action(PokedexTypes.setFiltredPokemons, data);
export const setStaredPokemons = (data: Pokemon[]) => {
	return action(PokedexTypes.setStaredPokemons, data);
}
export const updatePagination = (data: number) => action(PokedexTypes.updatePagination, data);
