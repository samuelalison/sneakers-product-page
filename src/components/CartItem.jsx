import { CartContext } from '@/contexts/CartContext';
import React, { useContext } from 'react'
import Image from 'next/image';

import { ProductsContext } from '@/contexts/ProductContext';


const CartItem = ({ cartItem }) => {
  const { products } = useContext(ProductsContext);
const {quantity, removeCartItem} = useContext(CartContext);
const {setQuantity} = useContext(CartContext);
const {name, imageURL, price } = cartItem;


const handleItemRemoval = () => {
  setQuantity(q => q = 0)
  removeCartItem(products[0].id);
};

  return (
    <div className=' gap-4'>


<div className='flex gap-2'>
    <div className=''>
      <Image src={imageURL} alt='unknown' width={50} height={50}/>
    </div>

  
    <div className=''>
      <h2 className='text-black-300 text-neutral-grayish-blue font-sans'>{name}</h2>
    </div>

<div className="cursor-pointer" onClick={handleItemRemoval}>
  <Image alt='delete-icon'  src="/icon-delete.svg" width={30} height={30} />
</div>

    </div>

    
    
    <div className='flex gap-2 justify-center'>
      <p>${price}</p>
      <p>*</p>
      <p>{quantity}</p>
      <p><span>$</span>{price * quantity}</p>
    </div>
    </div>
  )
}

export default CartItem