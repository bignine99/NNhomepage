import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function ModernHero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[120px]" />
            </div>

            <div className="animate-fade-in-up space-y-8">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground backdrop-blur-md">
                    <Sparkles className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-gradient-gold font-medium">Next Gen Construction Intelligence</span>
                </div>

                <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl font-headline">
                    <span className="block text-foreground">Data Driven</span>
                    <span className="text-gradient-blue block mt-2">Future Construction</span>
                </h1>

                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    NINETYNINE은 건설 빅데이터와 AI 기술을 결합하여<br className="hidden sm:block" />
                    가장 진보된 건설 인텔리전스 솔루션을 제공합니다.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        <Link href="/solutions">솔루션 탐색하기</Link>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                        <Link href="/contact">문의하기</Link>
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-muted-foreground">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </div>
        </section>
    );
}
