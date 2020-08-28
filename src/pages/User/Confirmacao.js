import React, { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';
import { HeaderContainer } from '../Restaurantes/styles'
import { HomeContainer } from './styles';

function Confirmacao() {

    const [rates,] = useState([1, 2, 3, 4, 5]);
    const [rate, setRate] = useState(0);
    const [previous,] = useState(0);

    function handle(r) {

        setRate(r);
        console.log('r', r)
    }



    function MouseHover(r) {

        if (previous === undefined) {
            previous = rate;
        }

        rate = r;
    }


    return (
        <div>

            <HeaderContainer>
                <HomeContainer>


                    <h2>Pedido Conluído.</h2>
                    <p>Seu pedido foi recebido pelo restaurante. Prepare a mesa que a comida está chegando! </p>
                    <h3>Avalie sua experiência:</h3>

                    {rates.map((item, index) => (
                        <>

                            <FiStar key={index} size={25} color={'#33333'}
                                onClick={() => handle(item)}
                                fill={item > rate ? "#ffffff" : "#333333"}
                                onMouseOver={() => MouseHover(item)}

                            />

                        </>
                    ))}


                </HomeContainer>

            </HeaderContainer>




        </div>
    )
}

export default Confirmacao
