'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Cpu, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { href: '/', label: '홈' },
        { href: '/about', label: '회사소개' },
        { href: '/solutions', label: '솔루션' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: '문의' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full px-4 py-4">
            <div className="mx-auto max-w-7xl">
                <div className="glass-panel flex items-center justify-between px-6 py-4 relative overflow-hidden">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative z-10">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-white/10">
                                <Cpu className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-[0.2em] text-foreground">NINETYNINE</span>
                            <span className="text-[10px] tracking-wider text-muted-foreground">AI Intelligence</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 relative z-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                <span className="relative z-10">{link.label}</span>
                                <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors" />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-3/4 transition-all duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3 relative z-10">
                        <Button 
                            asChild 
                            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300"
                        >
                            <Link href="/contact">
                                <span className="relative z-10 font-semibold">시작하기</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-foreground" />
                        )}
                    </button>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 glass-panel p-6 space-y-4 animate-fade-in-up">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/10">
                            <Button 
                                asChild 
                                className="w-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white"
                            >
                                <Link href="/contact">시작하기</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
