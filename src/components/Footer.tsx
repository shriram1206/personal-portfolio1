import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: personalInfo.github },
        { name: 'LinkedIn', icon: Linkedin, href: personalInfo.linkedin },
        { name: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
    ];

    return (
        <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold gradient-text mb-3">
                            {personalInfo.name}
                        </h3>
                        <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-4">
                            {personalInfo.title}
                        </p>
                        <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-6">
                            {personalInfo.tagline}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary hover:border-light-primary dark:hover:border-dark-primary transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-4">
                            Get in Touch
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email} `}
                                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                                >
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`tel:${personalInfo.phone} `}
                                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                                >
                                    {personalInfo.phone}
                                </a>
                            </li>
                            <li className="text-light-textSecondary dark:text-dark-textSecondary">
                                {personalInfo.location}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-light-border dark:border-dark-border pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-light-textSecondary dark:text-dark-textSecondary text-sm font-medium">
                            © {new Date().getFullYear()} Shriram M. All rights reserved.
                        </div>
                        <motion.button
                            onClick={scrollToTop}
                            className="p-2 bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent text-white rounded-soft hover:shadow-soft transition-all"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Back to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
