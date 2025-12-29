import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, ExternalLink } from 'lucide-react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/experience';

const Experience = () => {
    const [ref, visibleItems] = useStaggerAnimation(experience.length, 0.3);

    return (
        <section id="experience" className="py-20 md:py-32 bg-light-elevated dark:bg-dark-surface">
            <div className="section-container">
                <motion.div ref={ref}>
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            Experience & <span className="gradient-text">Training</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Building real-world solutions and gaining hands-on expertise
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-500 opacity-30" />

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={
                                        visibleItems.has(index)
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                                    }
                                    transition={{ duration: 0.8 }}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-primary-500 ring-4 ring-primary-500/20 z-10" />

                                    {/* Content */}
                                    <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="glass-strong rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
                                            {/* Type Badge */}
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${item.type === 'internship'
                                                ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400'
                                                : 'bg-accent-500/20 text-accent-600 dark:text-accent-400'
                                                }`}>
                                                {item.type === 'internship' ? 'Internship' : 'Training'}
                                            </span>

                                            {/* Role & Organization */}
                                            <h3 className="font-heading text-xl font-semibold mb-2">
                                                {item.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                                                <Briefcase className="w-4 h-4" />
                                                <span className="font-medium">{item.organization}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {item.location}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {item.duration}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                {item.description}
                                            </p>

                                            {/* Achievements */}
                                            <div className="space-y-2 mb-4">
                                                {item.achievements.map((achievement, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <span className="text-accent-400 mt-1">•</span>
                                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                                            {achievement}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Impact Metric */}
                                            {item.impact && (
                                                <div className="flex items-center gap-2 p-3 rounded-lg bg-primary-500/10 border border-primary-500/20">
                                                    <TrendingUp className="w-5 h-5 text-primary-500" />
                                                    <div>
                                                        <span className="font-bold text-primary-600 dark:text-primary-400">
                                                            {item.impact.metric}
                                                        </span>
                                                        <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                                                            {item.impact.description}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {item.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 rounded text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Certificate Link */}
                                            {item.certificateUrl && (
                                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <a
                                                        href={item.certificateUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                        View Certificate
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
