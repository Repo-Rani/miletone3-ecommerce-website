'use client'
import React from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import Link from "next/link";

const SignUp = () => {
  

  return (
    <>
      <section className="relative top-[120px] h-[1000px]">
        <div className="w-[300px] md:w-[424px] h-[624px] absolute top-[510px] md:top-[100px] md:left-[530px] bg-black left-[50px] shadow-2xl shadow-[#E0E0E0]">
          <h1 className="text-[18px] md:text-[20px] font-bold font-helvetica relative top-[35px] left-[35px] text-[#333333]">
            Sign Up
          </h1>
          <div className="relative top-[-35px]">
            <div className="w-[220px] md:w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[100px] md:left-[35px] border-[#E0E0E0] border-[1px]">
              <FaUser className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]" />
              <input
                type="text"
                className="border-none outline-none text-[12px] md:text-[16px] font-normal text-[#4F4F4F] font-halvetica"
                placeholder="Name"
              />
            </div>
            <div className="w-[220px] md:w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[117px] left-[35px] border-[#E0E0E0] border-[1px]">
              <FaEnvelope className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]" />
              <input
                type="text"
                className="border-none outline-none text-[12px] md:text-[16px] font-normal text-[#4F4F4F] font-halvetica"
                placeholder="Email"
              />
            </div>
            <div className="w-[220px] md:w-[360px] h-[44px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[133px] left-[35px] border-[#E0E0E0] border-[1px]">
              <FaLock className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]" />
              <input
                type="password"
                className="border-none outline-none text-[12px] md:text-[16px] font-normal text-[#4F4F4F] font-halvetica"
                placeholder="Password"
              />
            </div>
            <div className="h-[22px] flex justify-start items-center gap-[10px] pl-[14px] relative top-[153px] left-[35px] whitespace-nowrap">
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <input
                  type="checkbox"
                  className="w-[18px] md:w-[20px] h-[18px] md:h-[20px] cursor-pointer border border-[#735555] rounded-sm bg-white checked:bg-[#735555] checked:border-[#735555] focus:outline-none relative"
                />
                <span className="absolute w-[6px] md:w-[10px] h-[6px] md:h-[10px] border-white border-2 border-t-0 border-l-0 transform rotate-45 hidden checked:block"></span>
              </div>
              <p className="text-[12px] md:text-[14px] font-helvetica font-normal text-[#333333]">
                Remember me?
              </p>
            </div>
            <button className="relative top-[180px] left-[35px] w-[220px] md:w-[360px] h-[35px] md:h-[44px] bg-[#735555] text-white font-helvetica text-[14px] md:text-[16px] font-normal flex justify-center items-center hover:bg-[#ffffff] hover:text-[#735555] hover:border-[1px] hover:border-[#735555] transition-all duration-300 ease-in-out">
              Sign Up
            </button>
            <p
             
              className="flex justify-center items-center gap-1 w-[120px] md:w-[113px] text-[12px] md:text-[14px] font-normal font-helvetica text-[#828282] relative left-[35px] md:left-[190px] top-[195px] cursor-pointer whitespace-nowrap"
            >
              Already have an account?<Link href="/login" className="hover:underline text-blue-600">Login</Link>

            </p>
            <div className="w-[245px] md:w-[360px] h-[152px] relative left-[35px] top-[230px] flex justify-between flex-col">
              <div className="w-[245px] md:w-[360px] h-[32px] flex justify-center items-center">
                <span className="border-b-[1px] w-[100px] md:w-[168px] border-[#E0E0E0]"></span>
                <span className="w-[28px] md:w-[32px] h-[28px] md:h-[32px] border-[#E0E0E0] border-[1px] text-[12px] md:text-[14px] font-halvetica font-normal text-[#4F4F4F] flex justify-center items-center">
                  OR
                </span>
                <span className="border-b-[1px] w-[100px] md:w-[168px] border-[#E0E0E0]"></span>
              </div>
              <div className="w-[220px] md:w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[35px] md:gap-[75px] items-center pl-[14px]">
                <FaGoogle className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]" />
                <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#4F4F4F] text-center whitespace-nowrap">
                  Sign up with Google
                </p>
              </div>
              <div className="w-[220px] md:w-[360px] h-[44px] border-[#E0E0E0] border-[1px] flex justify-start gap-[35px] md:gap-[75px] items-center pl-[14px]">
                <FaApple className="md:h-[24px] md:w-[24px] w-[20px] h-[20px]" />
                <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#4F4F4F] text-center">
                  Sign up with Apple
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
