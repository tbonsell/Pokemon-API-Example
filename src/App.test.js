import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Home, Error} from './components';
import { getEndpoint } from './api';

const mockData = {
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        }
    ]
}

it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('api successfully pulls single data item', () => {
    getEndpoint('https://pokeapi.co/api/v2/pokemon/?limit=1')
        .then(res => {
            expect(res).toEqual(mockData);
        });
});
