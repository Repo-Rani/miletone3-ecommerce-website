'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BestSellerProps } from '../../types/type';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import Link from 'next/link';
import CartSideMenu from './CartSideMenu'; 

const BestSeller = ({
  id,
  image,
  img,
  title,
  ratingNum,
  price,
  reviews,
  latest,
}: BestSellerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // State for controlling side menu visibility
  const [cartItems, setCartItems] = useState<any[]>([]); // State for storing cart items

  useEffect(() => {
    // Load cart items from localStorage on initial load
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  const handleAddToCart = (product: any) => {
    const updatedCart = [...cartItems];
    const existingProductIndex = updatedCart.findIndex((item: any) => item.title === product.title);

    if (existingProductIndex >= 0) {
      // If product exists, increase quantity
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it with quantity 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update cart state
    setCartItems(updatedCart);
    setIsSideMenuOpen(true); // Open the side menu
  };

  const handleDeleteFromCart = (product: any) => {
    const updatedCart = cartItems.filter((item: any) => item.title !== product.title);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleIncreaseQuantity = (product: any) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item: any) => item.title === product.title);
    if (productIndex >= 0) {
      updatedCart[productIndex].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const handleDecreaseQuantity = (product: any) => {
    const updatedCart = [...cartItems];
    const productIndex = updatedCart.findIndex((item: any) => item.title === product.title);
    if (productIndex >= 0 && updatedCart[productIndex].quantity > 1) {
      updatedCart[productIndex].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false); // Close the side menu
  };

  const goToCart = () => {
    setIsSideMenuOpen(false); 
    
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="best-seller">
      <div
        className="w-[300px] h-[350px] flex flex-col items-center px-10 cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <Link href={`bestsellers/${id}`} passHref>
          <Image
            src={isHovered ? img : image}
            alt="product-image"
            width={300}
            height={300}
            className="transition-transform duration-300 ease-in-out"
          />
        </Link>

        {/* Latest Badge */}
        {latest && (
          <div className="absolute top-4 left-6 bg-black px-6 py-5">
            <span className="font-lato text-[16px] text-white">{latest}</span>
          </div>
        )}

        {/* Product Details */}
        <h3 className="text-[18px] font-lato font-medium text-black whitespace-nowrap">{title}</h3>
        <span className="font-lato text-[14px] text-[#5e5e5e]">${price}</span>
        <div className="flex justify-between w-[135px] h-[14px]">
          <div className="flex justify-between w-[80px] h-[14px]">
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStar className="w-[14px] h-[14px] text-[#735555]" />
            <IoIosStarHalf className="w-[14px] h-[14px] text-[#735555]" />
          </div>
          <div className="flex justify-between w-[40px] relative top-[-5px]">
            <p className="text-[14px] font-lato text-[#5e5e5e]">{ratingNum}</p>
            <p className="text-[14px] font-lato text-[#5e5e5e]">{reviews}</p>
          </div>
        </div>

        {/* Add to Cart Button */}
        {isHovered && (
          <button
            onClick={() => handleAddToCart({ title, price, img })}
            className="relative top-[30px] px-9 py-2 bg-transparent text-black border-[1px] border-black rounded hover:bg-black hover:text-white hover:scale-105 transition-all ease-in-out duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Side Menu */}
      <CartSideMenu
        products={cartItems}  // Pass the cart items as 'products'
        isOpen={isSideMenuOpen}
        onClose={closeSideMenu}
        onAddToCart={goToCart}
        onDelete={handleDeleteFromCart}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        totalPrice={calculateTotalPrice()}
      />
    </div>
  );
};

export default BestSeller;
