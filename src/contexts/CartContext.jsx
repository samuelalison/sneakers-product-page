import { createContext, useState, useContext } from "react";
import { ProductsContext } from '@/contexts/ProductContext';

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addToCart: () => {}
});



export const CartProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            // Check if the product is already in the cart
            const existingCartItemIndex = cartItems.findIndex(item => item.id === productId);
            if (existingCartItemIndex !== -1) {
                // If it's already in the cart, update the quantity
                setCartItems(prevCartItems => {
                    const updatedCartItems = [...prevCartItems];
                    updatedCartItems[existingCartItemIndex].quantity += 1;
                    return updatedCartItems;
                });
            } else {
                // If it's not in the cart, add it as a new item
                setCartItems(prevCartItems => [...prevCartItems, { ...productToAdd, quantity: 1 }]);
            }
        }
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addToCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
