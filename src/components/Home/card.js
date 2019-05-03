import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

const POKEMON_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokeCard = ({pokemon}) => {
    return (
        <Grid item key={pokemon.id} xs={12} sm={6} md={3}>
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
            </Card>
        </Grid>
    );
}

export default PokeCard;
