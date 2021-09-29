import React from 'react'
import Corebiz from '../../assets/logo-corebiz-global.svg'
import VTEX from '../../assets/vtex.png'
import { HiOutlineMail } from 'react-icons/hi'
import { FaHeadset } from 'react-icons/fa'
import { Wrapper } from './Style'

const Footer = () => {
  return (
    <footer className="grid footer">
      <Wrapper>
      <div className="endereco">
        <h2>Localização</h2>
        <ul>
          <li>Avenida Andrômeda, 2000. Blocl 6 e 8</li>
          <li>Alphavile SP</li>
          <li>brasil@corebiz.ag</li>
          <li>+55 11 3090 1039</li>
        </ul>
      </div>
      <div className="contato">
        <a href="#contato"><HiOutlineMail /> Entre em Contato</a>
        <a href="#faleconosco"><FaHeadset /> Fale com o nosso<br /> consultor online!</a>
      </div>
      <div className="marcas">
        <ul>
          <li><div>Created by</div><img src={Corebiz} alt="Created by Corebiz" /></li>
          <li><div>Powered by</div><img src={VTEX} alt="Powered by VTEX" /></li>
        </ul>
      </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
