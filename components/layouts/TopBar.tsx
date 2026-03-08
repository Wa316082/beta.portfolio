import React, {ReactNode} from 'react';
import NavLink from "@/components/layouts/NavLink";
import {FaBriefcase, FaFolderOpen, FaUser, FaEnvelope, FaBlog} from "react-icons/fa6";
import {ImProfile} from "react-icons/im";

function TopBar({children}: { children: ReactNode }) {
    return (
        <div className='lg:col-span-8 sm:col-span-6 col-span-11'>
            <div className="bg-linear-100 from-50% from-gray-200 to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-t-lg p-2 border-t-2 w-full z-50 shadow-md fixed bottom-0 left-0 right-0 md:rounded-lg md:border-2 md:sticky md:top-20">
                <div className='flex items-center justify-start flex-wrap gap-4'>
                    <NavLink href={'/'} text={'About Me'} icon={<FaUser />}/>
                    <NavLink href={'/resume'} text={'Resume'} icon={<ImProfile />}/>
                    <NavLink href="/experience" text="Experience" icon={<FaBriefcase />} />
                    <NavLink href="/projects" text="Projects" icon={<FaFolderOpen />} />
                    <NavLink href={'/contact'} text={'Contact'} icon={<FaEnvelope />} />
                    <NavLink href={'/blog'} text={'Blogs'} icon={<FaBlog />}/>
                </div>
            </div>
            {children}
        </div>
    );
}

export default TopBar;
