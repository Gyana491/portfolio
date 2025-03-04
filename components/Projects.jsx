import React from 'react';
import Image from 'next/image';
import ProjectItem from './ProjectItem';
// ...existing code...

const Projects = () => {
  // ...existing code...
  return (
    <div id='projects' className='w-full'>
      // ...existing code...
      <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
          title='Project 1'
          backgroundImg={
            <Image 
              src="/assets/projects/project1.jpg"
              alt="Project 1"
              width={600}
              height={400}
              quality={85}
              loading="lazy"
            />
          }
          projectUrl='/project1'
          tech='React JS'
        />
        // ...repeat for other projects...
      </div>
    </div>
  );
};
// ...existing code...
