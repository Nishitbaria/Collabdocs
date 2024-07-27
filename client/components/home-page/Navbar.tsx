"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
        <header className={`fixed left-0 top-0 z-50 w-full ${isScrolled ? 'translate-y-0' : 'translate-y-0'} animate-fade-in border-b border-gray-800 opacity-100 backdrop-blur-md [--animation-delay:600ms]  transition-all duration-300`}>
            <nav className="container flex h-[3.5rem] items-center justify-between">
                <Link href="/" className="text-md flex items-center text-white">
                    Live Blocks
                </Link>

                {/* Desktop Navigation */}


                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">

                    <SignedOut>
                        <Link href="/sign-in" className="text-sm text-white hover:text-gray-300">
                            Log in
                        </Link>
                        <Link href="/sign-up" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md text-white bg-[#262626] hover:bg-[#262626]/80 hover:bg-gray-200 h-9 px-4 py-2 text-sm">
                            Sign up
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
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

                    <div className="px-4 py-2">

                        <SignedOut>
                            <div className='flex flex-col space-y-3'>
                                <Link href="/sign-in" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md text-white bg-[#262626] hover:bg-[#262626]/80 hover:bg-gray-200 h-9 px-4 py-2 text-sm">
                                    Login
                                </Link>
                                <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md text-white bg-[#262626] hover:bg-[#262626]/80 hover:bg-gray-200 h-9 px-4 py-2 text-sm">
                                    Sign up
                                </Link>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <UserButton

                                showName={true}
                            />
                        </SignedIn>

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