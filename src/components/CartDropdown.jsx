import { useContext } from 'react';
import Button from "./Button";

import CartItem from './CartItem';

import { CartContext } from '@/contexts/CartContext';




const CartDropdown = () => {
const { cartItems } = useContext(CartContext);


  return (
    <div className="absolute w-64 h-40 flex flex-col p-5 border bg-white top-14 right-5 z-50">
      <div className="h-52  justify-center flex">
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
     
          {/* <span className='text-black text-center font-sans font-bold'>Your cart is empty</span> */}
        

      </div>
      <Button>
      <span className='text-white font-sans font-bold'>Checkout</span>
      </Button>
    </div>
  );
};

export default CartDropdown;
