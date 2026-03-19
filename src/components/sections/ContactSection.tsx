import React, { useRef, useState } from 'react';
import { Send, MapPin, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

const ContactSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate an API call
        setTimeout(() => {
            setStatus('success');
            // Reset form
            const form = e.target as HTMLFormElement;
            form.reset();
            // Reset status after a few seconds
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section ref={containerRef} className="container mx-auto px-4 max-w-6xl py-32 relative">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                {/* Left Side: Contact Info */}
                <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-100/80 border border-gray-800 text-cyan-400 text-sm font-semibold mb-6 w-max shadow-sm">
                        Get In Touch
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-[1.1]">
                        Let's build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">something great.</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
                        Whether you have a question, a project idea, or just want to connect about mobile & backend architecture, I'll get back to you as soon as possible.
                    </p>

                    <div className="flex flex-col gap-8 text-gray-300">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="p-4 bg-dark-200 rounded-2xl border border-gray-800 group-hover:border-primary-500/50 group-hover:bg-dark-100 transition-all text-primary-400 group-hover:scale-110">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Email</h4>
                                <a href="mailto:yazantarifi989@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">yazantarifi989@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="p-4 bg-dark-200 rounded-2xl border border-gray-800 group-hover:border-primary-500/50 group-hover:bg-dark-100 transition-all text-cyan-400 group-hover:scale-110">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Location</h4>
                                <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">Amman, Jordan</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form Component */}
                <div className="bg-dark-200/50 backdrop-blur-xl border border-gray-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group/form">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-cyan-500/5 opacity-0 group-hover/form:opacity-100 transition-opacity duration-700"></div>

                    <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Name"
                                    className="w-full bg-dark-300/80 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 transition-all"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="email@example.com"
                                    className="w-full bg-dark-300/80 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-semibold text-gray-400 ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                required
                                placeholder="Mobile Apps Development"
                                className="w-full bg-dark-300/80 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                placeholder="Write your Message Here."
                                className="w-full bg-dark-300/80 border border-gray-800 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/30 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/25 disabled:opacity-70 disabled:hover:translate-y-0 mt-2"
                        >
                            {status === 'idle' && (
                                <>
                                    Send Message <Send size={20} className="ml-2" />
                                </>
                            )}
                            {status === 'loading' && (
                                <>
                                    <Loader2 size={20} className="animate-spin" /> Sending...
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <CheckCircle2 size={20} /> Message Sent
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
