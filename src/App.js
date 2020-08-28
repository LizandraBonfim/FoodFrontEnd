import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, MainContainer } from './styles.js';
import ContainerRestaurante from './RestauranteContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import Rooouter from './pages/Restaurantes/rotas.js';
import Login from './pages/User/Login.js';
import FinalizarCompra from './pages/User/FinalizarCompra.js';
import Confirmacao from './pages/User/Confirmacao.js';


function App() {
  return (
    <BrowserRouter>
      <ContainerRestaurante>

        <GlobalStyle />
        <Header />

        <MainContainer>

          <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="finalizar" element={<FinalizarCompra />} />
            <Route path="confirmar" element={<Confirmacao />} />
            <Route path="restaurantes/*" element={<Rooouter />} />

          </Routes>

        </MainContainer>

        <Footer />
      </ContainerRestaurante>
    </BrowserRouter>
  );
}

export default App;
