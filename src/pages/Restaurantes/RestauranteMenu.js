import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { api } from '../../services/api';
import Erros from '../../components/erros';
import Carrinho from './Carrinho';
import { AnimeLeft } from '../../styles';

import { RestauranteContainer, RestauranteSection } from './styles';
import { RestauranteContext } from '../../RestauranteContext';

function RestauranteMenu() {


    const [data, setData] = useState();
    const [error, setError] = useState(false);

    const { id } = useParams();
    const { setProdutos } = useContext(RestauranteContext);


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

    function handleClick(item) {
        console.log('cliquei');

        console.log('item', item);
        setProdutos((itens) => [...itens, item]);
    }

    if (!data) return <Erros erro={error} />

    return (
        <>
            <RestauranteContainer >
                <AnimeLeft>

                    {data.map(item => (

                        <RestauranteSection key={item.id}>
                            <img src={require(`../../${item.imagePath}`)}
                                alt={item.name} />

                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.description}</p>
                                <strong> {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>


                                <button onClick={() => handleClick(item)}>
                                    <FaPlusCircle />
                                    Adicionar
                                </button>

                            </div>


                        </RestauranteSection>
                    ))}
                </AnimeLeft>


                <Carrinho />

            </RestauranteContainer>
        </>

    )
}

export default RestauranteMenu;
