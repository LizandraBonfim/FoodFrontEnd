import styled, { createGlobalStyle, keyframes } from 'styled-components';
import img from './assets/avaliacao.ico';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root{
    background: #ecf0f5;
  }

  body{
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Roboto', georgia;
    font-family: var(--type-second);
  }


  a{
    color: #333;
    text-decoration: none;
  }

  img{
    display: block;
    max-width: 100%;
  }

  main{
    flex: 1;
    
  }


  button, input{
    /* width:100%; */
    display: block;

    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
    outline: none;
  }

  ul, li{
    list-style: none;
  }
`;

export const Container = styled.section`
    max-width: 70rem;
    padding: 0 1rem;
    margin: auto;


`;

export const MainContainer = styled(Container)`
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 10rem);
`;

const animeLeft = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

export const AnimeLeft = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} .3s forwards;

`;

export const Icons = styled.div`
    align-items: center;
    text-align: center;
    display: flex;

    svg {
      width: 40px;
      color: #333;
     
    }
`;

export const Avaliacao = styled.span`
  > p{
            align-items: center;
            display: flex;
            padding: 0 .5rem;

        &::before{
                content: '';
                margin-right: .2rem;
                background: url(${img}) no-repeat center center;
                display: block;
                width: 31px;
                height: 33px;
            }
        }
`;



