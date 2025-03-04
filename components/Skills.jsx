import React from 'react';
import Image from 'next/image';
// ...existing code...

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      // ...existing code...
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image src='/assets/skills/html.png' width={64} height={64} alt='HTML' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        // ...repeat for other skills...
      </div>
    </div>
  );
};
// ...existing code...
