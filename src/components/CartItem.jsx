import React from 'react'

const CartItem = ({ cartItem }) => {
const {name, quantity } = cartItem;

  return (
    <div>
      <h2 className='text-black-300'>{name}</h2>
      <p >{quantity}</p>
    </div>
  )
}

export default CartItem