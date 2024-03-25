import React from 'react';

const Button = ({ children, onClick, disabled}) => {
  return (
    <div className='items-center justify-center flex'>
    <button className={`flex p-2 px-12 gap-4 rounded-md ${disabled ? 'bg-primary-pale' : 'bg-primary'}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  </div>
  );
}

export default Button;
