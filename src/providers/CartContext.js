import React from 'react'

export const CartContext = React.createContext({});

export const CartProvider = (props) =>{ 
  const [ cart, setCart ] = React.useState(0);
  
  React.useEffect(()=>{
    const cartItems = parseInt(localStorage.cart);
    if(cartItems){
      setCart(cartItems)  
    }
  }, [])

  return(
  <CartContext.Provider value={{ cart, setCart }}>
    {props.children}
  </CartContext.Provider>
  )
}
