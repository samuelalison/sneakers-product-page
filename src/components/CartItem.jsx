import React from 'react'

const CartItem = ({ cartItem }) => {
const {name, quantity, imageURL, price } = cartItem;

  return (
    <div className='flex gap-4'>

    <div className=''>
      <img src={imageURL} alt='' className='w-[50px] h-[50px]'/>
    </div>

    <div className=''>
    <div className=''>
      <h2 className='text-black-300 text-neutral-grayish-blue font-sans'>{name}</h2>
    </div>


    <div className='flex gap-2 '>
      <p>${price}</p>
      <p>*</p>
      <p >{quantity}</p>
    </div>
    </div>
    </div>
  )
}

export default CartItem