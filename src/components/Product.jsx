import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import AddToCartButton from './AddToCartButton';

import minus from "../../public/icon-minus.svg";
import plus from "../../public/icon-plus.svg";
import cart2 from "../../public/icon-cart2.svg";
import imageURL from "../../public/image-product-1.jpg";


import { ProductsContext } from '@/contexts/ProductContext';
import { CartContext } from '@/contexts/CartContext';

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart, decrementCartItem } = useContext(CartContext);
  // const [quantity, setQuantity] = useState(0);
  const {quantity, setQuantity} = useContext(CartContext);
  

 

  const handleAddToCart = () => {
      setQuantity(q => q + 1);
      addToCart(products[0].id);
     
  };


  const handleIncrementQuantity = () => {
    setQuantity(q => q + 1)
    addToCart(products[0].id);
  
  };

  const handleDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
      decrementCartItem(products[0].id);
    }
   
  };



  return (
    <section className='md:px-36'>
      <div className='md:flex md:gap-24  items-center'>
        <div>
          {products.map((product) => (
            <Image key={product.id} src={imageURL} alt={product.name}  />
          ))}

          <div className="flex">
            <div className='hidden md:block'>
              <Image alt="" height={100} width={100} className='py-4 px-2 rounded-3xl w-[100px]' src="/image-product-1-thumbnail.jpg" />
            </div>
            <div className='hidden md:block'>
              <Image alt="" height={100}
                width={100} className='py-4 px-2 rounded-3xl' src="/image-product-2-thumbnail.jpg" />
            </div>
            <div className='hidden md:block'>
              <Image alt="" height={100} width={100} className='py-4 px-2 rounded-3xl' src="/image-product-3-thumbnail.jpg" />
            </div>
            <div className='hidden md:block'>
              <Image alt="" height={100} width={100} className='py-4 px-2 rounded-3xl' src="/image-product-4-thumbnail.jpg" />
            </div>
          </div>
        </div>

      


        

        <div className="px-4 py-10">
          <div><h3 className="text-primary font-bold font-sans">SNEAKER COMPANY</h3></div>
          <div className="mt-5"><h4 className="text-neutral-very-dark-blue font-bold text-4xl font-sans">Fall Limited Edition Sneakers</h4></div>
          <div className="mt-10"><p className="text-neutral-grayish-blue font-sans">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.</p></div>
          <div className="flex items-center  mt-10  justify-between md:items-start  lg:flex-col ">
          <div className="">
            <span className='text-neutral-very-dark-blue font-bold font-sans text-2xl'>$125.00</span>
            <button className='bg-primary-pale ml-4 rounded-md'><span className='font-sans text-primary m-2 font-bold'>50%</span></button>
          </div>
          <div>

            <span className='text-neutral-grayish-blue line-through'>$250.00</span>
          </div>
          </div>

          {/* add and substract btn with "add to cart btn" */}
          <div className="md:flex mt-5 gap-4 ">
            <div className="flex justify-center">
              <div><button className='bg-neutral-grayish-blue py-4 px-4'
                onClick={handleDecrementQuantity}
              ><Image alt="" className='min-w-fit' src={minus} /></button></div>

              <div className=''><button className='bg-neutral-grayish-blue py-1.5 px-4'><span className="">{quantity}</span></button></div>

              <div><button className='bg-neutral-grayish-blue py-3 px-4'
                onClick={handleIncrementQuantity}
              ><Image alt="" className="min-w-fit" src={plus} /></button></div>
            </div>


            {/* cart svg and "add to cart btn" */}
            <AddToCartButton onClick={handleAddToCart} 
            >
              <div>
                <Image alt="" src={cart2} className="min-w-fit" />
              </div>
              <div>
                <span className='text-white font-sans font-bold'>Add to cart</span>
              </div>
            </AddToCartButton>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Product;