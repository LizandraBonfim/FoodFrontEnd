import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import { AnimeLeft } from '../../styles';
import { Container, HomeContainer, Paragrafo } from './styles';
import { RestauranteContext } from '../../RestauranteContext';

function Login() {
    const navigate = useNavigate();
    const { setLogin } = useContext(RestauranteContext);
    const [dados, setDados] = useState({ email: 'user@hotmail.com', password: '1234' });

    function handleClick() {
        if (dados.email === 'user@hotmail.com' && dados.password === '1234') {
            setLogin(true);
            navigate('/restaurantes');
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
                        onChange={({ target }) => setDados(x => x.email = target.value)}
                        value={dados.email} />


                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={dados.password}
                        onChange={({ target }) => setDados(x => x.password = target.value)}
                    />

                    <button onClick={handleClick}> Entrar</button>

                </AnimeLeft>
            </HomeContainer>
        </Container>
    )
}

export default Login
