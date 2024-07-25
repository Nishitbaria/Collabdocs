"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Globe, BarChart, File, Rss, ChevronRight, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface IconInfo {
    Icon: LucideIcon;
    color: string;
    glow: string;
}

const icons: IconInfo[] = [
    { Icon: Heart, color: 'rgb(239, 68, 68)', glow: '#ff4444' },   // Red
    { Icon: Shield, color: 'rgb(34, 197, 94)', glow: '#22ff22' },  // Green
    { Icon: Globe, color: 'rgb(59, 130, 246)', glow: '#4444ff' },  // Blue
    { Icon: BarChart, color: 'rgb(249, 115, 22)', glow: '#ff8800' }, // Orange
    { Icon: File, color: 'rgb(236, 72, 153)', glow: '#ff44ff' },   // Pink
    { Icon: Rss, color: 'rgb(234, 179, 8)', glow: '#ffff00' }      // Yellow
];

interface IconRowProps {
    speed: 'fast' | 'normal' | 'slow';
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    glowIntensity?: number;
}

const IconRow: React.FC<IconRowProps> = ({
    speed = 'normal',
    direction = 'left',
    pauseOnHover = true,
    glowIntensity = 20
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                '--animation-direction',
                direction === 'left' ? 'forwards' : 'reverse'
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            let duration;
            switch (speed) {
                case 'fast': duration = '20s'; break;
                case 'normal': duration = '40s'; break;
                case 'slow': duration = '60s'; break;
                default: duration = '40s';
            }
            containerRef.current.style.setProperty('--animation-duration', duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
            <div
                ref={scrollerRef}
                className={`flex gap-4 py-4 w-max ${start ? 'animate-scroll' : ''
                    } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
            >
                {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex">
                        {icons.map(({ Icon, color, glow }, index) => (
                            <div
                                key={`${setIndex}-${index}`}
                                className="relative size-16 m-2 overflow-hidden rounded-2xl border border-white/20 bg-black/50 p-3"
                                style={{
                                    '--icon-color': color,
                                    '--icon-glow': glow,
                                    '--glow-intensity': `${glowIntensity}%`
                                } as React.CSSProperties}
                            >
                                <Icon className="size-full text-white neon-glow" />
                                <div
                                    className="absolute inset-0 mix-blend-overlay"
                                    style={{
                                        backgroundColor: `var(--icon-color)`,
                                        opacity: `calc(var(--glow-intensity) / 100)`
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const CTASection: React.FC = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center font-sans">
            {/* Scrolling background */}
            <div className="absolute inset-0 flex flex-col justify-center overflow-hidden">

                <IconRow speed="fast" direction="right" glowIntensity={1} />
                <IconRow speed="normal" direction="right" glowIntensity={1} />
                <div className='flex opacity-45'>
                    <IconRow speed="slow" direction="right" glowIntensity={1} />
                </div>
            </div>

            {/* Centered CTA content */}
            <div className="relative z-50 flex flex-col items-center justify-center text-center px-4 max-w-4xl mt-36">
                <div className="mx-auto size-24 rounded-[2rem] border border-dark-500  p-3 shadow-2xl backdrop-blur-md bg-black/10 lg:size-32">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-handshake mx-auto size-16 text-white lg:size-24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-30 mix-blend-overlay rounded-[2rem]"></div> */}
                </div>
                <div className="mt-8 space-y-4">
                    <h1 className="text-4xl font-bold text-white">COLLABORATE IN REAL-TIME </h1>
                    <p className="text-lg text-white"> Share documents and notes with your team members
                        <br />
                        and friends. Experience live updates as you work together.</p>
                    <Link
                        href="/dashboard"
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input border-dark-400 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6"
                    >
                        Start Collaborating
                        <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTASection;