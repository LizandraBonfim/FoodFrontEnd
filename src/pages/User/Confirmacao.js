import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

import { AnimeLeft } from '../../styles';
import { HeaderContainer } from '../Restaurantes/styles';
import { ConfirmacaoCarrinho } from './styles';
import { useNavigate } from 'react-router-dom';

function Confirmacao() {

    const navigate = useNavigate();

    const [rates,] = useState([1, 2, 3, 4, 5]);
    const [rate, setRate] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [avaliado, setAvaliado] = useState(false);

    function handle(r) {

        setRate(r);
        setAvaliado(true);

        setTimeout(() => {
            navigate('/');
        }, 3000);
    }



    function MouseHover(r) {

        if (previous === undefined) {
            setPrevious(rate);
        }

        setRate(r);


    }


    return (

        <HeaderContainer>
            <ConfirmacaoCarrinho>

                <AnimeLeft>

                    <h2>Pedido Conluído.</h2>
                    <p>Seu pedido foi recebido pelo restaurante. Prepare a mesa que a comida está chegando! </p>
                    <p><strong>Avalie</strong> sua experiência:</p>

                    {rates.map((item, index) => (
                        <>

                            <FiStar key={index} size={25} color={'#33333'}
                                onClick={() => handle(item)}
                                fill={item > rate ? "#ffffff" : "#333333"}
                                onMouseOver={() => MouseHover(item)}

                            />

                        </>
                    ))}

                    {avaliado ? <p>Obrigado pela sua avaliação!</p> : <p></p>}


                </AnimeLeft>
            </ConfirmacaoCarrinho>

        </HeaderContainer>




    )
}

export default Confirmacao;
