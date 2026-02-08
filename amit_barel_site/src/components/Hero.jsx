import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-base font-semibold tracking-wide text-blue-400 uppercase tracking-widest mb-4">
                        Welcome to my portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Amit Barel</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-8">
                        Building digital experiences with code and creativity. I turn ideas into reality using modern web technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                        >
                            View My Work
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/amitbarel" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com/in/amitbarel" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="mailto:amitbarel@outlook.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
