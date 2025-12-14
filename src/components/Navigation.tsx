import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-dark-surface/80 backdrop-blur-glass shadow-soft'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-2xl font-heading font-bold gradient-text"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            SM
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary font-medium transition-colors"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}

                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-soft bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border hover:shadow-soft transition-all"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <Sun className="w-5 h-5 text-dark-primary" />
                                ) : (
                                    <Moon className="w-5 h-5 text-light-primary" />
                                )}
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-soft bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border"
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <Sun className="w-5 h-5 text-dark-primary" />
                                ) : (
                                    <Moon className="w-5 h-5 text-light-primary" />
                                )}
                            </motion.button>

                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-soft bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border"
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-light-textPrimary dark:text-dark-textPrimary" />
                                ) : (
                                    <Menu className="w-6 h-6 text-light-textPrimary dark:text-dark-textPrimary" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        {/* Menu Card */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed top-20 left-4 right-4 z-30 md:hidden glass-card p-6 shadow-2xl border-light-primary/20 dark:border-dark-primary/20"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-left py-3 px-4 rounded-lg hover:bg-light-primary/5 dark:hover:bg-dark-primary/10 text-light-textSecondary dark:text-dark-textSecondary hover:text-light-primary dark:hover:text-dark-primary font-medium transition-all"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
