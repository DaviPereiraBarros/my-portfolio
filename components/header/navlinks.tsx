import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavLink()
{
  return (
    <div className="flex gap-20 md:flex-col bg-gray-50 md:fixed md:h-screen side">
      <div className="text-3xl right-4 top-9 absolute hidden cursor-pointer md:flex"></div>
    </div>
  );
};