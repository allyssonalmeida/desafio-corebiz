import React from 'react'
import Home from "./components/Home/Home";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GlobalStyle from "./theme/GlobalStyle";
import { CartProvider } from "./providers/CartContext";

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </CartProvider>
  );
}

export default App;
