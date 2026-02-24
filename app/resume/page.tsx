import React from 'react';

function Page() {
    return (
        <div className="text-start mt-4">
            <h1 className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide font-semibold pl-4">Resume</h1>
            <h2 className="text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
                Evaluate your brand with a comprehensive resume.
            </h2>
            <p className='text-gray-600 dark:text-gray-400'>
                Here you can find a detailed resume of my professional experience, skills, and achievements. This resume provides insights into my background and qualifications, showcasing my expertise and accomplishments in the industry. Whether you&#39;re looking for a summary of my career or specific details about my work history, this resume serves as a comprehensive overview of my professional journey.
            </p>

            <h1 className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide font-semibold pl-4 mt-4">Introduction</h1>
            <h2 className="text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
                My Formal Introduction
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {[
                    { label: "Full name", value: "Md. Wasim Akram" },
                    { label: "Date of birth", value: "15 November 2000" },
                    { label: "Father's name", value: "Md. Saiful Islam" },
                    { label: "Mother's name", value: "Mrs. Farida Begum" },
                    { label: "Nationality", value: "Bangladeshi" },
                    { label: "Marital status", value: "Single" },
                    { label: "Contact number", value: "+880 1819237267" },
                    { label: "Email address", value: "wasimakram316082@gmail.com" },
                ].map((item, index) => (
                    <div key={index} className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl
                        before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95
                        before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                            <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                                {item.label}
                            </dt>

                            <dd className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-[#139bfd] transition-colors duration-300">
                                {item.value}
                            </dd>
                        </div>
                    </div>
                ))}
            </dl>
            <h1 className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide font-semibold pl-4 mt-4">Education</h1>
            <h2 className="text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
                My Educational Background
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {[
                    {
                        label: "Bachelor of Science",
                        value: "Manarat International University, Dhaka, Bangladesh (2021-2025)",
                        description: "Major in Computer Science and Engineering (CSE)",
                        gpa: "3.65 out of 4.00"
                    },
                    {
                        label: "Diploma in Engineering",
                        value: "Chapai Nawabganj Polytechnic Institute , Chapai Nawabganj, Bangladesh (2018-2021)",
                        description: "Food Science and Technology (FST)",
                        gpa: "3.71 out of 4.00"
                    },
                    {
                        label: "Secondary School Certificate (SSC)",
                        value: "Sapahar Pilot High School, Naogaon, Bangladesh (2014-2016)",
                        description: "Science Group",
                        gpa: "4.88 out of 5.00"
                    },
                    {
                        label: "Junior School Certificate (JSC)",
                        value: "Sapahar Pilot High School, Naogaon, Bangladesh (2013)",
                        description: "Science Group",
                        gpa: "5.00 out of 5.00"
                    }
                ].map((item, index) => (
                    <div key={index} className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl
                    before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95
                    before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                            <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                                {item.label}
                            </dt>

                            <dd className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-[#139bfd] transition-colors duration-300">
                                {item.value}
                            </dd>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {item.description}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                CGPA/GPA: {item.gpa}
                            </p>
                        </div>
                    </div>
                ))}
            </dl>

            <h1 className="text-sm text-gray-600 dark:text-gray-300 uppercase tracking-wide font-semibold pl-4 mt-4">Skills</h1>
            <h2 className="text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
                My Technical Skills and Proficiencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                    { title: "Programming", items: "Python, PHP, C, C++, JavaScript", level: 90 , description: "Proficient in multiple programming languages with a strong focus on Python and JavaScript."},
                    { title: "Web Development", items: "HTML, CSS, React.js, Node.js", level: 92, description: "Experienced in building responsive and dynamic web applications using modern web technologies." },
                    { title: "Database", items: "MySQL, MongoDB, PostgreSQL", level: 85 , description: "Skilled in designing and managing databases, ensuring efficient data storage and retrieval."},
                    { title: "Frameworks", items: "Django, Laravel, Next.js, Express.js", level: 88, description: "Experienced in using popular frameworks to develop robust and scalable applications." },
                    { title: "Cloud", items: "AWS, Azure", level: 70 , description: "Familiar with cloud platforms and services, enabling deployment and management of applications in the cloud."},
                    { title: "DSA", items: "Data Structures & Algorithms", level: 80 , description: "Strong understanding of data structures and algorithms, enabling efficient problem-solving and optimization."},
                ].map((skill, index) => (
                    <div key={index} className="relative overflow-hidden p-0.5 rounded-xl before:content-[''] before:absolute before:inset-0 before:rounded-xl
                    before:bg-linear-to-bl before:from-[#13fdfd] before:to-[#139bfd] before:opacity-0 before:scale-95
                    before:transition before:duration-500 hover:before:opacity-100 hover:before:scale-100 before:pointer-events-none custom-shadow">
                        <div className='relative group h-full bg-linear-to-br from-[#e2e8ec] to-[#ffffff] dark:from-[#010D16] dark:to-[#052B48] rounded-lg p-4 '>
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {skill.title}
                                </h4>
                                <span className="text-sm text-[#139bfd] font-medium">
                              {skill.level}%
                            </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {skill.items}
                            </p>
                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#13fdfd] to-[#139bfd] rounded-full transition-all duration-700 group-hover:scale-x-105 origin-left"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {skill.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;