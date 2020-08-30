import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import { api } from '../../services/api';
import Erros from '../../components/erros';
import Carrinho from './Carrinho';

import { RestauranteContext } from '../../RestauranteContext';
import { ToastUser } from '../../ToastContext';
import { AnimeLeft, Icons } from '../../styles';
import { RestauranteContainer, RestauranteSection, Div } from './styles';
import Image from '../../components/Image';



function RestauranteMenu() {


    const [data, setData] = useState();
    const [error, setError] = useState(false);

    const { id } = useParams();
    const { setProdutos, produtos } = useContext(RestauranteContext);
    const { setMessage } = useContext(ToastUser);


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

        const indexProduto = produtos.findIndex(x => x.id === item.id);
        setMessage({ message: `Item ${item.id} adicionado.` });


        if (indexProduto === -1) {
            item.qtd = 1;
            item.subtotal = item.price;

            setProdutos((itens) => [...itens, item]);

            return;
        }

        let produto = produtos[indexProduto]
        produto.qtd += 1;
        produto.subtotal = produto.qtd * produto.price;

        produtos[indexProduto] = produto;

        setProdutos(x => [...produtos]);



    }

    if (!data) return <Erros erro={error} />

    return (
        <>
            <RestauranteContainer >
                <AnimeLeft>

                    {data.map(item => (

                        <RestauranteSection key={item.id}>

                            <Image src={require(`../../${item.imagePath}`)}
                                alt={item.name} />

                            <Div>
                                <strong> {item.name}</strong>
                                <p>{item.description}</p>
                                <strong> {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>

                                <Icons>

                                    <button onClick={() => handleClick(item)}>
                                        <FaPlusCircle />
                                        Adicionar
                                    </button>
                                </Icons>

                            </Div>



                        </RestauranteSection>
                    ))}



                </AnimeLeft>


                <Carrinho />

            </RestauranteContainer>
        </>

    )
}

export default RestauranteMenu;
