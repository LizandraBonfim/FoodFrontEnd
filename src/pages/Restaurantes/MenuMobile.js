import React from 'react'
import { useState } from 'react';
import useMedia from '../../hooks/useMedia';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { ButtonMobileMenu } from './styles';
import { RestauranteContext } from '../../RestauranteContext';
import { useContext } from 'react';


function MenuMobile() {

    const { produtos } = useContext(RestauranteContext);
    const [mobile, setMobile] = useState(false);


    const eMobile = useMedia('(max-width: 40rem)');

    const { pathname } = useLocation();

    useEffect(() => {

        setMobile(false);

    }, [pathname]);

    return (
        <>
            {eMobile && (
                <ButtonMobileMenu style={{ zIndex: '1000' }}>
                    <button
                        aria-label="Menu"
                        onClick={() => setMobile(!mobile)}>
                        <FaShoppingCart />
                        <span>{produtos.length}</span>
                    </button>


                </ButtonMobileMenu>
            )}
        </>
    )
}

export default MenuMobile
