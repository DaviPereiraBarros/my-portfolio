import React from "react";
import {FaArrowRight} from 'react-icons/fa'

export default function ButtonCurriculo()
{

    const downloadLink = 'public/assets/Currículo_DaviPereira.pdf';
      
    return (
    <a className='w-2' href={downloadLink} download>
    <button className='p-[10px] flex justify-around font-bold bg-white rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-emerald-300'>RESUME<FaArrowRight className='m-1'/></button>
    </a>
  );
}