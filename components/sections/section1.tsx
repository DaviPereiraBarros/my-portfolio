import React from "react";
import Image from 'next/image';
import Logo from '../../public/assets/AvatarMaker.svg'
import ButtonCurriculo from "./buttonCurriculo";

export default function section1()
{
    return (
    <>
     <div className=''>
     <div className="flex items-center justify-center h-[calc(100vh - 100px)] mt-[15%]">
     <div className='w-[1120px] h-[100%] justify-around flex items-center p-5'>
     <div className="text-start w-[100%] grid">
     <span className='text-5xl text-white font-semibold'> Olá, sou Davi Pereira</span>
     <div>
        <span className='text-sky-500 text-xl'>Web Developer / Games</span>
     </div>
     <div className='py-6'>
        <p className='text-white text-justify text-xl w-[60%]'>
        Meu interesse pela área começou em 2020 quando fiz meu técnico em Programação de Jogos Digitais utilizando a engine Unity3D e a linguagem C#, assim a paixão por jogos despertou. 
        Além dos jogos, tenho focado meus estudos para o desenvolvimento web (React, JS, Next e outros). Atualmente estou cursando Engenharia de Computação.
        </p>
      </div>
      <ButtonCurriculo/>

     </div>

     <div className='w-[50%] flex items-center justify-center mb-20'>
      <Image src={Logo} alt='Minha Foto' width={420} height={420} className='bg-gradient-to-r from-green-200 via-blue-400 to-purple-700 rounded-full shadow-md shadow-teal-300'>
      </Image>
     </div>
     </div>
     </div>
     </div>
     </>
    )
}