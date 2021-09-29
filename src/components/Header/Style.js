import  styled  from 'styled-components'

export const Wrapper = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 4fr 2fr;
    align-items: center;

    .menu-toggler{
      display: none;
    }
    & nav{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 12px;
    }
    .search input[type="text"]{
      height: 40px;
      width: 100%;
      border: none;
      border-bottom: 1px solid #7A7A7A;
      padding-right: 50px;
      padding-left: 20px;
      &:focus{
        outline: none;
      }
    }
    & button{
      background: transparent;
      margin-left: -40px;
      border: none;
      vertical-align: middle;
      cursor: pointer;
      & svg{
        font-size: 1.5rem;
      }
    }
    & img{
      display: block;
      height: 35px;
    }

    & a{
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      color: #7A7A7A;
      font-size: .975rem;
      & svg{
        font-size: 1.5rem;
        color: #000;
      }
    }
    .cart-button{
      background: #F8475F;
      padding: 3px 7px;
      border-radius: 50px;
      color: #fff;
      font-size: .8rem;
    }

    @media(max-width: 1200px){
      grid-column: 1;
      display: grid;
      grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
      grid-template-rows: 50px 50px;
      align-items: center;
      justify-content: center;
      .menu-toggler{
        grid-column: 2;
        display: block;
        padding: 4px;
        align-self: end;
      }
      .menu, img{
        grid-row: 1;
        grid-column: 3;
      }
      & img{
        margin: 0 auto;
      }
      .menu{
        grid-column: 4;
        justify-content: end;
        .conta{
          visibility: hidden;
        }
      }
      .search{
        grid-column: 2/-2;
        grid-row; 2;
      }
    }
`