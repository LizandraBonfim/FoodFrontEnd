import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';
import cart from '../../assets/cart.png';

import Input from '../../components/Input';
import Error from '../../components/erros';
import { AnimeLeft } from '../../styles';
import { Container, HomeFinalizar, Grid, Paragrafo, Radio, HomeContainer } from './styles';
import useForm from '../../hooks/useForm';
import { RestauranteContext } from '../../RestauranteContext';

function FinalizarCompra() {
    const navigate = useNavigate();

    const { produtos, login } = useContext(RestauranteContext);
    const [valores, setValores] = useState([]);

    console.log('produtos', produtos)

    const nome = useForm();
    const email = useForm('email');
    const confirmacao_email = useForm('email');
    const endereco = useForm();
    const numero = useForm('number');
    const complemento = useForm();
    const formPag = useForm();

    const [error, setError] = useState();

    useEffect(() => {

        if (produtos.length === 0) return;

        const values = produtos.map(e => parseFloat(e.price)).reduce((a, b) => a + b);

        setValores(values.toFixed(2));
        console.log('rsrs', values);


    }, [produtos]);


    async function handleSubmit(event) {
        event.preventDefault();
        console.log(formPag.value);

        if (!login) {
            navigate('/login');
            return 'Realizar o login.'
        }

        if (email.validate() && nome.validate() && confirmacao_email.validate() &&
            endereco.validate() && numero.validate() && complemento.validate() && formPag.validate()) {

            if (email.value !== confirmacao_email.value) {
                setError('Os emails não combinam.');
            }

            setError(false);
            console.log('Compra efetuada com sucesso!');
            navigate('/confirmacao');
            return 'Compra efetuada com sucesso!';
        }
    }


    if (produtos.length === 0) {
        return (

            <HomeContainer>
                <Container>
                    <Grid style={{ alignItems: 'center' }}>
                        <h2>Ops... Carrinho vazio</h2>
                        <img src={cart} alt="Cart" />
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
                    {produtos.length === 0 &&
                        <Paragrafo> Carrinho vazio, <Link to="/restaurantes"> clique aqui </Link> para realizar uma compra.

                        </Paragrafo>}
                    <Paragrafo>Itens do pedido:</Paragrafo>

                    <div >
                        <table>
                            <thead>
                                <tr>
                                    <th>Quantidade</th>
                                    <th>Item</th>
                                    <th>Descrição</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.map(item => (
                                    <tr key={item.id}>
                                        <td>-1+</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}

                            </tbody>
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
                                    <p>R$ {valores || 0.00}</p>
                                </li>
                                <li>
                                    <strong>Frete:</strong>
                                    <p>R$ 8,00</p>
                                </li>
                                <li>
                                    <strong>Total:</strong>
                                    <p>{(parseFloat(valores) + 8).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 0.00}</p>
                                </li>
                            </ul>

                        </div>
                    </Grid>


                    <button>
                        <FaCreditCard />
                        Finalizar Pedido
                    </button>

                </AnimeLeft>

                <Error error={error} />
            </HomeFinalizar>
        </Container>
    )
}

export default FinalizarCompra;
