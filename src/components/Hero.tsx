import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const techStack = personalInfo.techStack.join(' • ');

    useEffect(() => {
        if (currentIndex < techStack.length) {
            const timeout = setTimeout(() => {
                setTypedText(techStack.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setCurrentIndex(0);
                setTypedText('');
            }, 3000);
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex, techStack]);

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center section-padding pt-32">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-light-primary/10 dark:bg-dark-primary/10 border border-light-primary/20 dark:border-dark-primary/20 rounded-soft"
                        >
                            <span className="text-light-primary dark:text-dark-primary font-medium">
                                👋 Hello, I'm {personalInfo.name.split(' ')[0]}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight text-light-textPrimary dark:text-light-surface"
                        >
                            Full-Stack <br className="hidden md:block" />
                            <span className="gradient-text">Software Engineer</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-light-textSecondary dark:text-dark-textSecondary"
                        >
                            {personalInfo.description}
                        </motion.p>

                        {/* Tech Stack Typing Animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center gap-3 p-4 glass-card"
                        >
                            <Code2 className="w-5 h-5 text-light-primary dark:text-dark-primary flex-shrink-0" />
                            <span className="text-light-textSecondary dark:text-dark-textSecondary font-mono text-sm md:text-base">
                                {typedText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <motion.button
                                onClick={scrollToProjects}
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                            </motion.button>

                            <motion.a
                                href="/resume.pdf"
                                download
                                className="btn-outline inline-flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Abstract 3D Art */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                        className="flex justify-center relative z-10"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative w-full max-w-lg"
                        >
                            {/* Main Image */}
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-light-primary/20 dark:shadow-dark-primary/20">
                                <img
                                    src="/hero-abstract.png"
                                    alt="Abstract 3D Art"
                                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                                />

                                {/* Glass Overlay/Reflection Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                            </div>

                            {/* Decorative Blur Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-light-primary/30 dark:bg-dark-primary/30 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-light-secondary/30 dark:bg-dark-secondary/30 rounded-full blur-3xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
