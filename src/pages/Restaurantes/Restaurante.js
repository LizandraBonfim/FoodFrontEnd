import React, { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { ReactComponent as Lupa } from '../../assets/lupa.svg';
import { AnimeLeft } from '../../styles';
import { HomeContainer, Content } from './styles';
import Detalhes from './Detalhes';


function Restaurante() {

    const [data, setData] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get('restaurants');
                setData(response.data);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, []);



    if (error) return null;
    return (

        <HomeContainer>

            <Content>
                <h2>Todos restaurantes: </h2>
                <Lupa />
            </Content>
            <ul>

                {data && data.map(item => (
                    <AnimeLeft key={item.id}>


                        <Detalhes item={item} />


                    </AnimeLeft>
                ))}
            </ul>

        </HomeContainer >

    )
}

export default Restaurante;
