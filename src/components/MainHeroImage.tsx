import React from 'react';

import config from './config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-2 lg:right-2 lg:w-1/2 lg:p-16">
      <img
        className="h-sm-56 w-full object-contain sm:h-60 md:h-96 lg:w-full lg:h-full p-5"
        src={mainHero.img}
        alt="robot team image"
      />
    </div>
  );
};

export default MainHeroImage;
