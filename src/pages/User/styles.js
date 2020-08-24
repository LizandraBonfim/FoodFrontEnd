import styled from 'styled-components';

export const Container = styled.div`
 h1{
        font-size: 3rem;
        padding: 3rem 0;
        text-align: center;

    }
`;

export const HomeContainer = styled.section`
    background: #fff;
    border-radius: .4rem;
    padding: 1rem 0;
    text-align: center;
    max-width: 700px;
    margin: auto;

    span{
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 1000;
    }

    input{
        &:focus, &:hover{
            box-shadow:  0px 1px 10px 0px #d24242, -1px 1px 3px #333;
        }

    }

   

    p{
        font-size: 1rem;
        color: #333;
        margin-bottom: 2rem;

    }


    button{
        min-height: 3rem;
        cursor: pointer;
        text-align: center;
        margin: 1rem auto;
        padding: 1rem;
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
