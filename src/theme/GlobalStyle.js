import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  a{
    text-decoration: none;
  }
  body{
    margin: 0;
    padding: 0;
    background:#E5E5E5
  }
  .grid{
    display: grid;
    grid-template-columns: 1fr 1200px 1fr;
    grid-gap: 0;
    justify-content: center;

    .wrapper{
      grid-column: 2;
      display: grid;
      grid-template-columns: 1fr 3fr 1fr 1fr;
      justify-content: space-between;
    }

    @media(max-width: 1200px){
      grid-template-columns: 1fr;
      .wrapper{
        grid-column: 1;
        grid-template-columns: 100px 1fr 100px;
        grid-template-rows: 50px 50px;
        & img{
          grid-column: 2;
          grid-row: 1;
          width: 100px;
        }
        & search{
          grid-column: 1 / -1;
          grid-row: 2;
        }
      }
    }
  }

  header{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px;
    background: #fff;
  }
  .logo{
    color: #000;
  }
  .banner{
    height: 300px;
    & img{
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 300px;
    }
  }
  .splide__pagination__page{
    opacity: 1;
  }
  .splide__pagination__page.is-active{
    background: #F8475F;
  }
  .slider-caption{
    z-index: 999;
    color: #fff;
    position: absolute;
    top: 25%;
    left: 15%;

    & p {
      padding-bottom: 0;
      margin-bottom: 0;
      font-size: 1.4rem;
    }
    & h1{
      margin: 0;
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 2rem;
    }
  }
  .produtos_wrapper{
    justify-content: center;
    align-items: center;
    background: #fff;
    padding-bottom: 50px;
  }
  .produto-item{
    display: flex;
    flex-direction: column;
  }
  .produto-info{
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    align-items: center;
    text-align: center;
    min-height: 150px;

    & h3{
      font-size: .875rem;
      color:#7A7A7A;
      font-weight: 600;
      text-align: center;
      padding: 0;
      margin: 0;
    }
    & button{
      text-transform: uppercase;
      border: none;
      border-radius: 5px;
      color: #fff;
      background: #000;
      padding: 10px 30px;
      cursor: pointer;

      &:hover{
        background: #F8475F;
      }
    }
  }
  .produto-item:hover{
    cursor: pointer;
  }
  .produto-item:hover .produto-info{
    background: #E6E8EA;
    
  }
  .price{
    font-weight: 700;
    font-size: 1.1rem;
  }
  .stars{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    & svg{
      color: #F8475F;
      font-size: .75rem;
    }
  }
  .listprice{
    font-size: .875rem;
    color:#7A7A7A;
  }
  .empty{
    padding: 10px;
  }
  .on-sale{
    background: #F8475F;
    color: #fff;
    padding: 30px;
    width: 100px;
    height: 100px;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    text-align: right;
    position: absolute;
    top: 0;
    right: 0;
    & span{
      position: absolute;
      top: 25%;
      right: 15px;
      font-weight: 900;
      font-size: .9rem;
    }
  }
  .footer{
    padding: 20px;
    background: #000;
    color: #fff;
  }
  .contato, .marcas{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & a{
      background: #fff;
      width: 160px;
      text-align: center;
      padding: 10px;
      border-radius: 5px;
      text-transform: uppercase;
      color: #000;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: .6rem;
      font-weight: 600;
      & svg{
        font-size: 1.5rem;
      }
    }
  }

  @media(max-width: 1200px){
      .splide__arrows{
        display: none!important;
      }
      .conta{
        visibility: hidden;
      }
      .cart{
        width: 100px;
        gap: 0;
        justify-content: end;
      }
    }
    .produtos{
      width: 100%;
      .splide__pagination{
        bottom: -20px;
      }
    }
    .produto-info{
      gap: 5px;

      & h3{
        font-size: .8rem;
      }
    }
    .banner{
      height: 240px;
      & img{
        object-fit: cover;
        object-position: center center;
        width: 100%;
        height: 240px;
      }
      .slider-caption{
        top: 15%;
        left: 10%;
      }
    }
  }
`

export default GlobalStyle;
