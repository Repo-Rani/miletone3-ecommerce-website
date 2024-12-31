'use client'
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing React icons

const Contact = () => {
  // State to track the selected communication method
  const [communicationMethod, setCommunicationMethod] = useState('email');

  // Handle change of radio button
  const handleRadioChange = (event: any) => {
    setCommunicationMethod(event.target.value);
  };

  return (
    <section className='relative top-[200px] h-[1300px]'>
      <h1 className="font-playfair text-[#735555] text-5xl font-bold w-[150px] whitespace-nowrap leading-10 absolute top-[-30px] left-[600px]">
        Contact us
      </h1>
      <div className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="lg:mb-0 mb-10">
              <div className="group w-full h-full">
                <div className="relative h-full">
                  <img
                    src="/contact.jpg"
                    alt="ContactUs tailwind section"
                    className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-[#735555] object-cover"
                  />
                  <div className="absolute bottom-0 w-full lg:p-11 p-5">
                    <div className="bg-white rounded-lg p-6 block">
                      <a href="javascript:;" className="flex items-center mb-6">
                        <FaPhoneAlt size={30} className="text-[#735555]" />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          470-601-1911
                        </h5>
                      </a>
                      <a href="javascript:;" className="flex items-center mb-6">
                        <FaEnvelope size={30} className="text-[#735555]" />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          Pagedone1234@gmail.com
                        </h5>
                      </a>
                      <a href="javascript:;" className="flex items-center">
                        <FaMapMarkerAlt size={30} className="text-[#735555]" />
                        <h5 className="text-black text-base font-normal leading-6 ml-5">
                          654 Sycamore Avenue, Meadowville, WA 76543
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h1 className="font-manrope text-black text-4xl font-bold leading-10 mb-8">
                Lets talk
              </h1>
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="text-gray-600 text-lg font-semibold leading-6"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full h-14 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-gray-600 text-lg font-semibold leading-6"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-14 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4"
                    placeholder="Your Email Address"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-gray-600 text-lg font-semibold leading-6"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full h-14 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-gray-600 text-lg font-semibold leading-6">
                    Preferred Method of Contact
                  </label>
                  <div className="flex space-x-6 mt-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="email"
                        name="communication-method"
                        value="email"
                        checked={communicationMethod === 'email'}
                        onChange={handleRadioChange}
                        className="h-5 w-5 text-[#735555]"
                      />
                      <label
                        htmlFor="email"
                        className="ml-2 text-gray-600 text-base font-normal leading-6"
                      >
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="phone"
                        name="communication-method"
                        value="phone"
                        checked={communicationMethod === 'phone'}
                        onChange={handleRadioChange}
                        className="h-5 w-5 text-[#735555]"
                      />
                      <label
                        htmlFor="phone"
                        className="ml-2 text-gray-600 text-base font-normal leading-6"
                      >
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <textarea
                  className="w-full h-40 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 mb-10"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="w-full h-14 text-white bg-[#735555] hover:text-[#735555] rounded-full font-semibold text-lg leading-7 hover:bg-white hover:border-[1px] hover:border-[#735555] focus:outline-none focus:ring-2 focus:ring-[#735555]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
