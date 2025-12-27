import { motion } from 'framer-motion';
import { Code2, Boxes, Wrench, Sparkles } from 'lucide-react';
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
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10" />

            <div className="section-container relative z-10">
                <motion.div ref={ref}>
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
                        >
                            <Sparkles className="w-4 h-4 text-primary-500" />
                            <span className="text-sm font-semibold text-primary-500">Technical Arsenal</span>
                        </motion.div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                            Skills & <span className="gradient-text">Expertise</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Leveraging cutting-edge technologies to build intelligent, scalable solutions
                        </p>
                    </div>

                    {/* Skills Categories */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {skillCategories.map((categoryKey, index) => {
                            const category = skills[categoryKey];
                            const IconComponent = categoryIcons[categoryKey];
                            return (
                                <motion.div
                                    key={categoryKey}
                                    className="group glass-strong rounded-2xl p-8 transition-all duration-300 hover:scale-[1.03] border-2 border-transparent hover:border-primary-500/30"
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
                                        <motion.div
                                            className="w-20 h-20 rounded-2xl bg-primary-500 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                                        </motion.div>
                                    </div>

                                    {/* Category Title */}
                                    <h3 className="font-heading text-xl font-bold mb-6 text-center">
                                        {category.category}
                                    </h3>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill.name}
                                                className="px-4 py-2 rounded-lg bg-white/60 dark:bg-gray-800/60 text-sm font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200 cursor-default border border-primary-200 dark:border-gray-700"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={
                                                    visibleItems.has(index)
                                                        ? { opacity: 1, scale: 1 }
                                                        : { opacity: 0, scale: 0.8 }
                                                }
                                                transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                                                whileHover={{ y: -3, scale: 1.05 }}
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
                        className="mt-16 text-center"
                        initial={{ opacity: 0 }}
                        animate={visibleItems.size > 0 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto border-2 border-primary-200/50 dark:border-primary-800/30">
                            <h4 className="font-heading text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                                Professional Competencies
                            </h4>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skills.soft.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="px-5 py-2.5 rounded-full glass text-sm font-semibold border border-accent-300 dark:border-accent-700 hover:bg-accent-500 hover:text-white transition-all duration-200"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
