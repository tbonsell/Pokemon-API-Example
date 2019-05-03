import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

const POKEMON_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Error = () => {
    return (
        <div className="error">
            <div className="message">
                <div className="poke-error">
                    4<img src={`${POKEMON_SPRITE_URL}62.png`} alt="404" />4
                </div>
                <div className="sub-message">
                    <p>Page Not Found</p>
                    <Link to={'/'}>
                        <span className="card-title red-text">Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;
