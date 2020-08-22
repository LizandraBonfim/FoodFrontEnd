import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Carrinho() {
    return (
        <section>
            <FaShoppingCart size={20} color={'#333'} style={{ paddingRight: '2px' }} />
                Carrinho
        </section>
    )
}

export default Carrinho;
