import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LottiePlayer from './LottiePlayer';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { lottieAnimations } from '../config/lottieConfig';
import { personalInfo } from '../data/personal';

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();

    const socialLinks = [
        {
            name: 'Email',
            icon: Mail,
            href: `mailto:${personalInfo.contact.email}`,
            label: personalInfo.contact.email
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: personalInfo.social.linkedin,
            label: 'Connect on LinkedIn'
        },
        {
            name: 'GitHub',
            icon: Github,
            href: personalInfo.social.github,
            label: 'View GitHub Profile'
        }
    ];

    return (
        <section id="contact" className="py-20 md:py-32">
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
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Let's collaborate on building intelligent systems together
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Left: TTA Contact Us Animation */}
                        <motion.div
                            className="flex justify-center order-2 md:order-1 relative"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="w-full max-w-sm relative">
                                {/* Decorative background */}
                                <div className="absolute inset-0 bg-sky-200 rounded-3xl -z-10"></div>
                                {/* TTA Contact Animation */}
                                <div className="p-8">
                                    <DotLottieReact
                                        src="/tta-contact-us.lottie"
                                        loop
                                        autoplay
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Info */}
                        <motion.div
                            className="space-y-6 order-1 md:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {/* Social Links */}
                            <div className="space-y-4">
                                {socialLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 glass-strong rounded-xl transition-all duration-300 group hover:scale-[1.02]"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                            whileHover={{ x: 8 }}
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                                                <Icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white">
                                                    {link.name}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    {link.label}
                                                </div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Quick Message */}
                            <div className="glass-strong rounded-xl p-6">
                                <h3 className="font-heading text-lg font-semibold mb-3">
                                    Quick Message
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Feel free to reach out for collaborations, opportunities, or just to connect!
                                </p>
                                <a
                                    href={`mailto:${personalInfo.contact.email}`}
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Email
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.footer
                className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <div className="section-container">
                    {/* Quote */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto text-lg">
                            "AI is the new electricity. Just as electricity transformed industries, AI will now do the same."
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                            — Andrew Ng
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-500">
                        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                        <p className="mt-1">Built with React, Tailwind CSS, and Framer Motion</p>
                    </div>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;
