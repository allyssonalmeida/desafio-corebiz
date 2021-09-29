import React from 'react';
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {BsStar, BsStarFill } from 'react-icons/bs';
import { CartContext } from '../../providers/CartContext';
import { Wrapper } from './Style';
const Produtos = ({title}) => {

  const {cart, setCart} = React.useContext(CartContext)
  const [produtos, setProdutos] = React.useState({})
  const [doneLoading, setDoneLoading] = React.useState(false)

  const formatNumber = (number) =>{
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number/100)
  }

  React.useEffect(()=>{
    axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(response => {
      setProdutos(response.data)
      setTimeout(()=>{setDoneLoading(true)}, 1500)
    })
  },[])

  function handleClick(){
    let newcart = cart + 1;
    setCart(newcart)
    localStorage.setItem('cart', newcart);
  }

  return (
    <section className="grid produtos_wrapper">
      <Wrapper>
        <h2>{title}</h2>
        <Splide className="produtos"
          options={ {
            pagination: false,
            arrows: true,
            perPage   : 4,
            perMove   : 1,
            gap: 20,
            lazyload: true,
            breakpoints: {
              arrows: false,
              1200: {
                arrows: false,
                pagination: true,
                perPage: 3,
              },
              640: {
                arrows: false,
                pagination: true,
                perPage: 2,
              }
            }
          } }
        >
          {doneLoading ? produtos.map(({productId, imageUrl, productName, stars, listPrice, price, installments }) => (
            <SplideSlide className="produto-item" key={productId}>
              <img src={imageUrl} alt={productId}/>
              {listPrice ? <div className="on-sale"><span>OFF</span></div>: ''}
              <div className="produto-info">
                <h3>{productName}</h3>
                <span className={`stars`}>
                  {stars > 0 ? <BsStarFill /> : <BsStar /> }
                  {stars > 1 ? <BsStarFill /> : <BsStar /> }
                  {stars > 2 ? <BsStarFill /> : <BsStar /> }
                  {stars > 3 ? <BsStarFill /> : <BsStar /> }
                  {stars > 4 ? <BsStarFill /> : <BsStar /> }
                </span>
                {listPrice?
                <span className="listprice">
                  de {formatNumber(listPrice)}
                </span>
                : <div className="empty"></div>}
                <span className="price">
                  por {formatNumber(price)}
                </span>
                {installments.length > 0 ?
                <span className="listprice">
                  ou em até  {installments[0].quantity}x de {formatNumber(installments[0].value)}
                </span>
                : <div className="empty"></div>}

                <button onClick={handleClick}>Comprar</button>
              </div>
            </SplideSlide>
          )): <span>Carregando...</span>}
          
        </Splide>
      </Wrapper>
    </section>
  )
}

export default Produtos
