import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PokeCard from './card';

const List = ({pokemon, loadMore, toggleFavorite}) => {
    const itemList = pokemon.length ? (
        pokemon.map(obj => {
            return (
                <PokeCard pokemon={obj} toggleFavorite={toggleFavorite} key={obj.id} />
            )
        })
    ) : (
        <div className="empty-list">
            <h2>Nothing to show</h2>
        </div>
    );

    return (
        <div className="grid-container">
            <Grid container spacing={40} alignItems="flex-end">
                {itemList}
                <Grid item xs={12}>
                    <Button variant="contained" className="load-more" onClick={loadMore}>
                        Load More
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default List;
