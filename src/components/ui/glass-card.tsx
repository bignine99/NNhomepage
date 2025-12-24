import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    glowColor?: 'primary' | 'secondary' | 'accent';
}

export function GlassCard({
    children,
    className,
    hoverEffect = true,
    glowColor = 'primary',
    ...props
}: GlassCardProps) {
    const glowColors = {
        primary: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]',
        secondary: 'hover:shadow-[0_0_40px_rgba(14,165,233,0.3)]',
        accent: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    };

    return (
        <div
            className={cn(
                "glass-card p-8 relative group",
                hoverEffect && [
                    "hover:-translate-y-2",
                    "hover:scale-[1.02]",
                    glowColors[glowColor],
                ],
                className
            )}
            {...props}
        >
            {/* Holographic overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            {/* Border glow on hover */}
            <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                glowColor === 'primary' && "bg-gradient-to-br from-primary/10 via-transparent to-primary/5",
                glowColor === 'secondary' && "bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5",
                glowColor === 'accent' && "bg-gradient-to-br from-accent/10 via-transparent to-accent/5",
            )} />
            
            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
