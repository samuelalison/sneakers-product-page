import React, { useState, useContext, useEffect } from 'react'; 
import { CartContext } from '@/contexts/CartContext';

const AddToCartButton = ({ children, onClick }) => {
  const { quantity } = useContext(CartContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if( quantity > 0){
        setIsButtonDisabled(true)
    } else {
        setIsButtonDisabled(false)
    }
  }, [quantity]); // Re-run effect whenever quantity changes

  return (
    <div className='items-center justify-center flex'>
      <button className={`flex p-2 px-12 gap-4 rounded-md ${quantity > 0 ? 'bg-primary-pale' : 'bg-primary'}`} onClick={onClick} disabled={isButtonDisabled}>
        {children}
      </button>
    </div>
  );
}

export default AddToCartButton;
