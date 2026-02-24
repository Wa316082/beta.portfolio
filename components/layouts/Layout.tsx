import React, {ReactNode} from 'react';
import {ThemeToggle} from "@/app/theme-toggle";
import Aside from "@/components/layouts/Aside";
import TopBar from "@/components/layouts/TopBar";

function Layout({children}: { children: ReactNode }) {
    return (
        <div className="min-h-screen relative bg-grid-pattern">
            <div className="top-4 right-4 z-30 fixed">
                <ThemeToggle/>
            </div>
            <div className='container mx-auto px-3 py-20 text-center'>
                <div className='grid grid-cols-11 gap-6'>
                    <Aside/>
                    <TopBar>
                        {children}
                    </TopBar>
                </div>
            </div>
        </div>
    );
}

export default Layout;