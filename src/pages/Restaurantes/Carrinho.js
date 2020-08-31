import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaTrashAlt, FaCreditCard } from 'react-icons/fa';

import { RestauranteContext } from '../../RestauranteContext';
import { AnimeLeft, Icons } from '../../styles';
import { Card, DisplayFlex, ButtonMobileMenu, CarrinhoMobile } from './styles';
import useMedia from '../../hooks/useMedia';


function Carrinho() {

    const navigate = useNavigate();
    const { produtos, setProdutos, login } = useContext(RestauranteContext);
    const [valores, setValores] = useState([]);
    const [mobile, setMobile] = useState(false);


    const eMobile = useMedia('(max-width: 60rem)');
    const ePc = useMedia('(min-width: 60.01rem)');

    const { pathname } = useLocation();

    useEffect(() => {

        setMobile(false);

    }, [pathname]);



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
        <>
            {eMobile &&
                <ButtonMobileMenu style={{ zIndex: '1000' }}>
                    <button
                        aria-label="Menu"
                        onClick={() => setMobile(!mobile)}>
                        <FaShoppingCart />
                        <span>{produtos.length}</span>
                    </button>


                </ButtonMobileMenu>
            }


            {(mobile || ePc) &&
                <CarrinhoMobile >


                    <Card>
                        <Icons>

                            <h1>
                                <FaShoppingCart /> Carrinho
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
                                <DisplayFlex>
                                    <button onClick={handleLimpar}>
                                        <FaTrashAlt />
                                Limpar
                            </button>

                                    <button onClick={handleFinalizar}>
                                        <FaCreditCard />
                                         Fechar pedido
                                    </button>
                                </DisplayFlex>
                            }


                        </aside>


                    </Card>
                </CarrinhoMobile>
            }

        </>
    )
}

export default Carrinho;
