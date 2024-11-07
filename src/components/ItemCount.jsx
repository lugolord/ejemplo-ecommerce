/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { cartContext } from '../context/cartContext'

function ItemCount ({ detail }) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(cartContext)

  const handleAdd = () => setCount(count + 1)
  const handleSub = () => setCount(count - 1)

  const handleAddToCart = () => addToCart({...detail, qty: count })
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  )
}

export default ItemCount
