import React from 'react';
import { GlobalStyle, MainContainer } from './styles.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index.js';
import Restaurantes from './pages/Restaurantes/index.js';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <MainContainer>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/restaurantes" component={Restaurantes} />
        </Switch>

      </MainContainer>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
