import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart, FaTrashAlt, FaCreditCard } from 'react-icons/fa';

import { RestauranteContext } from '../../RestauranteContext';
import { AnimeLeft } from '../../styles';
import { Card, Content } from './styles';
import { useNavigate } from 'react-router-dom';

function Carrinho() {

    const navigate = useNavigate();
    const { produtos, setProdutos } = useContext(RestauranteContext);
    const [valores, setValores] = useState([]);

    function Valores(produto) {
        const price = produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return price;


    }

    useEffect(() => {

        if (produtos.length === 0) return;

        const values = produtos.map(e => parseFloat(e.price)).reduce((a, b) => a + b);

        setValores(values.toFixed(2));
        console.log('rsrs', values);


    }, [produtos]);

    function handleLimpar() {
        setProdutos([]);
        setValores(0);

    }

    function handleFinalizar() {
        navigate('/finalizar');
    }


    return (
        <AnimeLeft>
            <Card>

                <h1>
                    <FaShoppingCart size={20} color={'#333'} style={{ paddingRight: '2px' }} />

                Carrinho
                 </h1>

                <aside>
                    {produtos && produtos.map(item => (
                        <li key={item.id}>
                            <AnimeLeft>
                                <strong>{item.name}</strong>
                                <p>{Valores(item.price)}</p>

                            </AnimeLeft>
                        </li>

                    ))}

                    {valores > 0
                        ? <div><p>Total : </p><strong> R$ {valores}</strong> </div>
                        : <span>Seu carrinho está vazio!</span>
                    }

                    {produtos && valores > 0
                        &&
                        <Content>
                            <button onClick={handleLimpar}>
                                <FaTrashAlt />
                                Limpar
                            </button>

                            <button onClick={handleFinalizar}>
                                <FaCreditCard />
                                Fechar pedido
                            </button>
                        </Content>
                    }


                </aside>
            </Card>
        </AnimeLeft>
    )
}

export default Carrinho;
