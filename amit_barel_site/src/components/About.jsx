import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Android Development", 'JavaScript', 'React', 'Node.js', 'TypeScript',
        'HTML5 & CSS3', 'Tailwind CSS', 'Git & GitHub', 'Python', "Swift"
    ];

    return (
        <section id="about" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative max-w-sm mx-auto">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
                            <img
                                src="https://avatars.githubusercontent.com/u/81353791?s=400&u=d8bb689a367a2553de1e4680459d9b75de12a9e9&v=4"
                                alt="About Me"
                                className="relative rounded-full shadow-2xl w-full aspect-square object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I'm a passionate developer who loves solving complex technical problems and creating functional solutions.
                            Currently working as an Integration Engineer at Global-e, I help merchants seamlessly integrate into our
                            platform by troubleshooting configurations, reviewing JavaScript and Liquid code, and ensuring smooth
                            customer-facing experiences. Previously, I worked as a NOC Engineer where I honed my skills in SQL-based
                            data analysis and system monitoring using tools like Coralogix, Grafana, and Jira.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Beyond my day-to-day work, I'm diving into mobile software development and constantly expanding my knowledge
                            of frontend technologies. When I'm not coding, you might find me sharing weird geography facts (ask me for
                            trivia!), or watching sports. Even though I'm 6'2", I'm definitely better at debugging than dunking.
                            I believe in writing clean, maintainable code and always look for ways to improve both my technical skills
                            and the systems I work on.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-white transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
