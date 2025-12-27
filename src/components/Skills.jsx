import { motion } from 'framer-motion';
import { Code2, Boxes, Wrench } from 'lucide-react';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';
import { skills, skillCategories } from '../data/skills';

// Icon mapping for each category
const categoryIcons = {
    languages: Code2,
    frameworks: Boxes,
    tools: Wrench
};

const Skills = () => {
    const [ref, visibleItems] = useStaggerAnimation(skillCategories.length, 0.2);

    return (
        <section id="skills" className="py-20 md:py-32 bg-light-elevated dark:bg-dark-surface">
            <div className="section-container">
                <motion.div ref={ref}>
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive toolkit for building intelligent systems
                        </p>
                    </div>

                    {/* Skills Categories */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((categoryKey, index) => {
                            const category = skills[categoryKey];
                            const IconComponent = categoryIcons[categoryKey];
                            return (
                                <motion.div
                                    key={categoryKey}
                                    className="glass-strong rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={
                                        visibleItems.has(index)
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 50 }
                                    }
                                    transition={{ duration: 0.6 }}
                                >
                                    {/* Category Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 rounded-2xl bg-primary-500 flex items-center justify-center">
                                            <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
                                        </div>
                                    </div>

                                    {/* Category Title */}
                                    <h3 className="font-heading text-xl font-semibold mb-6 text-center">
                                        {category.category}
                                    </h3>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill.name}
                                                className="px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 text-sm font-medium hover:bg-primary-500/20 hover:scale-105 transition-all duration-200 cursor-default"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={
                                                    visibleItems.has(index)
                                                        ? { opacity: 1, scale: 1 }
                                                        : { opacity: 0, scale: 0.8 }
                                                }
                                                transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                                                whileHover={{ y: -2 }}
                                            >
                                                {skill.name}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Soft Skills */}
                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={visibleItems.size > 0 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <h4 className="font-heading text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                            Soft Skills
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.soft.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-4 py-2 rounded-full glass text-sm font-medium"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
