import React, { createContext, useState } from 'react';

export const RestauranteContext = createContext();

function ContainerRestaurante({ children }) {

    const [restaurante, setRestaurante] = useState();

    const [produtos, setProdutos] = useState([]);

    console.log('produtos', produtos)



    return <RestauranteContext.Provider value={{ setRestaurante, restaurante, setProdutos, produtos }}>
        {children}
    </RestauranteContext.Provider>
}

export default ContainerRestaurante;
