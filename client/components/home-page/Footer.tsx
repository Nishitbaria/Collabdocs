import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { discord, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
                <div className="mb-12 flex-col flex gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="https://magicui.design/icon.png" alt="Magic UI Logo" width={32} height={32} className="h-8 w-8 text-primary" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Magic UI</span>
                    </Link>
                    <p className="max-w-xs">UI Library for Design Engineers</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Product</h2>
                        <ul className="gap-2 grid">
                            <li><Link href="/" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Email Collection</Link></li>
                            <li><Link href="/pricing" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Pricing</Link></li>
                            <li><Link href="/faq" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Community</h2>
                        <ul className="gap-2 grid">
                            <li><Link href="/" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Discord</Link></li>
                            <li><Link href="/" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Twitter</Link></li>
                            <li><a href="mailto:hello@chatcollect.com" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Email</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="gap-2 grid">
                            <li><Link href="/terms" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Terms</Link></li>
                            <li><Link href="/privacy" className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
                <div className="flex space-x-5 sm:justify-center sm:mt-0">
                    <a href="" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600">
                        <Discord className="h-4 w-4" />
                        <span className="sr-only">Discord</span>
                    </a>
                    <a href="" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Copyright © {new Date().getFullYear()} <Link href="/" className="cursor-pointer">Magic UI</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;