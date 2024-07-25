import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-300 w-full">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/assets/icons/doc.svg" alt="LiveDocs Logo" width={32} height={32} className="h-8 w-8" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">LiveBlocks</span>
                        </Link>
                        <p className="text-gray-400 max-w-xs">Your go-to collaborative editor for documents and notes sharing with your team members and friends in real-time with live updates.</p>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-medium text-white uppercase tracking-wider">Features</h2>
                        <ul className="space-y-2">
                            <li><Link href="/features" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Real-time Collaboration</Link></li>
                            <li><Link href="/features" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Document Sharing</Link></li>
                            <li><Link href="/features" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Live Updates</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-medium text-white uppercase tracking-wider">Company</h2>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">About Us</Link></li>
                            <li><Link href="/careers" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Careers</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex space-x-6 mb-4 sm:mb-0">
                        <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                            <FaDiscord className="h-5 w-5" />
                            <span className="sr-only">Discord</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                            <FaTwitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
                            <FaGithub className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>
                    <span className="text-sm text-gray-400">
                        © {new Date().getFullYear()} LiveDocs. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
