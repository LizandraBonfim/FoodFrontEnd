import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles';

import logo from '../../assets/404.png';
import { HeaderContainer } from './styles';


function Header() {
    return (
        <HeaderContainer >

            <Container>

                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>

                <Link to="/login">
                    <p>Entrar</p>
                </Link>
            </Container>
        </HeaderContainer>
    )
}

export default Header;
