import React from 'react';

// import { CartContext } from '@/contexts/CartContext';

const Button = ({ children, onClick, disabled}) => {
  // const {quantity} = useContext(CartContext);


  return (
    <div className='items-center justify-center flex'>
    <button className={`flex p-2 px-12 gap-4 rounded-md ${disabled ? 'bg-primary-pale' : 'bg-primary'}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  </div>
  );
}

export default Button;
