'use client';

import { Database, FolderKanban, Smile, TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
    {
        icon: <Database className="h-8 w-8 text-primary" />,
        value: '1.25PB',
        label: '정규화된 데이터 레이크',
        detail: 'CUBEㆍRAG 동기화',
    },
    {
        icon: <FolderKanban className="h-8 w-8 text-primary" />,
        value: '43 Projects',
        label: '실증ㆍPoC 구축',
        detail: '국토안전원·민간CM',
    },
    {
        icon: <Smile className="h-8 w-8 text-primary" />,
        value: '99%',
        label: '파트너 만족도',
        detail: 'Operating Excellence',
    },
    {
        icon: <TrendingDown className="h-8 w-8 text-primary" />,
        value: '-50%',
        label: '데이터 비용 절감',
        detail: '자동화 파이프라인 기준',
    },
];

export function StatsSection() {
    return (
        <section id="stats" className="py-20 sm:py-28">
            <div className="container">
                <div className="glass-panel grid gap-8 bg-black/30 p-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="space-y-3">
                            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-3">
                                {stat.icon}
                            </div>
                            <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                            <p className="text-sm text-muted-foreground">{stat.detail}</p>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
