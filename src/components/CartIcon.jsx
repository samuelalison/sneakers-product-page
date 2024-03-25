import Image from 'next/image';
import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';


import iconCart from "../../public/icon-cart.svg";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cursor-pointer" onClick={toggleIsCartOpen}>
       <Image src={iconCart} alt='icon-cart' />  
      {/* <span className="absolute text-xs font-bold bottom-12">{cartCount}</span> */}
    </div>
  );
}

export default CartIcon;
