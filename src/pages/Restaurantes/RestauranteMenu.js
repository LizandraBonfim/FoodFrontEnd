import React, { useState, useEffect } from 'react';
import { AnimeLeft } from '../../styles';

import { RestauranteContainer } from './styles';

function RestauranteMenu({ item }) {




    return (
        <AnimeLeft>

            <RestauranteContainer>
                <img src={require(`../../${item.imagePath}`)}
                    alt={item.name} />

                <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                    <strong>{item.price}</strong>
                </div>


            </RestauranteContainer>
        </AnimeLeft>
    )
}

export default RestauranteMenu;
