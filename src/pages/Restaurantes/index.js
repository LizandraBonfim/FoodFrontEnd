import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Lupa } from '../../assets/lupa.svg';
import { api } from '../../services/api';
import { AnimeLeft } from '../../styles';
import { HomeContainer, Content } from './styles';

function Restaurantes() {

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

    console.log('data', data)

    return (
        <HomeContainer>

            <Content>
                <h2>Todos restaurantes: </h2>
                <Lupa />
            </Content>
            <AnimeLeft>
                <ul>

                    {data && data.map(item => (
                        <li key={item.id}>
                            <figure>

                                <img src={require(`../../${item.imagePath}`)} alt={item.name} />
                            </figure>

                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.category}</p>
                                <p>{item.deliveryEstimate}</p>
                            </div>

                            <span>
                                <p>

                                    {item.rating}
                                </p>
                            </span>
                        </li>
                    ))}
                </ul>
            </AnimeLeft>
        </HomeContainer>
    )
}

export default Restaurantes;
