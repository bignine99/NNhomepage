'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-lg">
            <div className="container py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold tracking-widest text-foreground">NINETYNINE</h3>
                            <p className="text-sm text-muted-foreground max-w-md">
                                Pioneering the future of construction with Artificial Intelligence and Big Data.
                                We build the intelligence that builds the world.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                                >
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="flex items-center hover:text-primary transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <span className="block text-xs text-muted-foreground/50 uppercase tracking-wider mb-1">Email</span>
                                <a href="mailto:bignine99@gmail.com" className="hover:text-primary transition-colors">bignine99@gmail.com</a>
                            </li>
                            <li>
                                <span className="block text-xs text-muted-foreground/50 uppercase tracking-wider mb-1">Office</span>
                                <span>Seoul, Korea</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
                    <p>&copy; {currentYear} NINETYNINE Inc. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
