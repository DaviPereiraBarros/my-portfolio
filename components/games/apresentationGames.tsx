import React from "react";
import YouTube from 'react-youtube';
import Link from 'next/link';

interface CardPropos {
  title: string,
  description: string,
  genero: string,
  plataforma: string,
  linkGitHub: string,
  idVideo: string,
  Messege: string,
}


export default function Games({ title, description, genero, plataforma, linkGitHub, idVideo, Messege}: CardPropos)
{
    const opts = {
        height: '560',
        width: '680',
    };

    return(
    <main className="bg-slate-950 min-h-screen w-screen flex items-center justify-center space-x-10">
    
    <div className="w-[40%] h-[620px] rounded overflow-hidden mt-12">
    <div className="flex justify-center items-center">
    <div className="">
        <YouTube videoId={idVideo} opts={opts} />
    </div>
    </div>
    </div>

    <div className="bg-gray-900 w-[40%] h-[620px] rounded overflow-hidden border border-emerald-200">
    <div className="px-7 py-5">
    <h2 className="text-6xl text-center text-emerald-300 font-bold mb-2">{title}</h2>
    <p className="text-white text-xl mt-10">{description}</p>
    <div className="border-t mt-10 bg-emerald-500"></div>
    <p className="text-white text-2xl mt-12"><span className="font-semibold text-emerald-300">Gênero: </span>{genero}</p>
    <div className="border-t mt-10 bg-emerald-500"></div>
    <p className="text-white text-2xl mt-12"><span className="font-semibold text-emerald-300">Plataforma: </span>{plataforma}</p>
    <div className="border-t mt-10 bg-emerald-500"></div>
    <p className="text-white text-2xl mt-10 hover:text-blue-500"><Link href={linkGitHub}>{linkGitHub}</Link></p>
    <p className="text-white text-2xl mt-10">{Messege}</p>
    </div>
    </div>
     
    </main>
    )
}