import styled from 'styled-components';

export const HeaderContainer = styled.header`
    
    box-shadow: 1px 1px 0 rgba(0 ,0,0,0.2);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: white;
    top: 0px;
    
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        width: 63px;
        height: 63px;
    }
`;
