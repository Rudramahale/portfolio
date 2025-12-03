import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import model1photo from '../assets/model1photo.jpg';

const projectsData = [
    {
        title: "House price prediction using linear regression",
        description: "A machine learning project that predicts house prices using linear regression.",
        tags: ["Python", "NumPy", "Matplotlib", "Scikit-learn", "Seaborn"],
        links: { github: "https://github.com/Rudramahale/Internship-projects/blob/main/model.ipynb", demo: "#" },
        image: model1photo
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/20 group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="h-48 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <Folder className="w-16 h-16 text-gray-500 group-hover:text-primary transition-colors z-10" />
                                    </>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-dark rounded text-gray-300 border border-gray-600 group-hover:border-primary/50 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors hover:underline">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors hover:underline">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
