import React from 'react'

const Product = ({product}) => {
  return (
    <div>
        <div key={product.id}>
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.price}</p>
        </div>
    </div>
  )
}

export default Product;