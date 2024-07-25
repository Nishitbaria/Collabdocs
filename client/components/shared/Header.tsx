// components/Header.tsx
import React from 'react';

interface HeaderProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, description }) => {
    return (
        <div className="mx-auto max-w-5xl text-center mb-5">
            {subtitle && (
                <h4 className="text-xl font-bold tracking-tight text-white">
                    {subtitle}
                </h4>
            )}
            {title && (
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    {title}
                </h2>
            )}
            {description && (
                <p className="mt-6 text-xl leading-8 ttext-white">
                    {description}
                </p>
            )}
        </div>
    );
};

export default Header;