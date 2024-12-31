import React, { useState, useEffect } from 'react';
import { FaTrash, FaTimes } from 'react-icons/fa'; // Import FaTimes for close icon
import Link from 'next/link';

type CartSideMenuProps = {
  products: { id: string; title: string; price: string; img: string }[];
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: { id: string; title: string; price: string; img: string }) => void;
  onDelete: (product: { id: string; title: string; price: string; img: string }) => void;
};

const CartSideMenu = ({ products, isOpen, onClose, onAddToCart, onDelete }: CartSideMenuProps) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-0 right-0 w-[300px] h-full bg-black bg-opacity-50 z-50 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`bg-white p-6 rounded-l-lg h-full transform transition-all duration-500 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Products in Cart</h2>
          {/* Close Icon */}
          <button onClick={onClose} className="text-gray-500">
            <FaTimes size={20} />
          </button>
        </div>

        {/* List of Products */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products in the cart</p>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                {/* Product Image */}
                {product.img && (
                  <img src={product.img} alt={product.title} className="w-[50px] h-[50px] object-cover rounded" />
                )}

                {/* Product Details */}
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <p className="text-gray-500">${product.price}</p>
                </div>

                {/* Delete Icon */}
                <button
                  onClick={() => onDelete(product)} // Pass product to onDelete function
                  className="text-red-500"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col space-y-4 mt-10 ml-20">
          <Link href="/cart">
            <button className="px-6 py-2 bg-[#735555]  text-white rounded">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSideMenu;
