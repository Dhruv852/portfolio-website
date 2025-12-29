import { motion } from 'framer-motion';
import { Award, Heart, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { achievements } from '../data/certifications';

const iconMap = {
    award: Award,
    heart: Heart
};

const Achievements = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="achievements" className="py-20 md:py-32 bg-light-elevated dark:bg-dark-surface">
            <div className="section-container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Achievements</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Recognition for excellence and service
                        </p>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {achievements.map((achievement, index) => {
                            const Icon = iconMap[achievement.icon] || Award;
                            return (
                                <motion.div
                                    key={achievement.id}
                                    className="glass-strong rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex gap-4">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-heading text-lg font-semibold mb-1">
                                                {achievement.title}
                                            </h3>
                                            {achievement.organization && (
                                                <p className="text-sm text-primary-500 font-medium mb-2">
                                                    {achievement.organization}
                                                </p>
                                            )}
                                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                                {achievement.description}
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                                                {achievement.date}
                                            </p>
                                            {achievement.credentialUrl && (
                                                <a
                                                    href={achievement.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    View Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
