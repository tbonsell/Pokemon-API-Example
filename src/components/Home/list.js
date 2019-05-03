import React from 'react';

const List = ({pokemon, loadMore}) => {
    const itemList = pokemon.length ? (
        pokemon.map(obj => {
            return (
                <div key={obj.id}>
                    Name: {obj.name} | ID: {obj.id} | Favorite: {obj.favorite}
                    URL: {obj.url}
                </div>
            )
        })
    ) : (
        <div className="collection-item">
            <span>Empty</span>
        </div>
    );

    return (
        <div>
            {itemList}
            <button onClick={loadMore}>Load More</button>
        </div>
    );
}

export default List;
