import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, MainContainer } from './styles.js';
import ContainerRestaurante from './RestauranteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import Restaurantes from './pages/Restaurantes/Restaurante';
import RestauranteHeader from './pages/Restaurantes/RestauranteHeader.js';
import RestauranteAvaliacao from './pages/Restaurantes/RestauranteAvaliacao.js';
import Rooouter from './pages/Restaurantes/route.js';


function App() {
  return (
    <BrowserRouter>
      <ContainerRestaurante>

        <GlobalStyle />
        <Header />

        <MainContainer>

          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="restaurantes/*" element={<Rooouter />} />

            {/* <Route path="restaurantes" element={<Restaurantes />} />
            <Route path="restaurantes/:id" element={<RestauranteHeader />} />
            <Route path="restaurantes/:id/reviews" element={<RestauranteAvaliacao />} /> */}
          </Routes>

        </MainContainer>

        <Footer />
      </ContainerRestaurante>
    </BrowserRouter>
  );
}

export default App;
