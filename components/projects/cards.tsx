import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link'

interface CardPropos {
  title: string,
  description: string,
  image: StaticImageData,
  link: string
}

export default function Card({ title, description, image, link}: CardPropos){
  return(
    <div className="bg-white mt-24 max-w-sm rounded overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
    <Image src={image} alt={title} className="w-full" width={520} height={420}/>
    <div className="px-6 py-4 ">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600 text-base">{description}</p>
    <div className=" w-[50%] mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:animate-pulse md:w-[34%]">
    <Link href={link} >
    Saiba mais
    </Link>
    </div>
    </div>
    </div>
  )
}



