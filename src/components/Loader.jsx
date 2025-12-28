import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    useEffect(() => {
        // Complete loading after 3 seconds for smooth experience
        const timeout = setTimeout(() => {
            onLoadingComplete();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onLoadingComplete]);

    // Orbital particles - fewer, more elegant
    const orbitalParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (i * 360) / 8,
        delay: i * 0.1,
    }));

    // Ambient particles - subtle floating elements
    const ambientParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
    }));

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1a1a2e] overflow-hidden"
        >
            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
                }}
            />

            {/* Radial gradient background - breathing effect */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        'radial-gradient(circle at 50% 50%, rgba(118, 185, 255, 0.08) 0%, transparent 70%)',
                        'radial-gradient(circle at 50% 50%, rgba(118, 185, 255, 0.12) 0%, transparent 70%)',
                        'radial-gradient(circle at 50% 50%, rgba(118, 185, 255, 0.08) 0%, transparent 70%)',
                    ]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Ambient floating particles */}
            {ambientParticles.map((particle) => (
                <motion.div
                    key={`ambient-${particle.id}`}
                    className="absolute rounded-full bg-[#76B9FF] dark:bg-[#5DA0E6]"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.05, 0.15, 0.05],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Main content container */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Central logo with morphing geometric shapes */}
                <div className="relative w-48 h-48 mb-12">
                    {/* Rotating orbital ring */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {orbitalParticles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                className="absolute w-2 h-2 rounded-full bg-[#76B9FF] dark:bg-[#5DA0E6]"
                                style={{
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: '-4px',
                                    marginTop: '-4px',
                                }}
                                animate={{
                                    x: Math.cos((particle.angle * Math.PI) / 180) * 90,
                                    y: Math.sin((particle.angle * Math.PI) / 180) * 90,
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: particle.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Morphing geometric shapes */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {/* Outer hexagon */}
                        <motion.div
                            className="absolute w-32 h-32 border-2 border-[#76B9FF]/30 dark:border-[#5DA0E6]/30"
                            animate={{
                                borderRadius: ['30%', '50%', '30%'],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Central glassmorphic card with logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.34, 1.56, 0.64, 1],
                            delay: 0.2
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="relative glass-strong rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
                            {/* Pulsing glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#76B9FF]/20 to-[#5DA0E6]/20"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.span
                                className="relative font-heading text-7xl font-bold gradient-text"
                                animate={{
                                    textShadow: [
                                        '0 0 20px rgba(118, 185, 255, 0)',
                                        '0 0 20px rgba(118, 185, 255, 0.3)',
                                        '0 0 20px rgba(118, 185, 255, 0)',
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                D
                            </motion.span>
                        </div>
                    </motion.div>
                </div>

                {/* Elegant typography section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-4"
                >
                    {/* Name with letter spacing */}
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-wider">
                        DHRUV TIWARI
                    </h1>

                    {/* Subtitle with elegant animation */}
                    <motion.p
                        className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        AI & ML Engineer
                    </motion.p>

                    {/* Decorative line with shimmer */}
                    <div className="relative w-64 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mt-4 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#76B9FF] dark:via-[#5DA0E6] to-transparent"
                            animate={{
                                x: ['-200%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 0.5,
                            }}
                        />
                    </div>
                </motion.div>

                {/* Minimal loading indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12 flex gap-2"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[#76B9FF] dark:bg-[#5DA0E6]"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
