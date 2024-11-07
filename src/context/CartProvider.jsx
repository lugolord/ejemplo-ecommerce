/* eslint-disable react/prop-types */
import { cartContext } from './cartContext'
import { useState } from 'react'

function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = item => setCart([...cart, item])

  const getQuantity = () => {
    const qtyOnly = cart.map(item => item.qty)
    const total = qtyOnly.reduce((acc, current) => acc + current, 0)
    return total
  }

  const getTotal = () => {
    const priceOnly = cart.map(item => item.price*item.qty)
    const total = priceOnly.reduce((acc, current) => acc + current, 0)
    return total
  }

  const clearCart = () => setCart([])

  return (
    <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartProvider
