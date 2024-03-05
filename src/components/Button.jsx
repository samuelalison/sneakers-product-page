import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <div className='items-center justify-center flex'>
      <button className="flex bg-primary p-2 px-12 gap-4 rounded-md" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
