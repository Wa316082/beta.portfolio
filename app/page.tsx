import {FaCode, FaCodeBranch, FaDatabase, FaSquareGithub, FaXTwitter} from "react-icons/fa6";
export default function Home() {
  return (
        <div className=''>
            <div className='mt-4 text-left'>
                <p className='text-sm text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide font-semibold pl-4'>
                    About Me
                </p>
                <h2 className='text-3xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>
                    Building Innovative Solutions with Code
                </h2>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>Hello, I am a passionate software developer with expertise in web development, specializing in React,
                    Next.js, PHP Laravel, Python, Django, and Node.js. With a strong background in building scalable and efficient applications, I thrive on solving complex problems and delivering
                    high-quality solutions. Explore my projects and experience to see how I can contribute to your next venture.</p>
            </div>
            <div className='mt-8 text-left'>
                <h2 className='text-3xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>
                    What I Do?
                </h2>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>I specialize in creating dynamic and responsive web applications using modern technologies.
                    My expertise includes front-end development with React and Next.js, as well as back-end development with Node.js, and PHP Laravel. I am passionate about building innovative solutions that enhance user experiences and drive business growth.</p>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl
                    before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95
                    before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                            <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-linear-to-br from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
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
                            <div className=" flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-linear-to-br from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
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
                            <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-linear-to-br from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
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
                            <div className="flex items-center justify-center w-12 h-12 text-2xl rounded-full bg-linear-to-br from-[#13fdfd] to-[#139bfd] text-white mb-3 shadow-[0_0_10px_5px_rgba(98,226,255,0.6)]">
                                <FaSquareGithub />
                            </div>
                            <h3 className='text-2xl text-gray-800 dark:text-gray-100 font-semibold mb-2'>Version Control</h3>
                            <p className='text-gray-600 dark:text-gray-400'>
                                Experienced in using Git for version control, enabling efficient collaboration and code management across projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 text-left'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                    <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className=' relative bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] dark:text-white rounded-lg p-4 text-center custom-shadow'>
                            <h3 className='text-2xl font-semibold mb-2'>3+</h3>
                            <p className='dark:text-gray-200'>Years of Experience</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] dark:text-white rounded-lg p-4 text-center custom-shadow'>
                            <h3 className='text-2xl font-semibold mb-2'>30+</h3>
                            <p className='dark:text-gray-200'>Projects Completed</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] dark:text-white rounded-lg p-4 text-center custom-shadow'>
                            <h3 className='text-2xl font-semibold mb-2'>10+</h3>
                            <p className='dark:text-gray-200'>Happy Clients</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] dark:text-white rounded-lg p-4 text-center custom-shadow'>
                            <h3 className='text-2xl font-semibold mb-2'>100%</h3>
                            <p className='dark:text-gray-200'>Client Satisfaction</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  );
}
