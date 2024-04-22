import React from 'react';
import BackgroundAnimate from './Backgroundanimate';  // Adjust the path as necessary

function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <BackgroundAnimate />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* You can add more components here as needed */}
      </div>
    </div>
  );
}

export default MainLayout;
