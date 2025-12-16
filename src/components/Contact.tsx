import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // formatting the body for the email
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        // Construct mailto link
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;

        // Open default mail client
        window.location.href = mailtoLink;

        setIsSubmitting(false);
        setSubmitStatus('success');

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitStatus('idle'), 5000);
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    ];

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: personalInfo.github },
        { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
    ];

    return (
        <section id="contact" className="section-padding bg-light-surface/50 dark:bg-dark-surface/20">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-semibold text-sm uppercase tracking-wider">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-4 hover-lift"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-soft shadow-lg">
                                            <info.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <p className="text-light-textSecondary dark:text-dark-accent text-sm font-medium">
                                                {info.label}
                                            </p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-light-textPrimary dark:text-white font-semibold hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-light-textPrimary dark:text-white font-semibold">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-card p-6"
                        >
                            <h3 className="text-lg font-heading font-semibold text-light-textPrimary dark:text-white mb-4">
                                Connect on Social Media
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-light-surface dark:bg-dark-surface border-2 border-light-border dark:border-dark-accent/50 rounded-soft hover:shadow-lg transition-all shadow-sm"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6 text-light-primary dark:text-dark-primary" strokeWidth={2.5} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Download Resume */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="btn-primary w-full inline-flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download className="w-5 h-5" strokeWidth={2.5} />
                                Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-light-textPrimary dark:text-white font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-light-textPrimary dark:text-white font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-light-textPrimary dark:text-white font-semibold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-light-textPrimary dark:text-white font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="input-field resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" strokeWidth={2.5} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500/30 rounded-soft text-green-700 dark:text-green-400 text-sm text-center"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
