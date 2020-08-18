import styled from 'styled-components';
import img from '../../assets/avaliacao.ico';

export const HomeContainer = styled.section`

    margin-top: 2rem;

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    li{
        display: grid;
        grid-template-columns: 1fr 1fr auto ;
        background: #fff;
        padding: 3px;
        border-radius: .4rem;

        span p{
            align-items: center;
            display: flex;
        &::after{
                content: '';
                margin-left: .2rem;
                background: url(${img}) no-repeat center center;
                display: block;
                width: 31px;
                height: 33px;
            }
        }
    
    }
`;

export const Content = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
`;
