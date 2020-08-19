import styled from 'styled-components';

export const HomeContainer = styled.section`
    display: grid;
    grid-template-columns: 18rem auto;
    gap: 1rem;
    padding: .5rem;
    border-radius: .5rem;
    margin-top: 1rem;
    background: #fff;

    img{
        width: 50%;
    }

    div{
        line-height: 2;
    }

    
`;

export const Container = styled.section`

    grid-column: 1/1;
    grid-row: span 2;

    
`;
