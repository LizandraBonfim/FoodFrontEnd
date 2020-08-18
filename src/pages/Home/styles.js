import styled from 'styled-components';

export const HomeContainer = styled.section`
background: #fff;
border-radius: .4rem;
padding: 3rem 0;
text-align: center;
margin-top: 5rem;

    h1{
        font-size: 3rem;
        padding: 3rem 0;

    }

    p{
        font-size: 1.3rem;
        margin-bottom: 2rem;

    }

    button{
        min-height: 3rem;
        cursor: pointer;
        text-align: center;
        margin: auto;
        padding: .4rem;
        border-radius: .4rem;
        background: #c04134;
        color: #fff;
        font-weight: 700;
        transition: .3s;
        border: none;
        
        &:hover{
            box-shadow: -1px 1px 10px 0px #333, -2px 2px     3px #ff1010;
        }
        
    }
`;
