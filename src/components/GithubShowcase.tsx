import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Book } from 'lucide-react';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    homepage: string | null;
}

const GithubShowcase: React.FC = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch user's public repos, sorted by recently updated
                const response = await fetch('https://api.github.com/users/shriram1206/repos?sort=updated&per_page=6');
                if (!response.ok) throw new Error('Failed to fetch repos');
                const data = await response.json();
                
                // Filter out forks and specific repos like 'birthday'
                setRepos(data.filter((repo: any) => !repo.fork && repo.name !== 'birthday').slice(0, 6));
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading || repos.length === 0) {
        return null; // Handle loading gracefully with empty return or skeleton
    }

    return (
        <section id="github-showcase" className="section-padding bg-light-surface/50 dark:bg-dark-surface/50">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                        <Github className="w-5 h-5" /> Open Source Activity
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">
                        GitHub <span className="gradient-text">Repositories</span>
                    </h2>
                    <p className="text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto">
                        A real-time look at my recent open-source contributions, personal tools, and technical sandboxes.
                    </p>
                </motion.div>

                {/* Repositories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, index) => (
                        <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={repo.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 flex flex-col h-full hover-lift group border border-light-border/50 dark:border-dark-border group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Book className="w-5 h-5 text-light-primary dark:text-dark-primary" />
                                    <h3 className="font-heading font-bold text-lg text-light-textPrimary dark:text-dark-textPrimary group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors line-clamp-1">
                                        {repo.name}
                                    </h3>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-light-textSecondary dark:text-dark-textSecondary">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-4 h-4 group-hover:text-yellow-500 transition-colors" />
                                        {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
                                        {repo.forks_count}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary flex-grow mb-6 line-clamp-3">
                                {repo.description || 'No description provided for this repository.'}
                            </p>

                            <div className="mt-auto pt-4 border-t border-light-border/50 dark:border-dark-border flex items-center justify-between">
                                {repo.language && (
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-light-primary dark:bg-dark-primary"></span>
                                        <span className="text-xs font-semibold text-light-textPrimary dark:text-dark-textPrimary">
                                            {repo.language}
                                        </span>
                                    </div>
                                )}
                                {repo.homepage && (
                                    <span className="text-xs font-semibold text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/20 px-2 py-1 rounded">
                                        Live Demo
                                    </span>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/shriram1206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-light-primary dark:text-dark-primary font-semibold hover:underline"
                    >
                        View all repositories on GitHub <Github className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubShowcase;