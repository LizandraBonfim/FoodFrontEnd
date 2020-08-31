import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { BsSearch } from 'react-icons/bs';

import Detalhes from './Detalhes';
import Erros from '../../components/erros';
import Input from '../../components/Input';
import { AnimeLeft } from '../../styles';
import { HomeContainer, Content, AnimeTop } from './styles';
import useMedia from '../../hooks/useMedia';
import Loading from '../../components/Loading';


function Restaurante() {


    const [data, setData] = useState();
    const [dataFiltered, setDataFiltered] = useState();
    const [error, setError] = useState(false);
    const [search, setSearch] = useState(false);

    const eMobile = useMedia('(max-width: 40rem)');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetch() {

            try {
                setLoading(true);
                setError(false);
                const response = await api.get('restaurants');
                setData(response.data);
                setDataFiltered(response.data)
            } catch{
                setLoading(false);
                setError("Ocorreu um erro");
            } finally {
                setLoading(false);

            }

        }

        fetch();

    }, []);

    function handleClick() {
        if (search === true) {
            setSearch(false);
        } else {
            setSearch(true);
        }

    }

    function handleChange({ target }) {

        const value = target.value.toLowerCase();
        const dados = data.filter(x => x.name?.toLowerCase().indexOf(value) !== -1);

        setDataFiltered(dados);
    }

    if (loading) return <Loading />;

    return (

        <HomeContainer>

            <Content>
                <h2>Todos restaurantes: </h2>
                <button onClick={handleClick}><BsSearch /></button>

                {search &&

                    <AnimeTop >
                        <Input
                            onChange={handleChange}
                            type="text"
                            placeholder={eMobile ? "Pesquise..." : "Pesquise um restaurante"}
                            style={{ width: '100%' }}
                        />

                    </AnimeTop>
                }

            </Content>


            <ul>

                {dataFiltered && dataFiltered.map(item => (
                    <AnimeLeft key={item.id}>


                        <Detalhes item={item} />


                    </AnimeLeft>
                ))}
            </ul>

            {error && <Erros erro={error} />}
        </HomeContainer >

    )
}

export default Restaurante;
