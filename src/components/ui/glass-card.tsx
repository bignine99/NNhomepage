import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
