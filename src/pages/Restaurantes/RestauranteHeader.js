import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';
import { RestauranteContext } from '../../RestauranteContext';
import { Avaliacao } from '../../styles';
import { HeaderContainer, Content, Section } from './styles';



function RestauranteHeader() {

    const { restaurante } = useContext(RestauranteContext);
    const [data, setData] = useState();
    const [error, setError] = useState(false);


    const { id } = useParams();


    console.log('menuu', restaurante)

    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get(`menu/`,
                    {
                        params: {
                            restaurantId: id
                        }
                    }
                );
                setData(response.data);
            } catch{
                setError("Ocorreu um erro");
            }

        }

        fetch();

    }, [id]);


    return (
        <>
            <HeaderContainer>

                {restaurante && (
                    <>
                        <Content>
                            <div>{restaurante.name}</div>
                            <Avaliacao>
                                <p>
                                    {restaurante.rating}
                                </p>
                            </Avaliacao>
                        </Content>


                        <Section>
                            <img src={require(`../../${restaurante.imagePath}`)}
                                alt={restaurante.name} />

                            <span>

                                <p><strong>Categoria:</strong> {restaurante.about}</p>
                                <p><strong>Quem somos:</strong> {restaurante.category}
                                </p>
                                <p><strong>Horários:</strong> {restaurante.hours}</p>
                            </span>
                        </Section>

                        <nav>
                            <Link to={`/restaurantes/${restaurante.id}/menu`}>Menu</Link>
                            <Link to={`/restaurantes/${restaurante.id}/reviews`}>
                                Avaliacao
                                </Link>
                        </nav>
                    </>
                )}
            </HeaderContainer>

        </>
    )
}

export default RestauranteHeader;
