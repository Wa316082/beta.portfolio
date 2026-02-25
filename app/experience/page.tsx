import React from 'react';

function Page() {
    return (
        <div className="text-start mt-4">
            <h1 className="text-sm text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide font-semibold">Experience</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
               My Work Experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
                I have worked in various roles across different industries, gaining valuable experience and skills along the way. My journey has been marked by a commitment to excellence and a passion for learning. I have had the opportunity to collaborate with diverse teams, contribute to innovative projects, and develop a strong foundation in my field. Each experience has shaped my professional growth and has equipped me with the tools necessary to excel in future endeavors.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                {[
                    {
                        label: "RafflesTag PTE. LTD.",
                        value: "Sr. Software Engineer (July-2024-Present)",
                       jobDescription: "As a Senior Software Engineer at RafflesTag PTE. LTD., I am responsible for designing, developing, and maintaining software applications that meet the needs of our company."
                    },
                    {
                        label: "DotzIT Limited",
                        value: "Software Engineer (Jan-2023-June-2024)",
                        jobDescription: "As a Software Engineer at DotzIT Limited, I was responsible for developing and maintaining software applications that met the needs of our clients."
                    },
                    {
                        label: "Ekopii Limited",
                        value: "Full Stack Developer (July-2022-dec-2022)",
                        jobDescription: "As a Full Stack Developer at Ekopii Limited, I was responsible for developing and maintaining software applications that met the needs of our clients."
                    },
                    {
                        label: "E-desh Limited",
                        value: "Junior Full Stack Developer Intern (Jan-2021-June-2022)",
                        jobDescription: "As a Junior Full Stack Developer Intern at E-desh Limited, I was responsible for assisting in the development and maintenance of software applications that met the needs of our clients."
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
                                {item.jobDescription}
                            </p>
                        </div>
                    </div>
                ))}
            </dl>

        </div>

    );
}

export default Page;