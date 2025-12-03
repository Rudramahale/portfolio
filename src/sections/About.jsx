import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Database, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left Column - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-6 opacity-20 blur-lg"></div>
                            <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
                                <Code className="text-primary w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Developer</h3>
                                <p className="text-gray-400 mb-6">Building scalable web applications and intuitive user interfaces.</p>

                                <Brain className="text-secondary w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">AI Researcher</h3>
                                <p className="text-gray-400 mb-6">Exploring the frontiers of Machine Learning and Deep Learning.</p>

                                <Database className="text-green-400 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Data Analyst</h3>
                                <p className="text-gray-400">Transforming raw data into actionable insights.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I am a passionate AI & ML enthusiast with a strong foundation in computer science. My journey began with a curiosity about how machines learn, which led me to dive deep into neural networks, natural language processing, and computer vision.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I love bridging the gap between theoretical AI concepts and real-world applications. Whether it's building a recommendation system, deploying a model to the cloud, or creating a stunning frontend to showcase it, I enjoy every step of the process.
                        </p>

                        <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                            <GraduationCap className="text-primary w-6 h-6 flex-shrink-0" />
                            <div>
                                <h4 className="font-semibold text-white">Education</h4>
                                <p className="text-gray-300 text-sm">Pursuing Diploma at K.K.Wagh Polytechnic, Nashik</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 text-center">
                                <span className="block text-4xl font-bold text-white mb-2">2+</span>
                                <span className="text-base text-gray-400">Years Experience of Coding</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
