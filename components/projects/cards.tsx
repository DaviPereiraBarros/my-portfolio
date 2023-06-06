import React from "react";

interface CardPropos {
  title: string,
  description: string,
  image: string
}

export default function Card({ title, description, image }: CardPropos){
  return(
    <div className="bg-white rounded-md shadow-md p-4 w-[20%] mt-10">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
