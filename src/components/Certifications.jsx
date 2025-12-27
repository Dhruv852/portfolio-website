import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { certifications } from '../data/certifications';

const Certifications = () => {
    const [ref, visibleItems] = useStaggerAnimation(certifications.length, 0.15);

    return (
        <section id="certifications" className="py-20 md:py-32">
            <div className="section-container">
                <motion.div ref={ref}>
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Certifications</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Continuous learning and professional development
                        </p>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="group glass-strong rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:scale-[1.02]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    visibleItems.has(index)
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.9 }
                                }
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Animated border glow */}
                                <div className="absolute inset-0 rounded-2xl bg-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center mb-4">
                                        <Award className="w-6 h-6 text-primary-500" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-heading text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
                                        {cert.title}
                                    </h3>

                                    {/* Issuer */}
                                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                                        {cert.issuer}
                                    </p>

                                    {/* Category */}
                                    <span className="inline-block px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-xs font-medium mb-3">
                                        {cert.category}
                                    </span>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        {cert.date}
                                    </div>

                                    {/* Credential Link */}
                                    {cert.credentialUrl ? (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Credential
                                        </a>
                                    ) : (
                                        <span className="text-sm text-gray-400 dark:text-gray-500 italic">
                                            Credential available on request
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
