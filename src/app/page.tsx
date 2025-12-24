import { ModernHero } from '@/components/sections/ModernHero';
import { GlassCard } from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, Building2, BrainCircuit, MessageSquareText, HelpCircle, BookOpen } from 'lucide-react';

export default function Home() {
    const navigationPreviews = [
        {
            title: '회사소개',
            description: 'CUBE 온톨로지와 RAG 오케스트레이션을 운영하는 팀을 소개합니다.',
            href: '/about',
            icon: Building2,
            colSpan: '',
        },
        {
            title: '솔루션',
            description: '전문가형 AI Agent 포트폴리오와 PoC 사례를 확인하세요.',
            href: '/solutions',
            icon: BrainCircuit,
            colSpan: '',
        },
        {
            title: '지식 E-book',
            description: '건설 데이터와 AI 기술의 미래를 담은 종합 가이드북을 만나보세요.',
            href: 'https://ninetynine-knowldege-boo-k.vercel.app/',
            icon: BookOpen,
            colSpan: '',
            external: true,
        },
        {
            title: 'FAQ',
            description: '도입부터 운영까지 자주 묻는 질문을 정리했습니다.',
            href: '/faq',
            icon: HelpCircle,
            colSpan: '',
        },
        {
            title: '문의하기',
            description: '맞춤 PoC와 컨설팅 일정을 요청하세요.',
            href: '/contact',
            icon: MessageSquareText,
            colSpan: 'md:col-span-2',
        },
    ];

    return (
        <div className="space-y-24 pb-20">
            <ModernHero />

            <section className="container relative z-10 py-24">
                <div className="mx-auto max-w-7xl space-y-16">
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
                            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="font-medium">Explore Our Services</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Discover Our <span className="text-gradient-cyber">Intelligence</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            AI 기반 건설 빅데이터 플랫폼의 모든 것을 탐색하세요
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {navigationPreviews.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn("group", item.colSpan)}
                                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            >
                                <GlassCard 
                                    className="h-full flex flex-col justify-between relative overflow-hidden"
                                    glowColor={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}
                                >
                                    {/* Background Icon */}
                                    <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                        <item.icon className="h-32 w-32" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div className={cn(
                                            "inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300",
                                            "bg-gradient-to-br from-white/10 to-white/5",
                                            "group-hover:scale-110 group-hover:shadow-lg",
                                            index % 3 === 0 && "group-hover:shadow-primary/50",
                                            index % 3 === 1 && "group-hover:shadow-secondary/50",
                                            index % 3 === 2 && "group-hover:shadow-accent/50",
                                        )}>
                                            <item.icon className={cn(
                                                "h-7 w-7",
                                                index % 3 === 0 && "text-primary",
                                                index % 3 === 1 && "text-secondary",
                                                index % 3 === 2 && "text-accent",
                                            )} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6 flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                                        <span>자세히 보기</span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                                    </div>
                                </GlassCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
