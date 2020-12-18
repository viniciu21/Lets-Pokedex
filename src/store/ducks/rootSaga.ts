import { all, takeLatest } from "redux-saga/effects";
import { PokedexTypes } from "./pokedex/types";
import { getInformationPokemons } from "./pokedex/saga";

export default function* rootSaga() {
	return yield all([
		takeLatest(PokedexTypes.getDataPokemonsStart, getInformationPokemons),
	]);
}
