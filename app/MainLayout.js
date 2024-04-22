import React from 'react';
import InputShortener from './InputShortener';
import AnimatedBackground from './Backgroundanimate';

function MainLayout() {
  return (
    <div className="flex flex-col justify-center items-center h-screen relative">
      <AnimatedBackground />
      <div className="z-10 p-4 bg-white bg-opacity-50 rounded-lg shadow">
        <InputShortener />
      </div>
    </div>
  );
}

export default MainLayout;
