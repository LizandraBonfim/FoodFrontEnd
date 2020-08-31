import React, { useState, useContext } from 'react';
import { FiStar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';
import { ToastUser } from '../../ToastContext';
import { AnimeLeft } from '../../styles';
import { HeaderContainer } from '../Restaurantes/styles';
import { ConfirmacaoCarrinho } from './styles';

function Confirmacao() {

    const navigate = useNavigate();

    const [rates,] = useState([1, 2, 3, 4, 5]);
    const [rate, setRate] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [avaliado, setAvaliado] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setMessage } = useContext(ToastUser);

    function handle(r) {

        setRate(r);
        setAvaliado(true);

        setLoading(true);
        setMessage({ message: `Você será direcionado para tela inicial.` });
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

    if (loading) return <Loading />
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
