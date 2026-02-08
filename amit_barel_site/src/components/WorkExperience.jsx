import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            role: 'NOC Engineer',
            company: 'Global-e',
            period: 'Nov 2022 - Jan 2025',
            description: [
                'Identified and resolved complex technical issues by investigating system logs and ensuring smooth service operations.',
                'Utilized SQL queries for data analysis and troubleshooting, focusing on efficient data retrieval to support operational needs.',
                'Monitored service performance and reliability using Coralogix, Grafana, Postman, and Jira to minimize downtime and track issues.'
            ]
        },
        {
            id: 2,
            role: 'Integration Engineer',
            company: 'Global-e',
            period: 'Jan 2025 - Present',
            description: [
                'Managed the integration process of merchants into the company platform, ensuring seamless onboarding.',
                'Resolved technical issues by reviewing configurations, JavaScript and Liquid code, and customer-facing experiences.',
                'Collaborated with cross-functional teams to optimize merchant integrations and improve platform stability.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and the companies I've had the privilege to work with.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.role}</h3>
                                    <div className="flex items-center text-blue-400 text-lg">
                                        <Briefcase size={20} className="mr-2" />
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex items-center text-gray-500 mt-4 md:mt-0 bg-gray-900 px-4 py-2 rounded-full border border-gray-800">
                                    <Calendar size={16} className="mr-2" />
                                    {exp.period}
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-400">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
