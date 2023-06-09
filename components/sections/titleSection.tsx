import React from "react";

interface TitleSection{
  title: string,
  description: string,
}

export default function section2({title, description}:TitleSection)
{
    return(
      <div className='border-violet-400 bg-gradient-to-r from-violet-400 to-indigo-950 mt-[10%] w-[100%] h-[100%]'>
      <p className='text-center p-3 font-bold text-white text-3xl'>{title}</p>
      <span className="flex items-center justify-center text-gray-300">{description}</span>
      </div>
    )
}