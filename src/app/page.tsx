import { ModernHero } from '@/components/sections/ModernHero';
import { GlassCard } from '@/components/ui/glass-card';
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

            <section className="container relative z-10">
                <div className="mx-auto max-w-5xl space-y-12">
                    <div className="text-center space-y-4">
                        <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Explore</p>
                        <h2 className="text-3xl font-bold text-foreground font-headline">Discover Our Intelligence</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-4">
                        {navigationPreviews.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={item.colSpan}
                                {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            >
                                <GlassCard className="h-full flex flex-col justify-between group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 transition-transform group-hover:scale-110 group-hover:opacity-20">
                                        <item.icon className="h-24 w-24" />
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center text-sm text-primary font-medium">
                                        <span>자세히 보기</span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
