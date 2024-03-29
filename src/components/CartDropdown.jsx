import { useContext } from 'react';
import Button from "./Button";

import CartItem from './CartItem';

import { CartContext } from '@/contexts/CartContext';
import { ProductsContext } from '@/contexts/ProductContext';



const CartDropdown = () => {
const { products } = useContext(ProductsContext);
const { cartItems, quantity, setQuantity, removeCartItem } = useContext(CartContext);

const handleCartCheckout = () => {
  setQuantity(q => q = 0)
  removeCartItem(products[0].id);
};

  return (
    <div className="absolute w-64 h-40 flex flex-col p-5 border bg-white top-14 right-5 z-50">
    <div className="h-52  justify-center flex">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <span className='text-black text-center font-sans font-bold'>Your cart is empty</span>
      )}
    </div>
    {quantity === 0 ? "" : 
    <Button onClick={handleCartCheckout}>
      <span className='text-white font-sans font-bold'>Checkout</span>
    </Button>}
  </div>
  );
};

export default CartDropdown;
