import React, {Component} from 'react';
import {getPokemon} from '../../api';
import List from './list';

import './index.css';

class Home extends Component {

    state = {
        pokemon: [],
        page: 1
    }

    getData = (page) => {
        getPokemon(page).then(res => {
            // duplicate the array held in the state
            let pokemon = [...this.state.pokemon];

            // map pokemon data
            const mappedPokemon = res.data.results.map(obj => {
                obj.id = Number(obj.url.substring(34, obj.url.length - 1));
                obj.favorite = false;
                return obj;
            });

            // merge the new data onto the cloned array
            pokemon.push(...mappedPokemon);

            // update the state
            this.setState({
                pokemon,
                page
            });
        })
    }

    loadMore = () => {
        // load the next grouping of data
        this.getData(this.state.page + 1);
    }

    componentDidMount() {
        // first load, grab the first grouping of data only
        this.getData(1);
    }

    render() {
        return (
            <div className="home">
                <h2>Home</h2>
                <List
                    pokemon={this.state.pokemon}
                    loadMore={this.loadMore}
                />
            </div>
        );
    }
}

export default Home;
