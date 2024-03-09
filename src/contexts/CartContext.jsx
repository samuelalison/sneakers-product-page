import { createContext, useState, useContext } from "react";
import { ProductsContext } from '@/contexts/ProductContext';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToCart: () => {},
    removeCartItem: () => {},
    decrementCartItem: () => {}
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
                  updatedCartItems[existingCartItemIndex].quantity += quantity;
                  return updatedCartItems;
              });
          } else {
              // If it's not in the cart, add it as a new item with the given quantity
              setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity }]);
          }
          // Reset quantity after adding to cart
          setQuantity(1);
      }
  };
  


    const decrementCartItem = (productId) => {
        // Check if the product is in the cart
        const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
        if (existingCartItemIndex !== -1) {
          // If it's in the cart and quantity is greater than 1, decrement the quantity
          if (cartItems[existingCartItemIndex].quantity > 1) {
            setCartItems(prevCartItems => {
              const updatedCartItems = [...prevCartItems];
              updatedCartItems[existingCartItemIndex].quantity -= 1;
              return updatedCartItems;
            });
          } else {
            // If quantity is 1, remove the item from the cart
            removeCartItem(productId);
          }
        }
      };
      

    const removeCartItem = (productId) => {
        // Check if the product is in the cart
        const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
        if (existingCartItemIndex !== -1) {
          // If it's in the cart, remove it from the cart
          setCartItems(prevCartItems => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(existingCartItemIndex, 1);
            return updatedCartItems;
          });
        }
      };

  
    const value = { isCartOpen, setIsCartOpen, cartItems, addToCart, 
        
        removeCartItem, decrementCartItem, quantity, setQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
