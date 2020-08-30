import React, { useContext } from 'react';
import { RestauranteContext } from '../../RestauranteContext';
import { useNavigate } from 'react-router-dom';
import { Avaliacao } from '../../styles';
import Image from '../../components/Image';

function Detalhes({ item }) {

    const { setRestaurante } = useContext(RestauranteContext);
    const navigate = useNavigate();

    function handleClick() {
        setRestaurante(item);

        navigate(`/restaurantes/${item.id}/menu`);


    }

    return (


        <li onClick={handleClick}>
            <figure>

                <Image src={require(`../../${item.imagePath}`)}
                    alt={item.name} />
            </figure>

            <div>
                <strong>{item.name}</strong>
                <p>{item.category}</p>
                <p>{item.deliveryEstimate}</p>
            </div>

            <Avaliacao>
                <p>
                    {item.rating}
                </p>
            </Avaliacao>
        </li>

    )
}

export default Detalhes;
