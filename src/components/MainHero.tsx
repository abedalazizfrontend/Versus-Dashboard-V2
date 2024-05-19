import React from 'react';

import config from './config/index.json';

const animationCss = `
@keyframes goldWave {
  0% {
    background: linear-gradient(to right, black, black); /* Start with black gradient */
    background-clip: text; /* Clip the gradient to the text */
    -webkit-background-clip: text; /* For Safari */
    color: transparent; /* Hide the actual text */
  }
  50% {
    background: linear-gradient(to right, black, #c6b250); /* Transition to gold gradient */
    background-clip: text; /* Clip the gradient to the text */
    -webkit-background-clip: text; /* For Safari */
    color: transparent; /* Hide the actual text */
  }
  100% {
    background: linear-gradient(to right, #ec4755, #ec4755); /* End with gold gradient */
    background-clip: text; /* Clip the gradient to the text */
    -webkit-background-clip: text; /* For Safari */
    color: transparent; /* Hide the actual text */
  }
}

.gold-wave-animation {
  animation: goldWave 3s linear infinite; /* Apply the animation */
}
`;

const MainHero = () => {
  const { mainHero } = config;

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <style>{animationCss}</style>
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline " style={{ color: '#c6b250' }}>
            {mainHero.title}
          </span>
          <br />
          <span className={`block text-yea xl:inline gold-wave-animation`}>
            {mainHero.subtitle}
          </span>
          <span className={`block text-yea xl:inline gold-wave-animation`}>
            {mainHero.subtitle2}
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a
              href={mainHero.secondaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.secondaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
