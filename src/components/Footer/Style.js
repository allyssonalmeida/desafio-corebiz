import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  & h2::after{
    content: '';
    display: block;
    height: 4px;
    width: 50px;
    margin-top: 5px;
    background: #fff;
  }

  & ul{
    list-style-type: none;
    padding: 0;
    font-weight: 400;
    
    & li{
      padding: 3px;
      font-size: .9rem;
    }
  }

  @media(max-width: 768px){
    grid-column: 1;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    .contato{
      width: 100%;
    }
    .marcas{
      width: 100%;
      padding: 20px 0;
      & ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
`