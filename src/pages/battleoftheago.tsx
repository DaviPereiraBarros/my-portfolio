import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import React from "react";
import Header from '../../components/header/navbar'
import Games from '../../components/games/apresentationGames'


export default function battleoftheago()
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