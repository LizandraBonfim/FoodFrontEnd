import React, { createContext, useState } from 'react';

export const RestauranteContext = createContext();

function ContainerRestaurante({ children }) {

    const [restaurante, setRestaurante] = useState();



    return <RestauranteContext.Provider value={{ setRestaurante, restaurante }}>
        {children}
    </RestauranteContext.Provider>
}

export default ContainerRestaurante;
