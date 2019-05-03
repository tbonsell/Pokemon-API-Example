import React, {Component} from 'react';
import {getPokemon} from '../../api';
import List from './list';

class Home extends Component {

    state = {
        pokemon: []
    }

    getData = () => {
        getPokemon().then(res => {

            // map pokemon data
            const pokemon = res.data.results.map(obj => {
                obj.id = Number(obj.url.substring(34, obj.url.length - 1));
                obj.favorite = false;
                return obj;
            });

            // update the state
            this.setState({
                pokemon
            });
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="home">
                <h2>Home</h2>
                <List pokemon={this.state.pokemon} />
            </div>
        );
    }
}

export default Home;
