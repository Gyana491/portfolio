import React from 'react'
import Link from 'next/link'
// ...existing code...

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <div className="rounded-xl overflow-hidden w-full">
        {backgroundImg}
      </div>
      // ...existing code...
    </div>
  )
}
// ...existing code...
