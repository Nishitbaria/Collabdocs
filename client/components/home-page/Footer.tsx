import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-gray-300 w-full">
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
                        © {new Date().getFullYear()} Collabdocs. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
