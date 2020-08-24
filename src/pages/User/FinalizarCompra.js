import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import { AnimeLeft } from '../../styles';
import { Container, HomeContainer } from './styles';

function FinalizarCompra() {
    const navigate = useNavigate();

    async function handleClick() {

    }

    return (
        <Container>
            <HomeContainer>
                <h1>Finalize seu pedido:</h1>
                <AnimeLeft>

                    <p>Por favor, efetue o login para continuar</p>

                    <Input placeholder="Nome" type="text" id="nome" name="nome" />

                    <Input placeholder="Email" type="email" id="email" name="email" />

                    <Input placeholder="confirmacao de email" type="email" id="email" name="email" />

                    <p>Endereco de entrega: </p>

                    <Input placeholder="Endereco" type="text" id="endereco" name="endereco" />

                    <Input placeholder="Numero" type="text" id="numero" name="numero" />

                    <Input placeholder="Numero" type="text" id="numero" name="numero" />


                    <Input placeholder="Complemento" type="text" id="complemento" name="complemento" />

                    <p>Itens do pedido</p>

                    <div>
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
                                <tr>
                                    <td>-1+</td>
                                    <td>Cup Cake</td>
                                    <td>Cup Cake recheado de Doce de Leite</td>
                                    <td>R$ 165,3</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <section>
                        <div>
                            <h2>Formas de pagamento</h2>
                            <input type="radio">Dinheiro</input>
                            <input type="radio">Cartao</input>
                            <input type="radio">Cartão de Refeição</input>
                        </div>

                        <div>
                            <h2>Frete e Total:</h2>
                            <ul>
                                <li><strong>Itens:</strong>R$ 0,00</li>
                                <li><strong>Frete:</strong>R$ 0,00</li>
                                <li><strong>Total:</strong>R$ 0,00</li>
                            </ul>
                        </div>
                    </section>


                    <button onClick={handleClick}> Entrar</button>

                </AnimeLeft>
            </HomeContainer>
        </Container>
    )
}

export default FinalizarCompra
