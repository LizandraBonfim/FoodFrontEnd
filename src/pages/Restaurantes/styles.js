import styled from 'styled-components';

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

        
    
    }
`;

export const Content = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    
`;

export const RestauranteContainer = styled.section`
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 1rem;
    gap: 1rem;

    section{

    padding: .5rem;
    border-radius: .5rem;
    background: #fff;
    display: flex;
    }

    img{
        width: 11rem;
    }

    div{
        line-height: 2;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
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
        box-shadow: 0px 1px 0px rgba(0,0,0,0.3);
        }
    }

    

  
`;

export const Card = styled.section`    
   
`;