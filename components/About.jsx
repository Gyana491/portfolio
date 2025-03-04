import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image 
            src="/assets/about.jpg" 
            alt="Profile Image" 
            width={500} 
            height={500} 
            className="rounded-xl"
            priority
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
