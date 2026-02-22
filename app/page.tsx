import {ThemeToggle} from "@/app/theme-toggle";
import Image from 'next/image'
import {CiLinkedin} from "react-icons/ci";
import Link from "next/dist/client/link";
import {FaFacebookF} from "react-icons/fa";
import {LuInstagram} from "react-icons/lu";
import {FaCode, FaCodeBranch, FaDatabase, FaXTwitter} from "react-icons/fa6";
import {IoIosArrowRoundForward} from "react-icons/io";
export default function Home() {
  return (
      <div className="min-h-screen relative bg-grid-pattern">
          <div className="top-4 right-4 z-30 fixed">
              <ThemeToggle/>
          </div>
          <div className='container mx-auto px-3 py-20 text-center'>
            <div className='grid grid-cols-11 gap-6'>
                <div className='lg:col-span-3 sm:col-span-5 col-span-11 p-0.5 rounded-lg overflow-hidden sm:sticky top-20 relative h-fit'>
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
                <div className='lg:col-span-8 sm:col-span-6 col-span-11 '>
                {/*    here will go topbar*/}
                    <div className='bg-linear-100 from-50% from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-2 border-2 w-full z-20 shadow-md'>
                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <div
                                className="relative overflow-hidden p-0.5 custom-shadow rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer hover:text-blue-500">
                                    About Me
                                </button>
                            </div>

                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] custom-shadow before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer hover:text-blue-500">
                                   Projects
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] custom-shadow before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointe hover:text-blue-500">
                                    Skills
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] custom-shadow before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer hover:text-blue-500">
                                    Experience
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute custom-shadow before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer  hover:text-blue-500">
                                    Contact
                                </button>
                            </div>
                            <div
                                className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute custom-shadow before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none">
                                <button className="relative z-10 custom-gradient rounded-lg px-4 py-3 cursor-pointer  hover:text-blue-500">
                                    Blogs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-left'>
                        <p className='text-sm text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide font-semibold'>
                            About Me
                        </p>
                        <h2 className='text-3xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>
                            Building Innovative Solutions with Code
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>Hello, I am a passionate software developer with expertise in web development, specializing in React, Next.js, and Node.js. With a strong background in building scalable and efficient applications, I thrive on solving complex problems and delivering high-quality solutions. Explore my projects and experience to see how I can contribute to your next venture.</p>
                    </div>
                    <div className='mt-8 text-left'>
                        <h2 className='text-3xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>
                            What I Do?
                        </h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>I specialize in creating dynamic and responsive web applications using modern technologies. My expertise includes front-end development with React and Next.js, as well as back-end development with Node.js. I am passionate about building innovative solutions that enhance user experiences and drive business growth.</p>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                                <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                                    <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-gradient-to-tr from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
                                        <FaCode />
                                    </div>
                                    <h3 className='text-2xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>Web Development</h3>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Building responsive and user-friendly websites and applications using React, Next.js, and Node.js.
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                                <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                                    <div className=" flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-gradient-to-tr from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
                                        <FaCodeBranch />
                                    </div>
                                    <h3 className='text-2xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>API Development</h3>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Designing and implementing robust APIs using Node.js, PHP with Laravel, and Python framework to enable seamless integration and data exchange.
                                    </p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                                <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                                    <div className=" flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-gradient-to-tr from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
                                        <FaDatabase />
                                    </div>
                                    <h3 className='text-2xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>Database Management</h3>
                                    <p className='text-gray-600 dark:text-gray-400'>
                                        Proficient in managing databases using MySQL, PgSql, and MongoDB, ensuring efficient data storage and retrieval for applications.
                                    </p>
                                </div>
                            </div>
                                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                                        <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-gradient-to-tr from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
                                            <FaXTwitter />
                                        </div>
                                        <h3 className='text-2xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>Version Control</h3>
                                        <p className='text-gray-600 dark:text-gray-400'>
                                            Experienced in using Git for version control, enabling efficient collaboration and code management across projects.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
              <div className='mt-20 text-center text-gray-600 dark:text-gray-400'>
                  <p>&copy; 2024 Wasim Akram. All rights reserved.</p>
                   <p className='mt-2'>Designed and Developed by Wasim Akram</p>
              </div>
          </div>
      </div>
  );
}
