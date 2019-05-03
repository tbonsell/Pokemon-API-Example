import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './index.css';

const ITEM_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

const ToolBar = ({sortData, sortFavorite}) => {

    return (
        <AppBar position="fixed">
            <Toolbar className="toolbar">
                <Typography variant="h5" color="inherit" className="title">
                    Pokemon API Example
                </Typography>
                <div className="sortable">
                    <Typography variant="body2" color="inherit" className="label">
                        Sort
                    </Typography>
                    <div className="buttons">
                        <ArrowDropUpIcon className="icon button" onClick={() => sortData('asc')} />
                        <ArrowDropDownIcon className="icon button" onClick={() => sortData('desc')} />
                    </div>
                    <img
                        src={`${ITEM_SPRITE_URL}poke-ball.png`}
                        alt='Sort by favorites'
                        className='sort-favorites button'
                        onClick={sortFavorite}/>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default ToolBar;
