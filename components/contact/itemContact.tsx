import React from "react";
import { IconType } from "react-icons/lib";
import Link from 'next/link'

interface itemContactProps{
    IconFa: IconType,
    LinkContact: string,
    LinkEmail: string,
}

export default function ItemContact({IconFa, LinkContact, LinkEmail}:itemContactProps)
{
    return(
        <div className="mt-10 w-full border-[50%] flex items-center break-words">
            <div className="mr-2 flex">
                <IconFa className="text-white text-5xl"/>
            </div>
            <div className="text-white">
                <Link className="hover:text-blue-500" href={LinkContact}>{LinkContact}</Link>
                <a className="hover:text-blue-500" href="mailto:davibarrospp@gmail.com">{LinkEmail}</a>
            </div>
        </div>
    )
}