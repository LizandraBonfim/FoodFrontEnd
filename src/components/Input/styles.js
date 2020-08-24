import styled from 'styled-components';

export const Container = styled.div`

    margin: 0 1rem;
    position: relative;

    input{
        width: 100%;
        padding: .5rem;
        border-radius: .4rem;
        border: 1px solid #333;
        background: #fff;
        position: relative;

    }

    & + div{
        margin-top: 1rem;
    }
`;
