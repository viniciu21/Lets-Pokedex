import api from "./index";

export const getPokemonsInitial = async (limit: number) => {
	return await api.get(`pokemon?limit=20&offset=${limit * 20}`);
};
