import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import { AnimeLeft } from '../../styles';
import { Container, HomeContainer } from './styles';

function Login() {
    const navigate = useNavigate();

    async function handleClick() {

    }

    return (
        <Container>
            <h1>Login</h1>

            <HomeContainer>
                <AnimeLeft>

                    <p>Por favor, efetue o login para continuar</p>


                    <Input placeholder="Email" type="email" id="email" name="email" />


                    <Input placeholder="Senha" type="password" id="password" name="password" />

                    <button onClick={handleClick}> Entrar</button>

                </AnimeLeft>
            </HomeContainer>
        </Container>
    )
}

export default Login
