'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Github, Mail, MapPin, Phone, Cpu } from 'lucide-react';

const quickLinks = [
    { label: '회사소개', href: '/about' },
    { label: '솔루션', href: '/solutions' },
    { label: 'FAQ', href: '/faq' },
    { label: '문의', href: '/contact' },
];

const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-background to-black/50 backdrop-blur-xl">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-[100px]" />
            </div>

            <div className="container relative z-10 py-20">
                <div className="grid gap-12 lg:grid-cols-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl blur-lg opacity-50" />
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border border-white/10">
                                        <Cpu className="h-7 w-7 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold tracking-[0.2em] text-foreground">NINETYNINE</h3>
                                    <p className="text-xs tracking-wider text-muted-foreground">AI Intelligence Platform</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                                건설 산업의 미래를 <span className="text-primary font-semibold">인공지능</span>과 <span className="text-secondary font-semibold">빅데이터</span>로 혁신합니다. 
                                데이터를 지능으로 전환하는 최첨단 플랫폼을 제공합니다.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground/50 mb-4">Connect</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-all hover:bg-white/10 hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5 transition-colors group-hover:text-primary" />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">서비스</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <Link 
                                        href={item.href} 
                                        className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-primary transition-all mr-0 group-hover:mr-2" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">문의</h4>
                        <div className="space-y-4">
                            <div className="glass-card p-4 group hover:border-primary/30 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-1">Email</p>
                                        <a 
                                            href="mailto:bignine99@gmail.com" 
                                            className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                                        >
                                            bignine99@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-4 group hover:border-secondary/30 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-1">Tel</p>
                                        <p className="text-sm text-foreground font-medium">02-949-9910</p>
                                        <p className="text-xs text-muted-foreground">Mobile: 010-4160-1876</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card p-4 group hover:border-accent/30 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground/70 uppercase tracking-wider mb-1">Office</p>
                                        <p className="text-sm text-foreground leading-relaxed">
                                            서울특별시 노원구 월계로 370<br />
                                            희성프라자 312 (우: 01905)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-muted-foreground/60">
                            &copy; {currentYear} <span className="text-primary font-semibold">NINETYNINE Inc.</span> All Rights Reserved.
                        </p>
                        <div className="flex gap-6 text-xs text-muted-foreground/60">
                            <Link href="#" className="hover:text-foreground transition-colors">개인정보처리방침</Link>
                            <span className="text-white/10">|</span>
                            <Link href="#" className="hover:text-foreground transition-colors">이용약관</Link>
                            <span className="text-white/10">|</span>
                            <Link href="#" className="hover:text-foreground transition-colors">사업자정보</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
