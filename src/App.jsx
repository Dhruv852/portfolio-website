import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300"
                    >
                        <Navbar />
                        <main>
                            <Hero />
                            <About />
                            <Skills />
                            <Projects />
                            <Experience />
                            <Certifications />
                            <Achievements />
                            <Contact />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default App;
