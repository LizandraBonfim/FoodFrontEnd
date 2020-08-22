import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { api } from '../../services/api';
import Erros from '../../components/erros';
import Carrinho from './Carrinho';
import { AnimeLeft } from '../../styles';

import { RestauranteContainer, Card } from './styles';

function RestauranteMenu() {


    const [data, setData] = useState();
    const [error, setError] = useState(false);

    const { id } = useParams();


    console.log('menuu', data)
    console.log('id', id);

    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get(`menu/`,
                    {
                        params: {
                            restaurantId: id
                        }
                    }

                );
                setData(response.data);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, [id]);

    if (!data) return <Erros erro={error} />

    return (
        <>
            <RestauranteContainer >
                <AnimeLeft>

                    {data.map(item => (

                        <section>
                            <img src={require(`../../${item.imagePath}`)}
                                alt={item.name} />

                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.description}</p>
                                <strong> {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>

                                <p >
                                    <FaPlusCircle />
                                Adicionar
                                </p>
                            </div>


                        </section>
                    ))}
                </AnimeLeft>
                <Card >

                    <Carrinho />
                </Card>
            </RestauranteContainer>
        </>

    )
}

export default RestauranteMenu;
