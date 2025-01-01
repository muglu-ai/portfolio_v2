import React from "react";

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden pb-16 px-6 text-white"
        >
            <h2 className="text-4xl font-extrabold text-white mb-10">Experience</h2>
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-start justify-between p-6  rounded-xl shadow-xl transition-transform transform hover:scale-105">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-teal-400">SCI Knowledge Interlinks</h3>
                    <p className="text-lg text-gray-400 mt-1">Nov 2023 - Present</p>
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                    <p className="text-gray-300 leading-relaxed">
                        Working as a software developer, focusing on building and maintaining web applications using modern technologies such as React, TypeScript, and Node.js. Contributed to various projects, enhancing user experience and optimizing performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;


