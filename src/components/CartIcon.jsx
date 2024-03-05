import { CartContext } from '@/contexts/CartContext';
import { useContext } from 'react';


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cursor-pointer" onClick={toggleIsCartOpen}>
       <img src='icon-cart.svg' />  
      {/* <span className="absolute text-xs font-bold bottom-12">{cartCount}</span> */}
    </div>
  );
}

export default CartIcon;
