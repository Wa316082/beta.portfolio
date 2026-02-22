'use client';
import {Button} from "@/components/ui/button";
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTheme} from "next-themes";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
    return (
        <Button variant='outline' size='icon' className='ml-4 bg-zinc-200 text-black dark:bg-gray-800 dark:text-white rounded-full cursor-pointer'
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                }}
        >
            <FaSun className='absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0'></FaSun>
            <FaMoon className='absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100'></FaMoon>
        </Button>
    )

}