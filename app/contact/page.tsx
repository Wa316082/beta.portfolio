import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Page() {
    return (
        <div className="text-start mt-4">
            <h1 className="text-sm text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wide font-semibold">get in touch</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                Contact With Me
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                I would love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out to me. I am here to help and will get back to you as soon as possible.
            </p>

            {/* Form card with themed background and responsive layout */}
            <form className="mt-6">
                <div className="p-6 rounded-xl shadow-sm bg-linear-to-br from-[#f6fbfd] to-white dark:from-[#041826] dark:to-[#052b3f]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                aria-required="true"
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary_colors focus:border-primary_colors sm:text-sm transition-colors"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                aria-required="true"
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary_colors focus:border-primary_colors sm:text-sm transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary_colors focus:border-primary_colors sm:text-sm transition-colors"
                                placeholder="Tell me about your project or question..."
                            />
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-white bg-gradient-to-r from-[#13fdfd] to-[#139bfd] hover:from-[#11f7f7] hover:to-[#0d8ef6] transform transition duration-200 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary_colors"
                        >
                            <FaPaperPlane className="text-sm" />
                            <span className="text-sm font-medium">Send Message</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Page;