/* eslint-disable react/prop-types */
import ItemCount from './ItemCount'

function ItemDetail ({ detail }) {
  return (
    <div>
      <img src={detail?.thumbnail} style={{ width: 300 }} />
      <h1>{detail?.title}</h1>
      <p>{detail?.description}</p>
      <ItemCount detail={detail} />
    </div>
  )
}

export default ItemDetail
