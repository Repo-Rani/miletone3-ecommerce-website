import React from 'react';
import { followData } from '../../data/data';
import Image from 'next/image';
import HomeCardSlider from './HomeCardSlider';

const HomeCardSlidersItems = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {/* Render slides */}
        {followData.map((item) => (
          <div key={item.id} className="slider-item">
            <HomeCardSlider  image={item.image} id={item.id}  />
          </div>
        ))}
        {/* Duplicate slides for seamless effect */}
        {followData.map((item) => (
          <div key={`duplicate-${item.id}`} className="slider-item">
            <HomeCardSlider  image={item.image} id={item.id}  />
            </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCardSlidersItems;
