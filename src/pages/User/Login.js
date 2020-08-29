import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import { RestauranteContext } from '../../RestauranteContext';
import Erros from '../../components/erros/index';
import { AnimeLeft } from '../../styles';
import { Container, HomeContainer, Paragrafo } from './styles';
import { ToastUser } from '../../ToastContext';


function Login() {
    const navigate = useNavigate();
    const { setLogin } = useContext(RestauranteContext);
    const [dados, setDados] = useState({ email: 'user@hotmail.com', password: '1234' });
    const [error, setError] = useState(false);
    const { setMessage } = useContext(ToastUser);

    function handleClick() {

        if (dados.email === 'user@hotmail.com' && dados.password === '1234') {
            setMessage({ message: 'Bem vindo, user' });
            setLogin(true);
            setError(false);

            navigate('/restaurantes');

        } else {
            setError("Dados inválidos. Favor verificar.");
            setMessage({ message: 'Dados incorretos.' });

        }
    }

    return (
        <Container>
            <h1>Login</h1>

            <HomeContainer>
                <AnimeLeft>


                    <Paragrafo>Por favor, efetue o login para continuar</Paragrafo>


                    <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={({ target }) => setDados(x => {
                            return {
                                email: target.value,
                                password: dados.password
                            }
                        })}
                        value={dados.email} />


                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={dados.password}
                        onChange={({ target }) => setDados(x => {
                            return {
                                email: dados.email,
                                password: target.value
                            }
                        })}
                    />
                    <button onClick={handleClick}> Entrar</button>

                    {error !== false && <Erros error={error} />}


                </AnimeLeft>
            </HomeContainer>
        </Container>
    )
}

export default Login
