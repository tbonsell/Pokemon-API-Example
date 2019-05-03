import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2/';
const API_POKEMON = 'pokemon';

let api = null;

function getApi() {
    if(api) return api;

    return (api = axios.create({
        baseURL: API_BASE_URL,
        responseType: 'json'
    }));
}

function get(url) {
    return getApi().get(url);
}

export function getPokemon(page) {
    return get(`${API_POKEMON}/?offset=${20 * page - 20}&limit20`);
}
