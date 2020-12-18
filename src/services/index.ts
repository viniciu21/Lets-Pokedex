import axios from "axios";

const baseURl = "https://pokeapi.co/api/v2/";

export default axios.create({ baseURL: baseURl });
