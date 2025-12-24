import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Database, Brain } from "lucide-react";
import Link from "next/link";
import { MatrixRain } from "@/components/effects/MatrixRain";

export function ModernHero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20">
            {/* Matrix Rain Effect */}
            <MatrixRain />
            
            {/* Advanced Background Effects */}
            <div className="absolute inset-0 -z-10">
                {/* Animated Gradient Orbs */}
                <div className="absolute left-[20%] top-[20%] h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
                <div className="absolute right-[15%] top-[30%] h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[140px] animate-float" 
                     style={{ animationDelay: '2s' }} />
                <div className="absolute left-[40%] bottom-[20%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" 
                     style={{ animationDelay: '4s' }} />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                     style={{
                         backgroundImage: `
                           linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                         `,
                         backgroundSize: '50px 50px',
                     }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12 animate-fade-in-up">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground backdrop-blur-xl holographic">
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                        Next Generation AI Platform
                    </span>
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>

                {/* Main Headline */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="block text-white">Intelligence</span>
                        <span className="block mt-2 text-gradient-cyber neon-glow">
                            Transforms Data
                        </span>
                    </h1>
                    
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                        건설 산업을 위한 <span className="text-primary font-semibold">AI 기반 빅데이터 분석</span> 플랫폼.
                        <br className="hidden sm:block" />
                        CUBE 엔진과 RAG 기술로 데이터를 지능으로 전환합니다.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button 
                        size="lg" 
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 px-8 py-6 text-base font-semibold"
                        asChild
                    >
                        <Link href="/solutions">
                            <span className="relative z-10">솔루션 탐색하기</span>
                            <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 px-8 py-6 text-base"
                        asChild
                    >
                        <Link href="/contact">
                            도입 문의
                        </Link>
                    </Button>
                </div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
                    {[
                        { icon: Database, label: "CUBE Engine", value: "빅데이터 처리", color: "text-primary" },
                        { icon: Brain, label: "AI Analysis", value: "실시간 분석", color: "text-secondary" },
                        { icon: Zap, label: "Fast Deploy", value: "즉시 배포", color: "text-accent" },
                    ].map((item, index) => (
                        <div 
                            key={index}
                            className="glass-card p-6 hover-lift"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <item.icon className={`h-8 w-8 ${item.color} mx-auto mb-3`} />
                            <h3 className="font-semibold text-white text-lg mb-1">{item.label}</h3>
                            <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
                </div>
            </div>
        </section>
    );
}
