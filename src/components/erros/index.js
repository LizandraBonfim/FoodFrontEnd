import React from 'react';
import styled from 'styled-components';

const Err = styled.p`
    color: tomato;
`;

function Erros({ erro }) {
    return (
        <Err>
            {erro}
        </Err>
    )
}

export default Erros;
