'use client'

import React, { useState } from 'react'

const Navbar = () => {
    // State to handle mobile menu toggle
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300">
                {/* Brand Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                        B
                    </div>
                    <span className="text-white font-bold text-xl tracking-tighter uppercase">
                        BELRO
                    </span>
                </div>

                {/* Navigation Links - Hidden on mobile, visible on MD+ */}
                <div className="hidden md:flex items-center gap-10 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
                    <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                        Studio
                    </a>
                    <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                        Projects
                    </a>
                    <a href="#" className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                        Catalog
                    </a>
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all">
                        Contact
                    </button>
                    
                    {/* Mobile Menu Toggle Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-blue-600 text-white p-2.5 rounded-full md:hidden z-[110]"
                    >
                        {isOpen ? (
                            /* Close Icon (X) */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            /* Hamburger Icon */
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-0 z-[90] bg-black/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                md:hidden
            `}>
                <a onClick={() => setIsOpen(false)} href="#" className="text-3xl font-bold uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-colors">
                    Studio
                </a>
                <a onClick={() => setIsOpen(false)} href="#" className="text-3xl font-bold uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-colors">
                    Projects
                </a>
                <a onClick={() => setIsOpen(false)} href="#" className="text-3xl font-bold uppercase tracking-[0.3em] text-white hover:text-blue-500 transition-colors">
                    Catalog
                </a>
                <button onClick={() => setIsOpen(false)} className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-400 border border-blue-400/30 px-10 py-4 rounded-full">
                    Contact Lab
                </button>
            </div>
        </>
    )
}

export default Navbar