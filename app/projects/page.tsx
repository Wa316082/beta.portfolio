import React from 'react';
import Image from "next/image";
import Link from "next/dist/client/link";

function Page() {
    return (
        <div className="text-start mt-4">
            <h1 className="text-sm text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide font-semibold">Projects</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                My Work and Projects
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">Welcome to our Projects page! Here, we showcase a selection of our recent and ongoing projects that demonstrate our commitment to excellence and innovation. Each project is a testament to our dedication to delivering high-quality solutions that meet the unique needs of our clients. Explore our portfolio to see how we have helped businesses across various industries achieve their goals through creative and effective project execution.</p>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>Best Tutor</h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            Best Tutor is an online platform that connects students with qualified tutors for personalized learning experiences.
                        </p>
                        <Image src={'/besttutor.png'} alt={'besttutor'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.besttutor.xyz' target='_blank' rel='noopener noreferrer'
                                className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>BD Driving Training Institute</h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            BD Driving Training Institute is a premier driving school providing comprehensive driver education and training services to individuals of all ages.
                        </p>
                        <Image src={'/bddti.png'} alt={'bddti'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.bddti.com/' target='_blank' rel='noopener noreferrer'
                              className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>BAEI Express Limited</h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            BAEI Express Limited is a leading logistics and transportation company specializing in efficient and reliable delivery services across Bangladesh.
                        </p>
                        <Image src={'/baei.png'} alt={'baei'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.baeiexpress.com/' target='_blank' rel='noopener noreferrer'
                              className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>Rafflestag SG</h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            RafflesTag is a leading provider in Singapore of customized product like corporate gifts, promotional items, and personalized merchandise for businesses and individuals.
                        </p>
                        <Image src={'/rafflestag.png'} alt={'baei'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.rafflestag.sg/' target='_blank' rel='noopener noreferrer'
                              className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>
                            RafflesTag Admin Panel
                        </h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            The RafflesTag Admin Panel is a powerful web-based interface designed to manage and oversee the operations of RafflesTag&#39;s customized product services, allowing administrators to efficiently handle orders, inventory, and customer interactions.
                        </p>
                        <Image src={'/rafflestagadmin.png'} alt={'baei'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.rafflestag.sg/' target='_blank' rel='noopener noreferrer'
                              className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95 before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                    <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                        <h3 className='text-xl font-semibold'>Best Tutor ERP</h3>
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-200 ">
                            Best Tutor ERP is a comprehensive enterprise resource planning system designed to streamline and optimize the operations of Best Tutor, providing efficient management of student information, scheduling, billing, and communication for enhanced educational services.
                        </p>
                        <Image src={'/besttutor.png'} alt={'besttutorerp'} width={500} height={300} className='rounded-md object-cover mb-3 mt-2'/>
                        <Link href='https://www.besttutor.xyz' target='_blank' rel='noopener noreferrer'
                              className=' text-blue-500 rounded-md hover:text-blue-600 hover:underline transition-all duration-300'>Visit Website
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Page;