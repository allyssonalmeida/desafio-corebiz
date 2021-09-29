import  styled  from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2;
  width: 100%;

  & h2{
    font-weight: 900;

    &::after{
      content: '';
      display: block;
      height: 5px;
      width: 70px;
      background: #C0C0C0
    }
  }
  & .splide__arrow{
    background: transparent;
    font-size: 2rem;
    margin-left: -100px;
    margin-right: -100px;
  }

  @media(max-width: 1200px){
    grid-column: 1;
    width: 100vw;
    padding: 20px;
  }
`