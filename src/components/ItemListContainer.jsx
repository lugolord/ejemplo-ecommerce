import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getItems, getCategoryItems } from '../firebase/db'
import ItemList from './ItemList'
import Loader from './Loader'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { id } = useParams()

  useEffect(() => {
    if (!id) {
      getItems()
        .then(res => setItems(res))
    } else {
      getCategoryItems(id)
        .then(res => setItems(res))
    }
  }, [id])

  return (
    <>
      {items.length > 0 ? <ItemList items={items} /> : <Loader />}
    </>
  )
}

export default ItemListContainer
