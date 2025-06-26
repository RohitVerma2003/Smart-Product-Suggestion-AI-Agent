import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='w-full h-full'>
      <p>Name : {product.name}</p>
      <p>Price : ₹{product.price}</p>
      <img
        src={product.image}
        alt='Image Not Loaded...'
        width={200}
        height={200}
      />
      <div>
        Features :
        {product.features.map((ele, index) => (
          <>
            <p key={index}>-{ele}</p>
            <p> </p>
          </>
        ))}
      </div>
      <p>Discount : {product.discount}</p>
    </div>
  )
}

export default Product
