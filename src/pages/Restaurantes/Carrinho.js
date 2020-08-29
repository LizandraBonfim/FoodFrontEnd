import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaTrashAlt, FaCreditCard } from 'react-icons/fa';

import { RestauranteContext } from '../../RestauranteContext';
import { AnimeLeft, Icons } from '../../styles';
import { Card, Content } from './styles';

function Carrinho() {

    const navigate = useNavigate();
    const { produtos, setProdutos, login } = useContext(RestauranteContext);
    const [valores, setValores] = useState([]);

    function Valores(produto) {
        const price = produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return price;


    }

    useEffect(() => {

        if (produtos.length === 0) return;

        const values = produtos.map(e => parseFloat(e.price) * e.qtd).reduce((a, b) => a + b);

        setValores(values.toFixed(2));


    }, [produtos]);

    function handleLimpar() {
        setProdutos([]);
        setValores(0);

    }

    function handleFinalizar() {

        if (!login) navigate('/login');
        else navigate('/finalizar');



    }


    return (
        <AnimeLeft style={{ position: 'relative', zIndex: '-1' }}>
            <Card>
                <Icons>

                    <h1>
                        <FaShoppingCart />
                        Carrinho
                 </h1>
                </Icons>

                <aside>
                    {produtos && produtos.map(item => (
                        <li key={item.id}>
                            <AnimeLeft>
                                <strong>({item.qtd}x) {item.name}</strong>
                                <p>{Valores(item.subtotal)}</p>

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
