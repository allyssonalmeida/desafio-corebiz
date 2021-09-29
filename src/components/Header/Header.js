import React from 'react';
import Logo from '../../assets/corebiz-logo.png';
import {FaRegUser, FaBars } from 'react-icons/fa';
import { HiOutlineShoppingCart, HiSearch } from 'react-icons/hi';
import { CartContext } from '../../providers/CartContext';
import { Wrapper } from './Style';
const Header = () => {

  const { cart } = React.useContext(CartContext)

  return (
    <header className="grid">
      <Wrapper>
        <a href="/#menu" className="menu-toggler"><FaBars /></a>
        <img src={Logo} alt="Corebiz" />
        <div className="search">
          <input type="text" id="busca" placeholder="O que está procurando?"/>
          <button ><HiSearch /></button>
        </div>
        <nav className="menu">
          <a href="/#conta" className="conta">
            <FaRegUser /> Minha Conta
          </a>
          <a href="/#cart" className="cart">
            <HiOutlineShoppingCart /> <span className="cart-button">{cart}</span>
          </a>
        </nav>
      </Wrapper>
    </header>
  )
}

export default Header
