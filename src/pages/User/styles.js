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

        margin-top: 1rem;
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

export const Paragrafo = styled.p`
    font-size: 1rem;
    color: #333;
    margin-bottom: 2rem;

    a{
        color: blue;
    }

`

export const HomeFinalizar = styled.form`
    background: #fff;
    border-radius: .5rem;
    padding: 1rem;
    margin-top: 1rem;
    color: #333;

    p{
        margin-left: 1rem;
    }


    table{
        width: 100%;
        margin-bottom: 1rem;


        thead tr{
            box-shadow: 0px 1px 0 0 #b9afaf;
        }

        td button{
            padding: 1px 3px;
            border: none;
            background: none;
            padding: 1px 3px;
            color: #004296;
            font-weight: bold;
            font-size: 1.8em;
            margin: 0 1rem;
            cursor: pointer;
        }

        tbody{
            background-color: #f9f9f9;
            text-align: center;
        }
    }

    span{
        position: absolute;
        top: 8px;
        right: 8px;
    }

    
`;

export const Button = styled.button`

    background: #00a65a;
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    margin-top: 1rem;
    padding: 5px;
    transition: .2s;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    svg{
        padding-right: 5px;
    }

    &:hover{
        opacity: .6;
    }

`;

export const Grid = styled.div`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;
    gap: 1rem;


    
    li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 1rem 0;
    }

    @media(max-width: 60rem){
        grid-template-columns:  1fr;

    }

  
`;

export const Radio = styled.div`
    display: flex;
    align-items: center;
    margin-top: .5rem;

    label{
        margin-left: 1rem;
    }
`;

export const ConfirmacaoCarrinho = styled(HomeContainer)`

    color: #333;
    line-height: 3;
    padding-bottom: 2rem;
    h2{
        font-size: 2.2rem;

    }

    svg{
        cursor: pointer;
    }

`;
