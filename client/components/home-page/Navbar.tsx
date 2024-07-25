"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed left-0 top-0 z-50 w-full ${isScrolled ? 'translate-y-0' : 'translate-y-0'} animate-fade-in border-b border-gray-800 opacity-100 backdrop-blur-[12px] [--animation-delay:600ms] bg-black/[0.96] transition-all duration-300`}>
            <nav className="container flex h-[3.5rem] items-center justify-between">
                <Link href="/" className="text-md flex items-center text-white">
                    Brand
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/signin" className="text-sm text-white hover:text-gray-300">
                        Log in
                    </Link>
                    <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-9 px-4 py-2 text-sm">
                        Sign up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6"></line>
                        <line x1="3" x2="21" y1="12" y2="12"></line>
                        <line x1="3" x2="21" y1="18" y2="18"></line>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/[0.96] py-2">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                    <div className="px-4 py-2">
                        <Link href="/signin" className="block text-sm text-white hover:text-gray-300 mb-2">
                            Log in
                        </Link>
                        <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-9 px-4 py-2 text-sm w-full">
                            Sign up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link href={href} className="block px-4 py-2 text-sm text-white hover:text-gray-300">
        {children}
    </Link>
);

export default Navbar;