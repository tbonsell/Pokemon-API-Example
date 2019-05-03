import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const POKEMON_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const ITEM_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

const PokeCard = ({pokemon, toggleFavorite}) => {
    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card className="card">
                <CardHeader
                    title={pokemon.name}
                    titleTypographyProps={{ align: 'center' }}
                    className="card-header"
                />
                <CardContent>
                    <div className="image-container">
                        <img src={`${POKEMON_SPRITE_URL}${pokemon.id}.png`} alt={pokemon.name} />
                    </div>
                </CardContent>
                <CardActions className="card-actions">
                    <IconButton
                        aria-label="Add to favorites"
                        className="favorite-button"
                        onClick={() => toggleFavorite(pokemon)}>
                        <img
                            src={`${ITEM_SPRITE_URL}poke-ball.png`}
                            alt={`Add ${pokemon.name} to favorites`}
                            className={`favorite ${pokemon.favorite ? 'active' : ''}`} />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PokeCard;
