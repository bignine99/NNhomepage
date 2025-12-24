import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { MatrixRain } from '@/components/effects/MatrixRain';

export const metadata: Metadata = {
    title: 'About | Ninetynine AI Construction Intelligence',
};

export default function AboutPage() {
    return (
        <div className="relative space-y-16 pb-20">
            <MatrixRain />
            <AboutUsSection />
            <StatsSection />
            <section className="container">
                <div className="glass-panel space-y-6 border-white/20 bg-black/30">
                    <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Next Chapter</p>
                        <h3 className="text-2xl font-semibold">솔루션 포트폴리오로 이동</h3>
                        <p className="text-sm text-muted-foreground">
                            각 산업별 AI Agent와 PoC 레퍼런스를 확인하려면 솔루션 허브로 이동하세요.
                        </p>
                    </div>
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-sm text-primary">
                        솔루션 살펴보기 <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}



