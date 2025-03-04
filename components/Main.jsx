import React from 'react';
import Image from 'next/image';
// ...existing code...

const Main = () => {
  // ...existing code...
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden mb-5 md:h-80 md:w-80">
            <Image
              src="/assets/profile.png"
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              priority
              quality={90}
            />
          </div>
          // ...existing code...
        </div>
      </div>
    </div>
  );
};
// ...existing code...
