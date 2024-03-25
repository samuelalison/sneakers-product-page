import { CartContext } from '@/contexts/CartContext';
import React, { useContext } from 'react'
import Image from 'next/image';

const CartItem = ({ cartItem }) => {
const {quantity} = useContext(CartContext)
const {name, imageURL, price } = cartItem;

  return (
    <div className='flex gap-4'>

    <div className=''>
      <Image src={imageURL} alt='unknown' width={50} height={50}/>
    </div>

    <div className=''>
    <div className=''>
      <h2 className='text-black-300 text-neutral-grayish-blue font-sans'>{name}</h2>
    </div>


    <div className='flex gap-2'>
      <p>${price}</p>
      <p>*</p>
      <p>{quantity}</p>
      <p><span>$</span>{price * quantity}</p>
    </div>
    </div>
    </div>
  )
}

export default CartItem