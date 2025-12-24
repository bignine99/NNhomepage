import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';

export function Header() {
    const navLinks = [
        { href: '/', label: '홈' },
        { href: '/about', label: '회사소개' },
        { href: '/solutions', label: '솔루션' },
        { href: '/faq', label: '자주 묻는 질문' },
        { href: '/contact', label: '문의' },
    ];

    return (
        <header className="fixed top-6 z-50 w-full px-4">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-xl shadow-2xl transition-all hover:bg-black/30 hover:border-white/20">
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                            <Cpu className="h-5 w-5" />
                        </span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-widest text-foreground">NINETYNINE</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button asChild variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
                            <Link href="/login">Log in</Link>
                        </Button>
                        <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
