import { all, takeLatest } from "redux-saga/effects";
import { PokedexTypes } from "../types/pokedex";
import { getInformationPokemons } from "./pokedex";

export default function* rootSaga() {
	return yield all([
		takeLatest(PokedexTypes.getDataPokemonsStart, getInformationPokemons),
	]);
}
