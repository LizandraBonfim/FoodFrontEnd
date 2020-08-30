import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import { api } from '../../services/api';
import Erros from '../../components/erros';
import { Avaliacao, Icons } from '../../styles';
import { HeaderContainer, DisplayFlex, Section } from './styles';



function RestauranteHeader() {


    const temp1 = useParams();

    const id = temp1['*'].split('/')[0];



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

                setData(response.data[0]);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, [id]);



    if (!data) return <Erros erro={error} />

    return (
        <>
            <HeaderContainer>

                {data && (
                    <>
                        <DisplayFlex>
                            <Icons >
                                <FaHome />
                                {data.name}
                            </Icons>
                            <Avaliacao>
                                <p>
                                    {data.rating}
                                </p>
                            </Avaliacao>
                        </DisplayFlex>


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
