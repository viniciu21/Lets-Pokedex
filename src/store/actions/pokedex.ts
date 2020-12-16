import { action } from "typesafe-actions";
import { PokedexTypes } from "../types/pokedex";

export const test = () => action(PokedexTypes.test);
