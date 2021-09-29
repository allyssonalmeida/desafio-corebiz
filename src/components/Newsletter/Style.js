import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2;
  padding: 30px 10px;
  & h2{
    text-align: center;
  }
  & form{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    & input{
      height: 50px;
      width: 300px;
      border-radius: 5px;
      border: none;
      padding-left: 10px;

      &::placeholder{
        font-weight: 700;
      }
      &:focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
    & button{
      border: none;
      color: #fff;
      border-radius: 5px;
      height: 50px;
      width: 150px;
      font-weight: 700;
      background: #000;
      &:hover{
        cursor: pointer;
        background: #333333;
      }
    }
  }
  .error{
    &:focus{
      border: 1px solid #D7182A;
    }
    border: 1px solid red;
  }

  @media(max-width: 768px){
    grid-column: 1;
    & form{
      flex-direction: column;
      gap: 10px;

      & input, button{
        width: 100%;
        height: 50px;
      }
    }
  }
`

export const Alert = styled.div`
  color: #D7182A;
  padding: 5px;
  width: 100%;
`

export const Message = styled.div`
  text-align: center;
  & h3{
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  & p{
    font-size: .9rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }

  & button{
    width: 350px;
    padding: 15px;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
  }


  & p{
    font-size: 0.9rem;
  }
`