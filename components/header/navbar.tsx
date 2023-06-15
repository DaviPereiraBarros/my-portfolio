'use client'
import React, { useState } from 'react'
import NavLink from '../header/navlinks'
import Link from 'next/link'

export default function header() {
    return (
       <nav className='h-[100px] w-[100%] flex items-center justify-center border-solid border-violet-400 border-y-2 bg-gradient-to-r from-violet-400 to-indigo-950'>
        <div className='w-[1120px] flex items-center justify-between px-0 py-3'>
            <div className='text-end ml-1 md:ml-0'>
            <span className='text-base text-white md:text-3xl'>Davi Pereira</span>

            <div>
                <span className='text-white'>Portfolio</span>
            </div>

          </div>

            <div className='text-2xl flex-none cursor-pointer lg:flex'>

            </div>

            <NavLink></NavLink>

            <div className='flex gap-3 ml-auto mr-2 md:space-x-6 md:mr-0'>

            <Link href={"/"} className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'> HOME </Link>

            <Link href={"/#sectionProjects"} className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>PROJECTS</Link>

            <Link href={"/#contact"} className='text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>CONTACT</Link>

            </div>


        </div>
       </nav>
    );
  };
