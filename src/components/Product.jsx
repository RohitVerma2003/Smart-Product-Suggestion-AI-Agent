import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='w-full h-full'>
      <p className='pb-2'>Name : {product.name}</p>
      <p className='pb-2'>Price : ₹{product.price}</p>
      <img
        src={product.image}
        alt={"No Image Listed"}
        width={200}
        height={200}
        onError={(e)=>e.target.style.display = 'none'}
      />
      <div className='pb-2'>
        Features :
        {product.features.map((ele, index) => (
          <>
            <p key={index}>-{ele}</p>
            <p> </p>
          </>
        ))}
      </div>
      <p className='pb-2'>Discount : {product.discount}</p>
    </div>
  )
}

export default Product
