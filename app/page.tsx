import {ThemeToggle} from "@/app/theme-toggle";
import Image from 'next/image'
import {CiLinkedin} from "react-icons/ci";
import Link from "next/dist/client/link";
import {FaFacebookF} from "react-icons/fa";
import {LuInstagram} from "react-icons/lu";
import {FaXTwitter} from "react-icons/fa6";
import {IoIosArrowRoundForward} from "react-icons/io";
export default function Home() {
  return (
      <div className="min-h-screen relative bg-grid-pattern">
          <div className="absolute top-4 right-4">
              <ThemeToggle/>
          </div>
          <div className='container mx-auto px-3 py-20 text-center'>
            <div className='grid grid-cols-11 gap-6'>
                <div className='col-span-3 relative p-0.5 rounded-lg overflow-hidden  min-h-96'>
                    <div
                        className="absolute inset-0 rounded-lg animate-spin-slow
                          bg-[conic-gradient(from_0deg,transparent_0%,#13fdfd_10%,#139bfd_20%,transparent_30%)]
                          blur-sm opacity-90"
                    />
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
                        <div className='bg-linear-to-br from-[#e2e8ec] to-[#ffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg mt-4 p-4 text-center custom-shadow'>
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
                                className="relative overflow-hidden cursor-pointer rounded-full p-0.5 "
                            ><div
                                className="absolute inset-0 rounded-lg animate-spin-slow
                                  bg-[conic-gradient(from_0deg,transparent_0%,#13fdfd_10%,#139bfd_20%,transparent_30%)]
                                  blur-sm opacity-90"
                                    />
                                <div className='relative rounded-full px-6 py-3 text-gray-800 dark:text-gray-200 hover:text-white transition-colors duration-300 custom-shadow group focus:outline-none border border-gray-200 hover:border-cyan-500 dark:border-gray-500 dark:hover:border-cyan-500 bg-linear-130 from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48]'>
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
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#139bfd] to-[#13fdfd] dark:bg-linear-45 dark:from-[#139bfd] dark:via-transparent dark:to-[#139bfd] transform scale-0 origin-center transition-transform duration-500 group-hover:scale-100 pointer-events-none z-0"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-8'>
                {/*    here will go topbar*/}
                    <div className='bg-linear-100 from-50% from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-2 border-2 fixed-top w-full z-20 shadow-md'>
                        <div className='flex items-center justify-between'>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer  custom-shadow hover:text-blue-500">
                                    About Me
                                </button>
                            </div>

                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer custom-shadow hover:text-blue-500">
                                   Projects
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer custom-shadow hover:text-blue-500">
                                    Skills
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer custom-shadow hover:text-blue-500">
                                    Experience
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer custom-shadow hover:text-blue-500">
                                    Contact
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer custom-shadow hover:text-blue-500">
                                    Blogs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-left px-4 py-6 bg-linear-to-br  from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg custom-shadow'>
                        <h2 className='text-3xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>Welcome to My Portfolio</h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>I am a passionate software developer with expertise in web development, specializing in React, Next.js, and Node.js. With a strong background in building scalable and efficient applications, I thrive on solving complex problems and delivering high-quality solutions. Explore my projects and experience to see how I can contribute to your next venture.</p>
                        <button
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#139bfd] to-[#13fdfd] text-white rounded-lg custom-shadow hover:from-[#13fdfd] hover:to-[#139bfd] transition-colors duration-300"
                        >
                            View Projects
                            <IoIosArrowRoundForward className="ml-2 text-lg" />
                        </button>
                    </div>
                </div>


            </div>

          </div>
      </div>
  );
}
