import React, {ReactNode} from 'react';
import Link from "next/link";
import NavLink from "@/components/layouts/NavLink";

function TopBar({children}: { children: ReactNode }) {
    return (
        <div className='lg:col-span-8 sm:col-span-6 col-span-11'>
            <div className='bg-linear-100 from-50% from-gray-200 to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-2 border-2 w-full z-20 shadow-md sticky top-20'>
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    <NavLink href={'/'} text={'About Me'}/>
                    <NavLink href={'/resume'} text={'Resume'}/>
                    <NavLink href={'/experience'} text={'Experience'}/>
                    <NavLink href={'/projects'} text={'Projects'}/>
                    <NavLink href={'/contact'} text={'Contact'}/>
                    <NavLink href={'/blog'} text={'Blogs'}/>
                </div>
            </div>
            {children}
        </div>
    );
}

export default TopBar;