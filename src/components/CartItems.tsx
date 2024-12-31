import React, { useState, useEffect } from 'react';
import CartSideMenu from './CartSideMenu'; // Import the CartSideMenu component

const Cart = () => {
  const [cart, setCart] = useState<{ id: string; title: string; price: string; img: string }[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  // Add item to cart
  const addToCart = (product: { id: string; title: string; price: string; img: string }) => {
    const updatedCart = [...cart, product]; // Add the new product to the cart
    setCart(updatedCart); // Update the state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    setIsMenuOpen(true); // Open the side menu when an item is added
  };

  // Delete item from cart
  const deleteFromCart = (product: { id: string; title: string; price: string; img: string }) => {
    const updatedCart = cart.filter(item => item.id !== product.id); // Remove the product from the cart
    setCart(updatedCart); // Update the state
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
  };

  return (
    <div>
      {/* Add product button (for demo purposes) */}
      <button onClick={() => addToCart({ id: '1', title: 'Perfume', price: '50', img: 'perfume.jpg' })}>
        Add Perfume to Cart
      </button>

      {/* Cart Side Menu */}
      <CartSideMenu
        products={cart} // Pass the entire cart as a list of products
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onAddToCart={addToCart} // Pass the addToCart function
        onDelete={deleteFromCart} // Pass the delete function
      />
    </div>
  );
};

export default Cart;
