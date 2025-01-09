"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

const CartPage = () => {
  const { state, dispatch } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState<CartItem[]>([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const subtotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderDetails([...state.items]); // Save current cart items as order details
    setOrderPlaced(true);
  };

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible); // Toggle popup visibility
  };

  return (
    <section className="xsm:h-[1600px] sm:h-[1800px]">
      <div className="relative xsm:top-[150px] top-[130px] xsm:h-auto h-[600px]">
        <h1 className="text-3xl font-bold mb-6 text-center text-black font-playfair">
          Shopping Cart
        </h1>
        {state.items.length === 0 && !orderPlaced ? (
          <div className="text-center">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <Image
              src="/cart items.webp"
              alt="Empty Cart"
              width={400}
              height={400}
              className="mx-auto mt-6 bg-transparent xsm:w-[400px] xsm:h-[400px] h-[300px] w-[300px]"
            />
           
          </div>
        ) : (
          <div className="space-y-6">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                {/* Product Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center relative xl:left-[600px] lg:left-[350px] md:left-[320px] md:top-[-20px] top-[5px] w-[200px] ">
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                      }
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="mx-4 text-lg font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                      }
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-500"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Section */}
        {state.items.length > 0 && !orderPlaced && (
          <div className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200 relative sm:left-0 left-[20px]">
            <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-800 mb-4">
              <span>Tax (10%):</span>
              <span>${(subtotal * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-2xl font-bold text-gray-900">
              <span>Total:</span>
              <span>${(subtotal * 1.1).toFixed(2)}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-6 py-2 bg-[#735555] font-playfair text-white rounded-lg hover:bg-white hover:border-[1px] hover:border-[#735555] hover:text-[#735555] transition duration-300"
            >
              Place Order
            </button>
          </div>
        )}

        {/* Order Confirmation Message */}
        {orderPlaced && (
          <div className="mt-6 bg-black-100 text-white p-4 rounded-lg text-center font-playfair">
            <p className="text-lg font-semibold">
              Your order has been placed successfully!
            </p>
            <button
              onClick={() => setOrderPlaced(false)}
              className="mt-4 px-4 py-2 bg-[#735555] font-playfair text-white rounded-lg hover:bg-white hover:border-[1px] hover:border-[#735555] hover:text-[#735555] transition duration-300"
            >
              Back to Cart
            </button>
          </div>
        )}

        {/* Order Details Section */}
        {orderPlaced && orderDetails.length > 0 && (
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl pl-4 font-bold text-gray-800">
              Order Details:
            </h2>
            {orderDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-100 shadow-md rounded-lg p-4 border border-gray-200"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View Cart Button */}
      {!orderPlaced && (
        <button
          onClick={handlePopupToggle}
          className="relative top-[170px] xxxl:left-[700px] xl:left-[690px] lg:left-[460px] md:left-[330px] xsm:left-[150px] sm:left-[130px] left-[110px] px-4 py-2 bg-[#735555] text-white rounded-lg hover:bg-white hover:border-[1px] hover:border-[#735555] hover:text-[#735555] transition duration-300"
        >
          <Link href="/shopall">Back to Shop</Link>
        </button>
      )}
    </section>
  );
};

export default CartPage;
