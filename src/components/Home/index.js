import React, {Component} from 'react';
import {getPokemon} from '../../api';
import _ from 'lodash';
import List from './list';
import ToolBar from './toolbar';

import './index.css';

class Home extends Component {

    state = {
        pokemon: [],
        favorites: [],
        page: 1,
        sortFavorite: false
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

    toggleFavorite = (obj) => {
        const index = _.findIndex(this.state.pokemon, {id: obj.id});

        let pokemon = [...this.state.pokemon];

        pokemon[index].favorite = !obj.favorite;

        this.setState({
            pokemon,
            favorites: this.state.pokemon.filter(poke => poke.favorite === true)
        });
    }

    sortFavorite = () => {
        this.setState({
            sortFavorite: !this.state.sortFavorite
        });
    }

    sortData = (dir) => {
        let pokemon = [...this.state.pokemon];
        let favorites = [...this.state.favorites];

        if(this.state.sortFavorite) {
            favorites = _.orderBy(favorites, ['name'], [dir]);
        } else {
            pokemon = _.orderBy(pokemon, ['name'], [dir]);
        }

        this.setState({
            pokemon,
            favorites
        });
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
                <ToolBar
                    sortData={this.sortData}
                    sortFavorite={this.sortFavorite}
                />
                <List
                    pokemon={this.state.sortFavorite ? this.state.favorites : this.state.pokemon}
                    loadMore={this.loadMore}
                    toggleFavorite={this.toggleFavorite}
                />
            </div>
        );
    }
}

export default Home;
