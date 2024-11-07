import { useCart } from '../context/cartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Cart () {
  const { cart, getTotal } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const form = e.target
    const [name, email, phone] = form

    const order = {
      buyer: { name: name.value, email: email.value, phone: phone.value },
      items: cart,
      date: serverTimestamp(),
      total: getTotal()
    }

    createOrder(order)
  }

  return (
    <div>
      {cart.map(prod => (
        <div key={prod.id}>
          <p>{prod.title}x{prod.qty}</p>
        </div>
      ))}
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='name' required />
          <input type="email" placeholder='pepito@gmail.com' required/>
          <input type="text" placeholder='phone number' required />
          <button type='submit'>finalizar compra</button>
        </form>
      </div>
    </div>
  )
}

export default Cart
