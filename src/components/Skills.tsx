import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC = () => {
    const categoryIcons: Record<string, any> = {
        'Programming Languages': Code,
        'Backend Technologies': Database,
        'Frontend Technologies': Palette,
        'Databases': Database,
        'DevOps & Tools': Cloud,
    };

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-semibold text-sm uppercase tracking-wider">
                        Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
                        Proficient in modern technologies and frameworks for building scalable applications
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skillCategory, categoryIndex) => {
                        const Icon = categoryIcons[skillCategory.category] || Code;

                        return (
                            <motion.div
                                key={skillCategory.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                                className="glass-card p-8 hover-lift"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-soft shadow-lg">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-light-textPrimary dark:text-dark-textPrimary">
                                        {skillCategory.category}
                                    </h3>
                                </div>

                                {/* Skills List - Premium Pills */}
                                <div className="flex flex-wrap gap-3">
                                    {skillCategory.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="group relative"
                                        >
                                            <div className="px-4 py-2 bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-soft hover:border-light-primary dark:hover:border-dark-primary transition-colors cursor-default">
                                                <span className="text-light-textPrimary dark:text-dark-textPrimary font-medium text-sm group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Skills/Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 glass-card p-8"
                >
                    <h3 className="text-xl font-heading font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-6 text-center">
                        Additional Expertise
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            'Microservices Architecture',
                            'RESTful APIs',
                            'OAuth2 Security',
                            'CI/CD Pipelines',
                            'Agile/Scrum',
                            'Test-Driven Development',
                            'Code Reviews',
                            'Technical Documentation',
                            'Performance Optimization',
                            'Database Design',
                        ].map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-4 py-2 bg-gradient-to-r from-light-primary/10 to-light-accent/10 dark:from-dark-primary/10 dark:to-dark-accent/10 border border-light-primary/20 dark:border-dark-primary/20 rounded-soft text-light-textPrimary dark:text-dark-textPrimary font-medium text-sm"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
