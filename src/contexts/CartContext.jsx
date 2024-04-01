import { createContext, useState, useContext } from 'react';
import { ProductsContext } from '@/contexts/ProductContext';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addToCart: () => { },
  removeCartItem: () => { },
  // deleteCartItem: () => { },
  decrementCartItem: () => { },
  
});

export const CartProvider = ({ children }) => {
  const { products } = useContext(ProductsContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        // Check if the product is already in the cart
        const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
        
        if (existingCartItemIndex !== -1) {
            // If it's already in the cart, update the quantity
            setCartItems(prevCartItems => {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingCartItemIndex].quantity++;
                return updatedCartItems;
              });
              
        } else {
            // If it's not in the cart, add it as a new item
            setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
        }
    }
    
};


  const decrementCartItem = (productId) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
    if (existingCartItemIndex !== -1 && cartItems[existingCartItemIndex].quantity > 1) {
      setCartItems(prevCartItems => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingCartItemIndex].quantity--;
        return updatedCartItems;
      });
    } else {
      removeCartItem(productId);
    }
  };

  const removeCartItem = (productId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
  };

  // const deleteCartItem = (itemToDelete) => {
  //   const updatedCartItems = cartItems.map(item => {
  //     if (item === itemToDelete) {
  //       return { ...item, quantity: 0 };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedCartItems);
  // }

  const value = { isCartOpen, setIsCartOpen, cartItems, addToCart, removeCartItem, decrementCartItem, quantity, setQuantity};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
