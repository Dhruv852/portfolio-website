import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';

const Projects = () => {
    const [ref, visibleItems] = useStaggerAnimation(projects.length, 0.15);

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="section-container">
                <motion.div ref={ref}>
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Building intelligent systems that solve real-world problems
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className={`group glass-strong rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${project.featured ? 'ring-2 ring-primary-500/50' : ''
                                    }`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    visibleItems.has(index)
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 50 }
                                }
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="flex items-center gap-1 text-primary-500 text-sm font-medium mb-3">
                                        <Star className="w-4 h-4 fill-current" />
                                        Featured
                                    </div>
                                )}

                                {/* Project Title */}
                                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    {project.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Impact Metrics */}
                                {project.impact && project.impact.length > 0 && (
                                    <div className="mb-4 space-y-1">
                                        {project.impact.slice(0, 2).map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm">
                                                <span className="text-accent-400 mt-1">•</span>
                                                <span className="text-gray-600 dark:text-gray-400">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-600 dark:text-gray-400 text-xs font-medium">
                                            +{project.techStack.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                    )}
                                    {!project.githubUrl && !project.liveUrl && (
                                        <span className="text-sm text-gray-400 dark:text-gray-500 italic">
                                            Links coming soon
                                        </span>
                                    )}
                                </div>

                                {/* Date */}
                                <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
                                    {project.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Add More Projects Note */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={visibleItems.size > 0 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            More projects available on{' '}
                            <a
                                href="https://github.com/Dhruv852"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:underline font-medium"
                            >
                                GitHub
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
