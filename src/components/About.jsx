import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottiePlayer from './LottiePlayer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { lottieAnimations } from '../config/lottieConfig';
import { personalInfo } from '../data/personal';

const About = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-20 md:py-32 relative">
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
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Building intelligent systems that bridge research and real-world impact
                        </p>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Learning Concept Animation */}
                        <motion.div
                            className="flex justify-center relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="w-full max-w-lg relative">
                                {/* About Animation */}
                                <div className="w-96 h-96 mx-auto">
                                    <DotLottieReact
                                        src="/about.lottie"
                                        loop
                                        autoplay
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Content */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="glass-strong rounded-2xl p-8 space-y-4">
                                {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">9.3</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                                </div>
                                <div className="glass rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                                </div>
                                <div className="glass rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">3</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                                </div>
                                <div className="glass rounded-xl p-6 text-center">
                                    <div className="text-3xl font-bold gradient-text mb-2">92%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Max Accuracy</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
