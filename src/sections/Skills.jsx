import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        skills: ["Python", "JavaScript", "C++", "SQL"]
    },
    {
        category: "AI & ML",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
    },
    {
        category: "API Development",
        skills: ["FastAPI"]
    },
    {
        category: "Tools & Platforms",
        skills: ["Git", "Jupyter", "VS Code"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors shadow-lg hover:shadow-primary/10"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary border-b border-gray-800 pb-2">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:bg-gray-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
