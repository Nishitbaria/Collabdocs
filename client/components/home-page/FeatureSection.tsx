import { cn } from "@/lib/utils";
import {
    IconEdit,
    IconShare,
    IconClockHour4,
    IconUsers,
    IconDeviceLaptop,
    IconLock,
} from "@tabler/icons-react";
import Header from "../shared/Header";


export function FeatureSection() {
    const features = [
        {
            title: "Real-time Editing",
            description:
                "Edit documents with live updates, seeing changes as they happen.",
            icon: <IconEdit />,
        },
        {
            title: "Easy Sharing",
            description:
                "Share documents and notes with team members and friends effortlessly.",
            icon: <IconShare />,
        },
        {
            title: "Instant Updates",
            description:
                "Experience seamless collaboration with instant synchronization across devices.",
            icon: <IconClockHour4 />,
        },
        {
            title: "Team Collaboration",
            description:
                "Work together in real-time, boosting productivity and creativity.",
            icon: <IconUsers />,
        },
        {
            title: "Cross-Platform",
            description: "Access your documents from any device, anywhere, anytime.",
            icon: <IconDeviceLaptop />,
        },
        {
            title: "Secure Storage",
            description:
                "Keep your documents safe with our robust security measures.",
            icon: <IconLock />,
        },
    ];

    return (
        <section className="bg-black/[0.96] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Header
                    title="Feature Section"
                    description="Discover the powerful features that make our platform stand out. From real-time collaboration to secure storage, we've got everything you need to streamline your workflow."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string,
    description: string,
    icon: React.ReactNode,
    index: number,
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-gray-800",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-white">{icon}</div>
            <div className="text-lg font-medium mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                    {title}
                </span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};

export default FeatureSection;
