import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <motion.div
                    animate={{
                        x: mousePosition.x * -50,
                        y: mousePosition.y * -50,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{
                        x: mousePosition.x * 50,
                        y: mousePosition.y * 50,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
                        Hello, I'm Rudra
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        AI & ML <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Enthusiast</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Passionate about building intelligent systems, data analysis, and turning complex problems into elegant solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border border-gray-600 hover:border-primary text-gray-300 hover:text-white rounded-full font-medium transition-all transform hover:scale-105 cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
