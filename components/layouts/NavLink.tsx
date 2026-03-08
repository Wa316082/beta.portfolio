"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
interface NavLinkProps {
    href: string;
    text: string;
    icon: React.ReactNode;
}

function NavLink({href, text, icon}: NavLinkProps) {
    const pathname = usePathname();
    const isActive = !!pathname && (pathname === href || (href !== '/' && pathname.startsWith(href)));
    return (
        <Link
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className="relative inline-block p-0.5 rounded-xl overflow-hidden group custom-shadow">
            <span className={`absolute inset-0 rounded-xl bg-linear-to-bl from-[#13fdfd] to-[#139bfd] opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 ${isActive ? 'opacity-100 scale-100' : ''}`}/>
            <span className={`relative z-10 block rounded-[10px] custom-gradient custom-shadow cursor-pointer transition-all duration-300 ${isActive ? 'text-cyan-600' : ''}`} >
                <span className={`block md:hidden px-4 py-2 text-lg flex items-center justify-center ${isActive ? 'text-cyan-600' : ''}`}>
                  {icon}
                </span>
                <span className={`hidden md:block px-6 py-3 group-hover:text-cyan-600 ${isActive ? 'text-cyan-600' : ''}`}>
                  {text}
                </span>
            </span>
        </Link>

    );
}

export default NavLink;