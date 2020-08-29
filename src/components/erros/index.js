import React from 'react';
import styled from 'styled-components';

const Err = styled.p`
    color: tomato;
`;

function Erros({ error }) {

    return (
        <Err>
            {error}
        </Err>
    )
}

export default Erros;
