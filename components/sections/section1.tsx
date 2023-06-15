import React from "react";
import Image from 'next/image';
import Logo from '../../public/assets/AvatarMaker.svg'
import ButtonCurriculo from "./buttonCurriculo";

export default function section1()
{
    return (
    <>
     <div className=''>
     <div className="flex items-center justify-center h-[calc(100vh - 100px)] md:mt-[15%]">
     <div className='flex-col md:flex-row h-[100%] justify-around flex items-center p-5 md:w-[1120px]'>
     <div className="text-start w-[100%] grid">
     <span className='text-xl text-white font-semibold md:text-5xl'> Olá, sou Davi Pereira</span>
     <div>
        <span className='text-sky-500 text-base md:text-xl'>Web Developer / Games</span>
     </div>
     <div className='py-6'>
        <p className='text-white text-sm w-[35%] ml-[300px] md:text-xl md:text-justify md:w-[60%] md:ml-0'>
        Meu interesse pela área começou em 2020 quando fiz meu técnico em Programação de Jogos Digitais utilizando a engine Unity3D e a linguagem C#, assim a paixão por jogos despertou. 
        Além dos jogos, tenho focado meus estudos para o desenvolvimento web (React, JS, Next e outros). Atualmente estou cursando Engenharia de Computação.
        </p>
      </div>
      <ButtonCurriculo/>

     </div>

     <div className='w-[25%] mt-20 flex items-center justify-center mb-20 md:w-[50%]'>
      <Image src={Logo} alt='Minha Foto' width={420} height={420} className='bg-gradient-to-r from-green-200 via-blue-400 to-purple-700 rounded-full shadow-md shadow-teal-300'>
      </Image>
     </div>
     </div>
     </div>
     </div>
     </>
    )
}