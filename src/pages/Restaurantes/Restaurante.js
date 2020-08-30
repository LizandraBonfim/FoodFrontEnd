import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { BsSearch } from 'react-icons/bs';

import Detalhes from './Detalhes';
import Erros from '../../components/erros';
import Input from '../../components/Input';
import { AnimeLeft } from '../../styles';
import { HomeContainer, Content, AnimeTop } from './styles';
import useMedia from '../../hooks/useMedia';


function Restaurante() {


    const [data, setData] = useState();
    const [dataFiltered, setDataFiltered] = useState();
    const [error, setError] = useState(false);
    const [search, setSearch] = useState(false);

    const eMobile = useMedia('(max-width: 40rem)');

    console.log(`dataa`, data)
    useEffect(() => {
        async function fetch() {

            try {
                setError(false);
                const response = await api.get('restaurants');
                setData(response.data);
                setDataFiltered(response.data)
            } catch{
                setError("Ocorreu um erro");
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

            {/* {search &&

                <AnimeTop style={{ marginBottom: '1rem' }}>
                    <Input
                        onChange={handleChange}
                        type="text"
                        placeholder="Pesquise um restaurante"
                        style={{ width: '100%' }}
                    />

                </AnimeTop>
            } */}
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
