import React from 'react';
import { AnimeLeft } from '../../styles';

import { HomeContainer } from './styles';


function Produtos({ item }) {

    console.log(`item`, item);
    return (
        <AnimeLeft>

            <HomeContainer>
                <img src={require(`../../${item.imagePath}`)}
                    alt={item.name} />

                <div>
                    <strong>{item.name}</strong>
                    <p>{item.description}</p>
                    <strong>{item.price}</strong>
                </div>


            </HomeContainer>
        </AnimeLeft>
    )
}

export default Produtos;
