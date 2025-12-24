'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const insightHighlights = [
    { label: '데이터 파이프라인 구축', value: '1000배' },
    { label: '실시간 KPI 모니터링', value: '24/7' },
    { label: '실증 프로젝트', value: '43건' },
    { label: 'AI 추천 보고서', value: '95%+' },
];

export function Hero() {
    return (
        <section className="relative overflow-hidden py-28">
            <div className="absolute inset-0 opacity-70">
                <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-[160px]" />
                <div className="absolute right-10 top-0 h-72 w-72 rounded-full bg-accent/25 blur-[180px]" />
            </div>
            <div className="container relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground backdrop-blur">
                        Progressive Intelligence
                    </span>
                    <div className="space-y-6">
                        <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[58px]">
                            데이터 자산을 <span className="text-primary">AI 대화형 파트너</span>로 진화시키는
                            건설 빅데이터 오케스트라.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            (주)나인티나인은 건설 전 생애주기의 모든 정보를 정밀하게 수집·정제하여 CUBE 온톨로지와
                            RAG 파이프라인으로 재구성합니다. 누구나 자연어로 묻고, 데이터 기반의 인사이트를 즉시 받을 수 있는
                            전문가형 AI 운영 환경을 제안합니다.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="h-12 rounded-full px-8 text-base" asChild>
                            <Link href="#solutions">솔루션 포트폴리오</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-base text-foreground"
                            asChild
                        >
                            <Link href="#contact">상담 예약</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        {insightHighlights.map((item) => (
                            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                <p className="text-2xl font-semibold text-primary">{item.value}</p>
                                <p className="text-xs text-muted-foreground">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="glass-panel h-full bg-gradient-to-br from-white/10 to-white/0">
                        <div className="absolute -right-6 top-6 hidden rounded-full border border-white/20 px-4 py-1 text-xs text-muted-foreground backdrop-blur lg:flex">
                            Real-time Intelligence
                        </div>
                        <div className="relative space-y-8">
                            <div className="rounded-3xl border border-white/15 bg-black/30 p-6 shadow-2xl">
                                <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Digital Fabric</p>
                                <h3 className="mt-3 text-2xl font-semibold">CUBE × RAG 오케스트레이션</h3>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    내역서ㆍ공정표ㆍ도면 간 의미 기반 연결을 통해 5D BIM 이상의 디지털 트윈을 구성하고,
                                    AI가 실시간으로 KPI와 리스크를 재연산합니다.
                                </p>
                            </div>
                            <div className="grid gap-4 rounded-3xl border border-white/15 bg-black/20 p-6 sm:grid-cols-2">
                                {['On-chain Traceability', 'Generative Insight', 'Autonomous Monitoring', 'Prime Governance'].map((feature) => (
                                    <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
                                        <p className="font-medium text-foreground">{feature}</p>
                                        <p className="mt-2 text-xs">
                                            고급형 거버넌스 시나리오와 연동되는 AI 기반 운영 스택.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-10 hidden rounded-full border border-white/20 px-4 py-1 text-xs text-muted-foreground backdrop-blur lg:flex">
                            Predictive Pulse 0.98
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
