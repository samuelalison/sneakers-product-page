import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Sidebar from './Sidebar';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';


import { CartContext } from '@/contexts/CartContext'

export const Navbar = () => {
  const {isCartOpen} = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(null);

  const toggle = () => {
    setIsOpen(prevState => !prevState); 
  };


  return (
    <header className="w-full mx-auto px-14 mb-8">
      <div className="mt-4 mb-8">
      <div className='flex mt-4 justify-between '>
        
      <div className='flex items-center gap-4'>
      <div className="md:hidden">
        <button onClick={toggle}>
          <Image src="icon-menu.svg" width={15} height={20} alt="Menu" />
        </button>
        </div>
        <div >
          <a>
            <Image alt='logo' src='logo.svg' width={120} height={100} className='md:pb-2'  />
          </a>
        </div>
        <div className="hidden md:block">
        <ul className="flex cursor-pointer text-neutral-grayish-blue ">
        <li className="px-4 hover:text-neutral-black">Collections</li>
        <li className="px-4 hover:text-neutral-black">Men</li>
        <li className="px-4 hover:text-neutral-black">Women</li>
        <li className="px-4 hover:text-neutral-black">About</li>
        <li className="px-4 hover:text-neutral-black">Contact</li>
      </ul>
        
        </div>
        </div>

        <div className="flex gap-6 items-center">
          <div>
            <CartIcon /> 
            </div>       
            {isCartOpen && <CartDropdown />}
          <div>

          <Image alt='avatar' width={15} height={20} src='/image-avatar.png' className='h-6 w-6' />
          </div>
          </div>
          
        </div>
          <div className='border-b my-6 hidden md:block'></div>

        <Sidebar isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  );
};
