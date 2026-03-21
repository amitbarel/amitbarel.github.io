import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'AirQualitySensor',
        description: "An Android app that tracks the user's location to periodically fetch and display real-time air quality (AQI) updates through a foreground service and notifications.",
        tech: ['Android', 'Java', 'OpenWeatherMap API'],
        github: 'https://github.com/amitbarel/AirQualitySensor',
        image: 'https://private-user-images.githubusercontent.com/81353791/353372302-b9769ccc-11c9-431b-bfea-b546c0c157e6.PNG?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzQxMTkwMTMsIm5iZiI6MTc3NDExODcxMywicGF0aCI6Ii84MTM1Mzc5MS8zNTMzNzIzMDItYjk3NjljY2MtMTFjOS00MzFiLWJmZWEtYjU0NmMwYzE1N2U2LlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzIxVDE4NDUxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQzOWMwMjU5YTMzMzUwMTZlN2RiYjNiMjdkYjkyOTFkMjQ3OGU1MmIzMTU3M2VmMWU4Y2NjMmIwYjRkODAzZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KOyAvAdHs7TDN7w6WE9q8KF0DceCDponIdTsrEqsi2g',
    },
    {
        title: 'MallApp Superapp',
        description: 'I was part of a team that developed a backend-driven SuperApp platform that manages users and dynamic objects, supports search and relationships between them, and enables mini-app commands via a REST API.',
        tech: ['Android Studio', 'Python', 'Retrofit', 'Spring', 'MongoDB'],
        github: 'https://github.com/amitbarel/MallSuperApp',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Kama Kama',
        description: 'We built a web app that is called Kama Kama, which is a platform for football web games. We also scraped data using python.',
        tech: ['Next.js', 'API Integration', 'PostgreSQL', 'TypeScript'],
        github: 'https://github.com/ValueHiLoRepo',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Github size={20} className="mr-2" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
