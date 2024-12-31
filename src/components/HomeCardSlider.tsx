import React from "react";
import Image from "next/image";
import { FollowProps } from "../../types/type";

const HomeCardSlider = ({ id,image }: FollowProps) => {
  return (
    <div className="relative group ">
      {/* Image */}
      <Image
        src={image}
        alt="images"
      height={400}
      width={400}
        className="object-cover  h-[200px] w-[361px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ">
        <p className="text-gray-200 text-base font-bold">#wix <br />#BeautySalon <br />#beautyProduct <br />#makeup</p>
      </div>
    </div>
  );
}
export default HomeCardSlider;
