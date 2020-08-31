import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';

import cart from '../../assets/cart.png';

import Input from '../../components/Input';
import Error from '../../components/erros';
import useForm from '../../hooks/useForm';

import { RestauranteContext } from '../../RestauranteContext';
import { AnimeLeft } from '../../styles';
import { DisplayFlex } from '../Restaurantes/styles';
import {
    Container,
    HomeFinalizar,
    Grid,
    Paragrafo,
    Radio,
    HomeContainer,
    Button
} from './styles';
import { ToastUser } from '../../ToastContext';
import { useEffect } from 'react';
import useMedia from '../../hooks/useMedia';
import Image from '../../components/Image';

function FinalizarCompra() {
    const navigate = useNavigate();

    const { produtos, login, setProdutos } = useContext(RestauranteContext);
    const eMobile = useMedia('(max-width: 40rem)');


    const nome = useForm();
    const email = useForm('email');
    const confirmacao_email = useForm('email');
    const endereco = useForm();
    const numero = useForm('number');
    const complemento = useForm();
    const formPag = useForm();

    const [valores, setValores] = useState(() => { });

    const [error, setError] = useState();
    const { setMessage } = useContext(ToastUser);


    useEffect(() => {
        const values = produtos.map(e => e.subtotal).reduce((a, b) => a + b, 0);
        setValores(values);


    }, [produtos]);

    function Valores(produto) {

        if (produto === undefined) return;
        const price = produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return price;


    }


    function handleMais(item) {

        const produtoIndex = produtos.findIndex(x => x.id === item.id);

        if (produtoIndex !== -1) {
            produtos[produtoIndex].qtd += 1;
            setProdutos(x => [...produtos]);

            let produto = produtos[produtoIndex];

            produto.subtotal = produto.qtd * produto.price;

            produtos[produtoIndex] = produto;
        }

        setMessage({ message: `Item ${item.id} adicionado.` });


    }

    function handleMenos(item) {
        const produtoIndex = produtos.findIndex(x => x.id === item.id);


        if (produtoIndex === -1) {
            return;
        }
        let produto = produtos[produtoIndex];
        produto.qtd -= 1;

        if (produto.qtd >= 1) {

            setProdutos(x => [...produtos]);


            produto.subtotal = produto.qtd * produto.price;

            produtos[produtoIndex] = produto;
        }
        if (produto.qtd === 0) {
            produtos.slice(produtoIndex, 1);
            setProdutos(x => [...produtos].filter(x => x.id !== item.id));
        }
        setMessage({ message: `Item ${item.id} removido.` });
    }


    async function handleSubmit(event) {
        event.preventDefault();

        if (!login) {
            navigate('/login');
            return 'Realizar o login.'
        }

        if (email.validate() && nome.validate() && confirmacao_email.validate() &&
            endereco.validate() && numero.validate() && complemento.validate() && formPag.validate()) {

            if (email.value !== confirmacao_email.value) {
                setError(true);
                setMessage({ message: 'Os emails não combinam..' });
                return;
            }

            setError(false);
            navigate('/confirmar');
            setMessage({ message: 'Compra efetuada com sucesso!' })
            return 'Compra efetuada com sucesso!';
        }
    }


    if (produtos.length === 0 || produtos === undefined) {
        return (

            <HomeContainer>
                <Container>
                    <Grid style={{ alignItems: 'center' }}>
                        <h2>Ops... Carrinho vazio</h2>
                        <Image src={cart} alt="Cart" />
                    </Grid>
                </Container>
            </HomeContainer>
        );
    }

    return (
        <Container>

            <HomeFinalizar onSubmit={handleSubmit}>
                <h1>Finalize seu pedido:</h1>
                <AnimeLeft>

                    <Paragrafo>Seus dados:</Paragrafo>
                    <Grid>


                        <Input placeholder="Nome" type="text" id="nome" name="nome" {...nome} />

                        <Input placeholder="Email" type="email" id="email" name="email" {...email} />

                        <Input placeholder="Confirmacao de email" type="email" id="confirmacao_email" name="confirmacao_email" {...confirmacao_email} />
                    </Grid>

                    <Paragrafo>Endereco de entrega: </Paragrafo>

                    <Grid>

                        <Input placeholder="Endereco" type="text" id="endereco" name="endereco" {...endereco} />

                        <Input placeholder="Numero" type="text" id="numero" name="numero" {...numero} />


                        <Input placeholder="Complemento" type="text" id="complemento" name="complemento" {...complemento} />

                    </Grid>

                    <Paragrafo>Itens do pedido:</Paragrafo>




                    <div >
                        <table>
                            <thead>
                                <tr>
                                    <th>Quantidade</th>
                                    <th>Item</th>
                                    {!eMobile && <th>Descrição</th>}
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            {produtos.map(item => (
                                <tbody>
                                    <tr key={item.id}>
                                        <td>
                                            <DisplayFlex>

                                                <button onClick={() => handleMenos(item)}> - </button>
                                                {item.qtd}
                                                <button onClick={() => handleMais(item)}> + </button>
                                            </DisplayFlex>
                                        </td>
                                        <td>{item.name}</td>
                                        {!eMobile && <td>{item.description}</td>}
                                        <td>{item.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    </tr>

                                </tbody>
                            ))}

                        </table>
                    </div>
                    <Grid>
                        <div {...formPag}>
                            <h2>Formas de pagamento</h2>

                            <Radio>

                                <input type="radio" id="dinheiro" name="gender" value="dinheiro" />
                                <label htmlFor="dinheiro">Dinheiro</label>
                            </Radio>

                            <Radio>

                                <input type="radio" id="cartao" name="gender" value="cartao" />
                                <label htmlFor="cartao">Cartao</label>
                            </Radio>


                            <Radio>

                                <input type="radio" id="cartaovr" name="gender" value="cartaovr" />
                                <label htmlFor="cartaovr">Cartão de Refeição</label>
                            </Radio>


                        </div>

                        <div>
                            <h2>Frete e Total:</h2>

                            <ul >

                                <li>
                                    <strong>Itens:</strong>
                                    <p> {Valores(valores) || 0.00}</p>
                                </li>
                                <li>
                                    <strong>Frete:</strong>
                                    <p>R$ 8,00</p>
                                </li>
                                <li>
                                    <strong>Total:</strong>
                                    <p>{Valores((parseFloat(valores)) + 8) || 0.00}</p>
                                </li>
                            </ul>


                        </div>
                    </Grid>



                    <Button>
                        <FaCreditCard />
                        Finalizar Pedido
                    </Button>

                </AnimeLeft>


                <Error error={error} />
            </HomeFinalizar>
        </Container>
    )
}

export default FinalizarCompra;
