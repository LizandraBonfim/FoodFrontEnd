import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, MainContainer } from './styles.js';
import ContainerRestaurante from './RestauranteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import Restaurantes from './pages/Restaurantes/Restaurante';
import Rooouter from './pages/Restaurantes/rotas.js';


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

          </Routes>

        </MainContainer>

        <Footer />
      </ContainerRestaurante>
    </BrowserRouter>
  );
}

export default App;
