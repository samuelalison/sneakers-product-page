import { createContext, useState, useContext } from 'react';
import { ProductsContext } from '@/contexts/ProductContext';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addToCart: () => { },
  removeCartItem: () => { },
  decrementCartItem: () => { },
});

export const CartProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId, quantityToAdd) => {

    const productToAdd = products.find(product => product.id === productId);
    if (!productToAdd) {
      return;
    }

    const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
    if (existingCartItemIndex !== -1) {
      setCartItems(prevCartItems => {
        const updatedCartItems = prevCartItems.map((item, index) =>
          index === existingCartItemIndex ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
        return updatedCartItems;
      });
    } else {
      setCartItems(prevCartItems => {
        const newCartItems = [...prevCartItems, { ...productToAdd, quantity: quantityToAdd }];
        return newCartItems;
      });
    }
  };

  const decrementCartItem = (productId) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
    if (existingCartItemIndex !== -1 && cartItems[existingCartItemIndex].quantity > 1) {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingCartItemIndex].quantity -= 1;
        return updatedCartItems;
      });
    } else {
      removeCartItem(productId);
    }
  };

  const removeCartItem = (productId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart, removeCartItem, decrementCartItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
