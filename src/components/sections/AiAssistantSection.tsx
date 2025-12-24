'use client';

import { AiAssistantForm } from './AiAssistantForm';

const featureBullets = [
    '실시간 공사비/공정 KPI 재산출',
    'RAG 기반 근거 문서 하이라이트',
    '시나리오별 CAPEX 감도분석',
    'Voice of Field 자동 요약',
];

export function AiAssistantSection() {
    return (
        <section id="ai-assistant" className="py-20 sm:py-28">
            <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="glass-panel space-y-6 bg-black/30 p-8">
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Predictive Copilot</p>
                        <h2 className="text-3xl font-semibold sm:text-4xl">공사비 예측 & 분석 AI Agent</h2>
                        <p className="text-muted-foreground">
                            자연어로 질문하면 공사비, 공정, 리스크 인사이트를 즉시 시각화 데이터로 제공합니다.
                            내부 빅데이터와 연결된 알고리즘으로 복잡한 시나리오도 전문가 수준의 해석으로 응답합니다.
                        </p>
                    </div>
                    <AiAssistantForm />
                </div>
                <div className="glass-panel flex flex-col justify-between space-y-8 border-white/20 bg-black/30 p-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Capability
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Insight Graph</p>
                            <p className="mt-3 text-2xl font-semibold text-foreground">Autonomous Generative Analyst</p>
                            <p className="mt-4 text-sm text-muted-foreground">
                                공사비 데이터셋에서 근거를 추적하고, 그래프/테이블 형태로 결과를 요약합니다.
                                Reply-to-Doc 기능으로 질문과 결과가 자동 기록됩니다.
                            </p>
                        </div>
                        <ul className="grid gap-3 text-sm text-muted-foreground">
                            {featureBullets.map((item) => (
                                <li key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                        Confidence Score 0.98 · Explainable Context Attached
                    </div>
                </div>
            </div>
        </section>
    );
}
