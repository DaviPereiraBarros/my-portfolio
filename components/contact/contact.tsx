import React from "react";
import ItemContact from "./itemContact";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Contact()
{
    return(
     <div className='flex items-center justify-center h-[calc(100vh - 100px)]'>
        <div className='h-[100%] flex items-center flex-grow space-x-12 p-5 gap-14'>
         <ItemContact IconFa={FaLinkedin} LinkContact="https://www.linkedin.com/in/davi-pereira-17220a22b/" LinkEmail=""/>
         <ItemContact IconFa={FaGithub} LinkContact="https://github.com/DaviPereiraBarros" LinkEmail=""/>
         <ItemContact IconFa={FaEnvelope} LinkContact="" LinkEmail="mailto:davibarrospp@gmail.com"/>
        </div>
     </div>
    )
}