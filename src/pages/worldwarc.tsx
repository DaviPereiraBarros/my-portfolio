import React from "react";
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Header from '../../components/header/navbar'

export default function WorldWarC()
{
    return(
        <>
        <Header></Header>
   
        <main className="bg-slate-950 min-h-screen flex items-center justify-center">
   
        <div className=''>
           TÍTULO
        </div>
   
        <div>
        DESCRIÇÃO
        </div>
   
        <div>
         VÍDEO
        </div>
        
        </main>
           
       </>
    )
}