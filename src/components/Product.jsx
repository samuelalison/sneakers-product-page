// import React, { useContext } from 'react'
// import Button from './Button'
 
// import { ProductsContext } from '@/contexts/ProductContext' 






// const Product = () => {
//   const {products} = useContext(ProductsContext);

 

//   return (
//     <section className='md:px-36'> 
//         <div className='md:flex md:gap-24 items-center'>
//             <div className="">
//             {products.map((product) => (
//         <img key={product.id} src={product.image}/>
//       ))}

             

//                 {/* <img className='px-0 md:rounded-xl'  src={products.image}/> */}



            //     <div className="flex">
            //       <div className='hidden md:block'> 
            //         <img className='py-4 px-2 rounded-3xl' src="image-product-1-thumbnail.jpg" />
            //       </div>
            //       <div className='hidden md:block'>
            //         <img  className='py-4 px-2 rounded-3xl'  src="image-product-2-thumbnail.jpg" />
            //       </div>
            //       <div className='hidden md:block'>
            //         <img   className='py-4 px-2 rounded-3xl' src="image-product-3-thumbnail.jpg" />
            //       </div>
            //       <div className='hidden md:block'>
            //         <img  className='py-4 px-2 rounded-3xl' src="image-product-4-thumbnail.jpg" />
            //       </div>
            //     </div>
            // </div>

            // <div>
//                 <div><h3 className="text-primary font-bold font-sans">SNEAKER COMPANY</h3></div>

//                <div className="mt-5"><h4 className="text-neutral-very-dark-blue font-bold text-4xl font-sans">Fall Limited Edition Sneakers</h4></div>

//                <div className="mt-10"><p className="text-neutral-grayish-blue font-sans">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p></div>

//                <div className='mt-10'>
//                 <span className='text-neutral-very-dark-blue font-bold font-sans text-2xl'>$125.00</span>
//                 <button className='bg-primary-pale ml-4 rounded-md'><span className='font-sans text-primary m-2 font-bold'>50%</span></button>
//                </div>

//                <div>
//                 <span className='text-neutral-grayish-blue line-through'>$250.00</span>
//                </div>

// {/* add and substract btn with "add to cart btn" */}
//                <div className="md:flex mt-5 gap-4 ">
//                <div className="flex justify-center">
//                <div><button className='bg-neutral-grayish-blue py-4 px-4'><img className='p-0.5' src='icon-minus.svg' /></button></div>

//                <div className=''><button className='bg-neutral-grayish-blue py-2 px-3'><span className="p-0.5">0</span></button></div>

//                <div><button className='bg-neutral-grayish-blue py-3 px-4 '><img className="p-0.5"  src='icon-plus.svg' /></button></div>
//                </div>


// {/* cart svg and "add to cart btn" */}
//                <Button > 
//                 <div>
//                    <img src='icon-cart2.svg' />
//                   </div>
//                   <div>
//                     <span className='text-white font-sans font-bold'>Add to cart</span>
//                     </div>
//                     </Button>
//                </div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default Product




import React, { useContext, useState } from 'react';
import Button from './Button';
import { ProductsContext } from '@/contexts/ProductContext';
import { CartContext } from '@/contexts/CartContext';

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart(products[0].id); // Assuming there's only one product for now
    setQuantity(quantity + 1);
  };


  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };



  return (
    <section className='md:px-36'>
      <div className='md:flex md:gap-24 items-center'>
        <div className="">
          {products.map((product) => (
            <img key={product.id} src={product.imageURL} alt={product.name} />
          ))}

<div className="flex">
                  <div className='hidden md:block'> 
                    <img className='py-4 px-2 rounded-3xl' src="image-product-1-thumbnail.jpg" />
                  </div>
                  <div className='hidden md:block'>
                    <img  className='py-4 px-2 rounded-3xl'  src="image-product-2-thumbnail.jpg" />
                  </div>
                  <div className='hidden md:block'>
                    <img   className='py-4 px-2 rounded-3xl' src="image-product-3-thumbnail.jpg" />
                  </div>
                  <div className='hidden md:block'>
                    <img  className='py-4 px-2 rounded-3xl' src="image-product-4-thumbnail.jpg" />
                  </div>
                </div>
            </div>

            <div>
        </div>

        <div>
          <div><h3 className="text-primary font-bold font-sans">SNEAKER COMPANY</h3></div>
          <div className="mt-5"><h4 className="text-neutral-very-dark-blue font-bold text-4xl font-sans">Fall Limited Edition Sneakers</h4></div>
          <div className="mt-10"><p className="text-neutral-grayish-blue font-sans">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p></div>
          <div className='mt-10'>
            <span className='text-neutral-very-dark-blue font-bold font-sans text-2xl'>$125.00</span>
            <button className='bg-primary-pale ml-4 rounded-md'><span className='font-sans text-primary m-2 font-bold'>50%</span></button>
          </div>
          <div>
            <span className='text-neutral-grayish-blue line-through'>$250.00</span>
          </div>

          <div className="md:flex mt-5 gap-4">
            <div className="flex justify-center">
              <div><button className='bg-neutral-grayish-blue py-4 px-4' onClick={handleDecrementQuantity}><img className='p-0.5' src='icon-minus.svg' alt="Minus" /></button></div>
              <div><button className='bg-neutral-grayish-blue py-2 px-3'><span className="p-0.5">{quantity}</span></button></div>
              <div><button className='bg-neutral-grayish-blue py-3 px-4' onClick={handleIncrementQuantity}><img className="p-0.5" src='icon-plus.svg' alt="Plus" /></button></div>
            </div>
            <Button onClick={handleAddToCart}>
              <div>
                <img src='icon-cart2.svg' alt="Cart" />
              </div>
              <div>
                <span className='text-white font-sans font-bold'>Add to cart</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
