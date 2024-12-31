'use client'
import React, { useEffect, useState } from 'react';
import CartSideMenu from '@/components/CartSideMenu';// Make sure the path is correct

const CartPage = () => {
  const [cart, setCart] = useState<{ id: string; title: string; price: string; img: string }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  // Handle the delete action
  const deleteFromCart = (product: { id: string; title: string; price: string; img: string }) => {
    const updatedCart = cart.filter(item => item.id !== product.id); // Remove product by id
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

  return (
    <>
    <section className="w-full h-[765px] absolute top-[570px] left-[10px]  flex flex-col justify-between">
        <div className="w-[300px] md:w-[888px] h-[29.04px] ">
          <h2 className="w-[100px] md:w-[87.83px] h-[29.04px] font-inter font-bold text-[16px] md:text-[18px] text-[#333333]">
            Product
          </h2>
          <div className="flex md:justify-between justify-center md:gap-0 gap-4 items-center absolute top-0 left-[100px] md:left-[500px] w-[250px] md:w-[730px] list-none ">
            <li className=" md:w-[58.55px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Price
            </li>
            <li className="md:w-[94.59px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Quantity
            </li>
            <li className="md:w-[55.18px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Total
            </li>
            <li className="md:w-[121.61px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Remove
            </li>
          </div>
        </div>
        
      </section>
    <div className='h-[1000px] bg-pink-400 w-full'>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      
      {/* Cart Side Menu */}
      <CartSideMenu
        products={cart} // Pass the entire cart as a list of products
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onAddToCart={() => {}}
        onDelete={deleteFromCart} // Pass the delete function
      />
      
      {/* Display Cart Items on the Cart Page */}
      <div className="space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">No products in the cart</p>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <img src={product.img} alt={product.title} className="w-[50px] h-[50px] object-cover rounded" />
              <div className="ml-4">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
              <button
                onClick={() => deleteFromCart(product)} // Delete product from cart
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default CartPage;
