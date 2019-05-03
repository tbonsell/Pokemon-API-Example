import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import './index.css';

const ToolBar = ({sortData}) => {

    return (
        <AppBar position="fixed">
            <Toolbar className="toolbar">
                <Typography variant="h5" color="inherit" className="title">
                    Pokemon API Example
                </Typography>
                <div className="sortable">
                    <Typography variant="body2" color="inherit">
                        Sort Alphabetically
                    </Typography>
                    <div className="buttons">
                        <ArrowDropUpIcon className="icon" onClick={() => sortData('asc')} />
                        <ArrowDropDownIcon className="icon" onClick={() => sortData('desc')} />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default ToolBar;
