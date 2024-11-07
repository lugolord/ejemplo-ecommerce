import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

function CartWidget () {
  const { getQuantity } = useCart()

  return (
    <Button as={Link} to='/cart' variant="outline-light">
      Cart <Badge bg="secondary">{getQuantity()}</Badge>
    </Button>
  )
}

export default CartWidget
