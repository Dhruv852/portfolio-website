import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottiePlayer from './LottiePlayer';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { lottieAnimations } from '../config/lottieConfig';
import { personalInfo } from '../data/personal';

const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resume.url;
        link.download = personalInfo.resume.filename;
        link.click();
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-gradient opacity-20" />

            {/* Background animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                <div className="w-[500px] h-[500px]">
                    <DotLottieReact
                        src="/back.lottie"
                        loop
                        autoplay
                        speed={0.5}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="section-container relative z-10 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Name */}
                    <motion.h1
                        className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>

                    {/* Identity line */}
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {personalInfo.title}
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <button
                            onClick={scrollToProjects}
                            className="btn-primary group flex items-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={downloadCV}
                            className="btn-secondary group flex items-center gap-2"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            Download CV
                        </button>
                    </motion.div>

                    {/* Availability badge */}
                    {personalInfo.availability.status === 'open' && (
                        <motion.div
                            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            {personalInfo.availability.message}
                        </motion.div>
                    )}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.2, duration: 0.8 },
                        y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
                    }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
