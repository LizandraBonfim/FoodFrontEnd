import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.section`

    margin-top: 2rem;

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    li{
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto ;
        background: #fff;
        padding: 3px;
        border-radius: .4rem;
        cursor: pointer;

        div{
            line-height: 3;
        }

        strong{
            text-transform: uppercase;
            margin-bottom: 1rem;
        }

        @media(max-width: 60rem){
            strong{
                word-break: break-all;
                text-transform: capitalize;
                font-size: 15px;
            }
        }

        
    
    }

    @media(max-width: 60rem){
        ul{
            grid-template-columns: 1fr;

            li div{
            line-height: 2;
        }
        }
    }
`;

export const DisplayFlex = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        align-items: center;

        button {
            position: absolute;
            top: 106px;
            right: 39px;
            z-index: 1000;
            background: none;
            border: none;
            cursor: pointer;
        }

`;

const animeTop = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`

export const AnimeTop = styled.div`
  opacity: 0;
  transform: translateX(25px);
  animation: ${animeTop} .5s forwards;

`;



export const HeaderContainer = styled.section`

        background: #fff;
        /* padding: 3px; */
        border-radius: .4rem;
        margin-top: 2rem;

        >div{
            box-shadow: 0px 1px 0 rgba(0 ,0,0,0.2);
            padding: 1rem ;

        }
        
         nav{
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
            box-shadow: 0px -1px 0 rgba(0 ,0,0,0.2);

            a{

                padding: .8rem;

                &.active{    
                    border-bottom: 2px solid #c04134;
                    }
            }
            
        }
        

       
`;

export const Section = styled.section`

    margin-top: 1rem;
    display: grid;
    grid-template-columns: 202px 1fr;
    gap: 4rem;
    align-items: center;
    padding: 1rem;

    span  > p > strong{
        display: block;
        line-height: 2;
    }

    @media(max-width: 60rem){
        grid-template-columns: 1fr;
        gap: 0rem;


    }
    
`;

export const RestauranteContainer = styled.section`
    display: grid;
    grid-template-columns: 2fr minmax(50px, 1fr);
    margin-top: 1rem;
    gap: 1rem;

    position: relative;
    z-index: 2;

    img{
        width: 11rem;
        border-radius: .5rem 0 0 .5rem;
    }

    div {
        

        section + section {
            margin-top: 1rem;
        }
    }

    @media(max-width: 60rem){
        grid-template-columns: 1fr;

        img{
            height: 100%;
        }

        div {line-height: 1; margin-top: 1rem;}
        
    }

    
`;

export const Div = styled.div`
    line-height: 2;
    margin-left: 3rem;

    @media(max-width: 60rem){
        margin-left: 0;

    }
`;

export const RestauranteSection = styled.section`
    
    border-radius: .5rem;
    background: #fff;
    display: flex;

    /* div{
        line-height: 2;
        margin-left: 3rem;
    } */

    button{
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 1rem;
        padding: 5px;
        transition: .2s;
        
        &:hover{
            background: #1fd61f;
            border-radius: 5px;
        }
    }

    @media(max-width: 60rem){
        padding: 0rem;
        button {margin-bottom: 0.8rem;}

    }

`;

export const ButtonMobileMenu = styled.nav`

        z-index: 1000;
    button{
        border-radius: 58%;
        background: #eee;
        width: 44px;
        height: 41px;
        position: fixed;
        bottom: 2rem;
        right: 1rem;
        border: none;
        outline: none;
        cursor: pointer;

        span{
            color: red;
            padding-left: .2rem;
            font-weight: bold;
        }

    }
   
`;



export const Reviews = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2rem;

    img{
        width: 50px;
    }


    > div{
        padding: 1rem;
        border-radius: .5rem;
        background: #fff;
        color: #333;
    
        >div{
        margin-bottom: 1rem;
        border-bottom: 1px solid #eee;
        }
    }

    @media(max-width:60rem){
        grid-template-columns: 1fr;
        
    }

    

  
`;

export const Card = styled.section`

   width: 100%;
   display: block;
   background: #fff;
   border-radius: .5rem;

   div:first-child{
        box-shadow: 0px 1px 0 rgba(0 ,0,0,0.2);

   }
   
   h1{
        text-align: center;
        font-size: 1.3rem;
   }

   span{
       padding: 1rem;
   }

   aside{

       li + li{
            border-top: 1px solid #eee;
        }

       div{
            margin: 0 1rem;
            padding: 5px 1rem;
            display: flex;
            justify-content: space-between;
       }
       button{
            width: 100%;
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

            &:first-child{
                background: #dd4b39;
                margin-right: 1rem;
            }

            &:hover{
                opacity: .6;
            }
       }
   }

   @media(max-width: 60rem){
        button{font-size: 12px;font-weight: bold;}
    }
`;

