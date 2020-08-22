import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RestauranteHeader from './RestauranteHeader';
import RestauranteAvaliacao from './RestauranteAvaliacao';
import Restaurante from './Restaurante';
import RestauranteMenu from './RestauranteMenu';

function route() {



    return (

        <div>

            <RestauranteHeader />
            <Routes>

                <Route path="/" element={<Restaurante />} />
                <Route path="/:id/menu" element={<RestauranteMenu />} />
                <Route path="/:id/reviews" element={<RestauranteAvaliacao />} />

            </Routes>
        </div>
    )
}

export default route
