import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { projects } from '../data/portfolio';
import '../../src/styles/icons.module.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-semibold text-sm uppercase tracking-wider">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
                        Showcasing enterprise-grade applications built with modern technologies and best practices
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card p-8 hover-lift"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Project Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="md:col-span-1"
                                >
                                    <div className="relative rounded-soft overflow-hidden aspect-video md:aspect-square group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-white font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                                                {project.date}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Project Details */}
                                <div className="md:col-span-2 space-y-6">
                                    {/* Title and Description */}
                                    <div>
                                        <h3 className="text-2xl font-heading font-bold text-light-textPrimary dark:text-dark-textPrimary mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-sm bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary border-2 border-light-primary/20 dark:border-dark-primary/40 rounded-soft font-semibold shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Key Achievements */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-light-textPrimary dark:text-white mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-light-primary dark:text-dark-primary" strokeWidth={2.5} />
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.achievements.slice(0, 3).map((achievement, i) => (
                                                <li
                                                    key={i}
                                                    className="text-light-textSecondary dark:text-dark-textSecondary text-sm flex items-start gap-2"
                                                >
                                                    <span className="text-light-primary dark:text-dark-primary mt-1">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {project.metrics.map((metric) => (
                                            <div
                                                key={metric.label}
                                                className="p-3 bg-light-surface dark:bg-dark-surface border-2 border-light-border dark:border-dark-accent/50 rounded-soft shadow-sm"
                                            >
                                                <p className="text-xl font-heading font-bold text-light-primary dark:text-white">
                                                    {metric.value}
                                                </p>
                                                <p className="text-xs text-light-textSecondary dark:text-dark-accent mt-1 font-medium">
                                                    {metric.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {project.links.github && (
                                            <motion.a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-light-textPrimary dark:bg-white text-white dark:text-dark-bg rounded-soft hover:shadow-lg transition-all font-semibold border-2 border-transparent dark:border-white"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-5 h-5" strokeWidth={2.5} />
                                                GitHub
                                            </motion.a>
                                        )}
                                        {(project.links.live || project.links.demo) && (
                                            <motion.a
                                                href={project.links.live || project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-light-primary dark:bg-dark-primary text-white dark:text-dark-bg rounded-soft hover:shadow-lg transition-all font-semibold border-2 border-light-primary dark:border-dark-primary"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
                                                Live Demo
                                            </motion.a>
                                        )}
                                    </div>
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
