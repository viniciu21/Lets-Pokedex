import { all, call, put } from "redux-saga/effects";
import { getPokemonsInitial } from "../../../services/pokemon";
import axios, { AxiosResponse } from "axios";
import { Pokemon } from "./types";
import { getDataPokemonsSuccess } from "./actions";

interface pokemonResultFecth {
	nome: string;
	url: string;
}

interface pokemonType {
	name: string;
}

interface typeInformation {
	type: pokemonType;
}

export function* getInformationPokemons(data: any) {
	try {
		const response = yield call(getPokemonsInitial, data.payload);

		const resultsOfDetailPokemons = yield all(
			response.data.results.map((pokemon: pokemonResultFecth) =>
				call(axios.get, pokemon.url)
			)
		);

		const pokemonsFormater: Pokemon[] = resultsOfDetailPokemons.map(
			(detailPokemon: AxiosResponse) => {
				const pokemon: Pokemon = {
					id: detailPokemon.data.id,
					name: detailPokemon.data.name,
					height: detailPokemon.data.height,
					stared: false,
					weight: detailPokemon.data.weight,
					imgUrl: `https://pokeres.bastionbot.org/images/pokemon/${detailPokemon.data.id}.png`,
					types: detailPokemon.data.types.map(
						(typeElement: typeInformation) => typeElement.type.name
					),
				};
				return pokemon;
			}
		);
		yield put(getDataPokemonsSuccess(pokemonsFormater));
	} catch (err) {
		console.log(err);
	}
}
