import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Avaliacao, AnimeLeft } from '../../styles';
import { Content, Reviews } from './styles';
import Erros from '../../components/erros';


import loved from '../../assets/img/reactions/loved.png';
import pissed from '../../assets/img/reactions/pissed.png';
import soso from '../../assets/img/reactions/soso.png';

function RestauranteAvaliacao({ item }) {


    const [data, setData] = useState();
    const [error, setError] = useState(false);

    const { id } = useParams();



    console.log('menuu', data)
    console.log('id', id);

    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get(`reviews/`,
                    {
                        params: {
                            restaurantId: id
                        }
                    }

                );
                // moment(response.data).locale('pt-br').fromNow()
                console.log('response', response.data);


                setData(response.data);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, [id, item]);

    function Rating(valor) {

        if (valor >= 4)
            return loved;

        if (valor < 4 && valor >= 2)
            return soso;

        else return pissed;
    }

    return (
        <Reviews>
            {data && data.map(list => (
                <AnimeLeft key={list.id}>
                    <Content>


                        <img src={Rating(list.rating)} alt="" />
                        <p>{list.name} <br></br>


                            {new Intl.DateTimeFormat('pt-BR')
                                .format(Date.parse(list.date))}
                        </p>
                        <Avaliacao>
                            <p>
                                {list.rating}
                            </p>
                        </Avaliacao>

                    </Content>

                    <span>{list.comments}</span>
                </AnimeLeft>
            ))}

            {error && <Erros erro={error} />}

        </Reviews>
    )
}

export default RestauranteAvaliacao;
