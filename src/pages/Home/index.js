import React from 'react';
import { Link } from 'react-router-dom';
import { AnimeLeft } from '../../styles';

import { HomeContainer } from './styles';


function Home() {
    return (
        <HomeContainer>
            <AnimeLeft>

                <h1>Bem vindo ao Meat!</h1>

                <p>Está com fome? Peça e receba em casa.</p>

                <Link to="/restaurantes">
                    <button>
                        Ver Restaurantes
                    </button>
                </Link>
            </AnimeLeft>
        </HomeContainer>
    )
}

export default Home;
