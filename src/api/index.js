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

/**
 * pulls a set number of items from a fixed enpoint
 * @param  {[Number]} page : page number to request
 * @return promise
 */
export function getPokemon(page) {
    return get(`${API_POKEMON}/?offset=${20 * page - 20}&limit20`);
}

/**
 * generic method to retrieve data from any enpoint
 * @param  {[String]} endpoint : (ie: pokemon/1/, type/3/, ability/4/ etc)
 * @return promise
 */
export function getEndpoint(endpoint) {
    return get(endpoint);
}
