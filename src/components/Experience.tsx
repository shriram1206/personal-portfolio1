import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding bg-light-surface/50 dark:bg-dark-surface/20">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-semibold text-sm uppercase tracking-wider">
                        Career Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
                        Hands-on experience with enterprise development, AI/ML, and collaborative team environments
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative mb-12 last:mb-0"
                        >
                            {/* Timeline Line */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-20 h-full w-0.5 bg-gradient-to-b from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent opacity-30 hidden md:block" />
                            )}

                            {/* Experience Card */}
                            <div className="glass-card p-6 md:p-8 hover-lift">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-16 h-16 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-soft flex items-center justify-center shadow-soft"
                                        >
                                            <Briefcase className="w-8 h-8 text-white" strokeWidth={2.5} />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4">
                                        {/* Header */}
                                        <div>
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                                                <h3 className="text-xl font-heading font-bold text-light-textPrimary dark:text-white">
                                                    {exp.position}
                                                </h3>
                                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary border-2 border-light-primary/20 dark:border-dark-primary/40 rounded-soft w-fit shadow-sm">
                                                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                                                </span>
                                            </div>
                                            <p className="text-light-primary dark:text-dark-primary font-semibold">
                                                {exp.company}
                                            </p>
                                            <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mt-1">
                                                {exp.duration}
                                            </p>
                                        </div>

                                        {/* Achievements */}
                                        <div className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-light-primary dark:text-dark-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                                    <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm leading-relaxed">
                                                        {achievement}
                                                    </p>
                                                </motion.div>
                                            ))}
                                        </div>
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

export default Experience;
