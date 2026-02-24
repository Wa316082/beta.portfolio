import React from 'react';
import {FaXTwitter} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/dist/client/link";
import {CiLinkedin} from "react-icons/ci";
import {FaFacebookF} from "react-icons/fa";
import {LuInstagram} from "react-icons/lu";
import {IoIosArrowRoundForward} from "react-icons/io";

function Aside() {
    return (
        <div className='lg:col-span-3 sm:col-span-5 col-span-11 rounded-lg overflow-hidden lg:sticky lg:top-20 lg:self-start p-0.5'>
            <div className='relative'>
                <div className='round-animation-1 absolute inset-0 h-24 w-24 bg-linear-90 from-sky-500 to-teal-400 blur-lg opacity-90'>
                </div>
                <div className="relative bg-linear-140 from-60% from-[#e2e8ec] to-[#bce3ff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-6 z-10">
                    <div className='bg-mist-950 rounded-lg mb-4'>
                        <Image src="/profile.png" alt="logo" height='1000' width='1000' />
                    </div>
                    <h1 className='text-4xl mb-2 text-gray-800 dark:text-gray-100'>Wasim Akram</h1>
                    <div className="text-sm text-gray-500 dark:text-gray-300 inline-flex items-center gap-2" title="Active" role="status" aria-label="User is active">
                        <span>Active</span>
                        <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500 border-2 border-white"></span>
                            </span>
                    </div>
                    <div className='bg-linear-to-br from-gray-50 to-transparent dark:from-[#010D16] dark:to-transparent rounded-lg mt-4 p-4 text-center'>
                        <p className='text-gray-600 dark:text-gray-400 mb-2'>Email: wasimakram316082@gmail.com</p>
                        <p className='text-gray-600 dark:text-gray-400 mb-2'>Phone: +880 1234567890</p>
                    </div>
                    <div className='flex items-center justify-center gap-4 mt-4'>
                        <Link
                            href="https://www.linkedin.com/in/wasim-akram-316082/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-full p-3 text-lg custom-shadow  transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-100
                                bg-linear-150 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]
                                 before:content-[''] before:absolute before:inset-0 before:rounded-full
                                 before:bg-linear-300 before:from-[#13fdfd] before:to-[#139bfd]
                                 before:transform before:scale-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-100"
                        >
                            <span className="relative z-10"><CiLinkedin /></span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/wasim-akram-316082/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-full p-3 text-lg custom-shadow  transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-100
                                bg-linear-145 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]
                                 before:content-[''] before:absolute before:inset-0 before:rounded-full
                                 before:bg-linear-315 before:from-[#13fdfd] before:to-[#139bfd]
                                 before:transform before:scale-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-100"
                        >
                            <span className="relative z-10"><FaFacebookF /></span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/wasim-akram-316082/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-full p-3 text-lg custom-shadow  transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-100
                                bg-linear-145 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]
                                 before:content-[''] before:absolute before:inset-0 before:rounded-full
                                 before:bg-linear-315 before:from-[#13fdfd] before:to-[#139bfd]
                                 before:transform before:scale-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-100"
                        >
                            <span className="relative z-10"><LuInstagram /></span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/wasim-akram-316082/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden rounded-full p-3 text-lg custom-shadow  transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-100
                                bg-linear-145 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]
                                 before:content-[''] before:absolute before:inset-0 before:rounded-full
                                 before:bg-linear-315 before:from-[#13fdfd] before:to-[#139bfd]
                                 before:transform before:scale-0 before:origin-center before:transition-transform before:duration-500 hover:before:scale-100"
                        >
                            <span className="relative z-10"><FaXTwitter /></span>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center mt-6'>
                        <button
                            aria-label="Download Resume"
                            className="relative overflow-hidden cursor-pointer rounded-full p-0.5 custom-shadow"
                        >
                            <div className="round-animation-2 absolute inset-0 h-10 w-10 bg-linear-90 from-sky-500 to-teal-400 blur-lg opacity-90"/>
                            <div className='relative rounded-full px-6 py-3 text-gray-800 dark:text-gray-200 hover:text-white transition-colors duration-300 group focus:outline-none border border-gray-200 hover:border-cyan-500 dark:border-gray-800 dark:hover:border-cyan-500 bg-linear-130 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]'>
                                      <span className="relative z-10 inline-flex items-center">
                                        <span className="mr-2 flex items-center w-6 overflow-hidden" aria-hidden="true">
                                          <span className="block transform translate-x-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-150 motion-reduce:transition-none">
                                            <IoIosArrowRoundForward />
                                          </span>
                                        </span>

                                        <span className="font-medium">Download Resume</span>

                                        <span className="ml-2 flex items-center w-6 overflow-hidden" aria-hidden="true">
                                          <span className="block transform translate-x-0 opacity-100 transition-all duration-200 ease-out group-hover:translate-x-4 group-hover:opacity-0 motion-reduce:transition-none">
                                            <IoIosArrowRoundForward />
                                          </span>
                                        </span>
                                      </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-linear-to-r from-[#139bfd] to-[#13fdfd] dark:bg-linear-45 dark:from-[#139bfd] dark:via-transparent dark:to-[#139bfd] transform scale-0 origin-center transition-transform duration-500 group-hover:scale-100 pointer-events-none z-0"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Aside;