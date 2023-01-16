import React from 'react';

const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end items-center h-screen bg-movie-cover-5 bg-center bg-cover">
      <div className="bg-white/60 backdrop-blur-sm h-[90%] w-1/3 rounded-lg mr-20">
        {children}
      </div>
    </div>
  );
};

export default BlankLayout;
