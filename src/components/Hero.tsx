import React from "react";
import ShopLips from "./HeroShopLips";
import DiscoverMore from "./DiscoverMore";
import Banner from "./Banner";
import HeroBestSeller from "./HeroBestSeller";
import HeroTrending from "./HeroTrending";
import FollowUs from "./FollowUs"; 

const Hero = () => {
  return (
    <>
    <div className="h-[4510px]">
        {/* Banner */}
        <div>
        <Banner />
      </div>
      {/* Best sellers */}
      <div>
        <HeroBestSeller />
      </div>
      {/* Shop List */}
      <div>
        <ShopLips />
      </div>

      {/* Trending product */}
      <div>
        <HeroTrending />
      </div>
      {/* DiscoverMore */}
      <div>
        <DiscoverMore />
      </div>

        {/* Foloow Us */}
     
    <div>
      <FollowUs/>
    </div>
     
      </div>
    
    </>
  );
};

export default Hero;
