import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <a href="mailto:rudramahale1@gmail.com" className="text-lg">rudramahale1@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                                <Phone size={24} />
                            </div>
                            <a href="tel:+917620278897" className="text-lg">+91 76202 78897</a>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="https://github.com/Rudramahale" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/rudra-mahale-7a5782344/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3 bg-dark p-8 rounded-2xl border border-gray-800"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white placeholder-gray-500 transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
