import React from 'react';

function AnimatedBackground() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      <h1 className="text-white text-4xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Welcome to the Animated Background!</h1>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index}
             className="absolute bg-white rounded-full opacity-20"
             style={{
               animation: `rise 10s ease-in-out ${index % 5 * 0.5}s infinite`,
               width: `${10 + (index % 5) * 5}px`,
               height: `${10 + (index % 5) * 5}px`,
               left: `${10 + index * 5}%`,
               bottom: '-10%',
             }}>
        </div>
      ))}
    </div>
  );
}

export default AnimatedBackground;
