import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles';

import logo from '../../assets/404.png';
import { HeaderContainer } from './styles';
import { RestauranteContext } from '../../RestauranteContext';


function Header() {
    const { login, setLogin } = useContext(RestauranteContext);

    console.log('login', login)

    return (
        <HeaderContainer >

            <Container>

                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>


                {login === true
                    ? <p>Ola, user | <Link onClick={() => setLogin(false)} to="/login">Sair</Link></p>
                    : <Link to="/login"> <p>Entrar</p></Link>
                }


            </Container>
        </HeaderContainer>
    )
}

export default Header;
