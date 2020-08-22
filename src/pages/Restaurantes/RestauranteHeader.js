import React, { useState, useEffect, useContext } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import { api } from '../../services/api';
import { RestauranteContext } from '../../RestauranteContext';
import { Avaliacao } from '../../styles';
import Erros from '../../components/erros';
import { HeaderContainer, Content, Section } from './styles';



function RestauranteHeader() {


    const temp1 = useParams();

    const id = temp1['*'].split('/')[0];

    console.log('id', id);

    const [data, setData] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get('restaurants', {
                    params: {
                        id: id
                    }
                });
                console.log('olaaaaaaaaaaaaaaaa', response.data[0]);
                setData(response.data[0]);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, [id]);

    console.log('data', data);



    if (!data) return <Erros erro={error} />

    return (
        <>
            <HeaderContainer>

                {data && (
                    <>
                        <Content>
                            <div >
                                <FaHome size={20} color={'#333'} style={{ paddingRight: '2px' }} />
                                {data.name}
                            </div>
                            <Avaliacao>
                                <p>
                                    {data.rating}
                                </p>
                            </Avaliacao>
                        </Content>


                        <Section>
                            <img src={require(`../../${data.imagePath}`)}
                                alt={data.name} />

                            <span>

                                <p><strong>Categoria:</strong> {data.about}</p>
                                <p><strong>Quem somos:</strong> {data.category}
                                </p>
                                <p><strong>Horários:</strong> {data.hours}</p>
                            </span>
                        </Section>

                        <nav>
                            <NavLink to={`/restaurantes/${data.id}/menu`}>Menu</NavLink>

                            <NavLink to={`/restaurantes/${data.id}/reviews`}>
                                Avaliacao
                            </NavLink>
                        </nav>
                    </>
                )}


            </HeaderContainer>

        </>
    )
}

export default RestauranteHeader;
