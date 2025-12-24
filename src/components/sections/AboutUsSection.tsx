import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, Lightbulb, HeartHandshake, Cpu, Youtube } from 'lucide-react';

const history = [
    { year: "2024", event: "AI 전문기업" },
    { year: "2022", event: "건설빅데이터 가공 특허 등록" },
    { year: "2021", event: "스마트건설사업 R&D" },
    { year: "2021", event: "연구개발서비스업 신고" },
    { year: "2020", event: "건설빅데이터 SW 등록" },
    { year: "2019", event: "벤처기업 인증" },
    { year: "2018", event: "빅데이터 구축 국가 R&D 수행" },
    { year: "2017", event: "건설빅데이터 기업부설연구소 설립" },
    { year: "2016", event: "(주)나인티나인 설립" },
];

const values = [
    {
        icon: <Rocket className="h-7 w-7 text-primary" />,
        title: "기술 혁신 (Innovation)",
        description: "세계 최초 6차원 빅데이터 엔진 'CUBE'로 기존 기술의 한계를 근본적으로 해결합니다.",
    },
    {
        icon: <Lightbulb className="h-7 w-7 text-primary" />,
        title: "고객 중심 (Customization)",
        description: "기업의 데이터를 맞춤형 지식 그래프로 재해석해 즉시 활용 가능한 자산으로 전환합니다.",
    },
    {
        icon: <HeartHandshake className="h-7 w-7 text-primary" />,
        title: "신뢰 기반 성장 (Trust)",
        description: "국가 R&D와 공공기관 사업에서 축적한 역량으로 안정적이고 검증된 AI 운영을 제공합니다.",
    },
    {
        icon: <Cpu className="h-7 w-7 text-primary" />,
        title: "첨단 AI (Cutting-edge)",
        description: "자연어 기반의 전문가형 챗GPT로 데이터 액세스를 민주화합니다.",
    }
];

export function AboutUsSection() {
    return (
        <section id="about" className="py-20 sm:py-28">
            <div className="container space-y-16">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        About NinetyNine
                    </div>
                    <h2 className="text-3xl font-semibold sm:text-4xl lg:text-[40px]">
                        건설 데이터를 <span className="text-primary">대화형 지능</span>으로 전환하는 팀
                    </h2>
                    <p className="mx-auto max-w-4xl text-lg text-muted-foreground">
                        (주)나인티나인은 건설사업관리 빅데이터 전문 기업에서 출발해, 산업 전반을 아우르는 AI 데이터 오케스트레이션 스튜디오로 확장했습니다.
                        흩어져 있던 문서와 데이터는 CUBE 온톨로지를 통해 실시간 의사결정 자산으로 진화합니다.
                    </p>
                    <div className="flex justify-center">
                        <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-6">
                            <Link href="https://youtu.be/xaNXbIhyqxY" target="_blank" rel="noopener noreferrer">
                                <Youtube className="mr-2 h-5 w-5" />
                                회사 소개 영상 보기
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="glass-panel space-y-8 bg-black/30 p-8">
                        <h3 className="text-lg font-semibold text-foreground">Corporate Timeline</h3>
                        <div className="relative pl-8">
                            <div className="absolute left-2.5 top-0 h-full w-px bg-gradient-to-b from-primary/60 to-transparent" />
                            {history.map((item, index) => (
                                <div key={item.year} className="relative pb-6">
                                    <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
                                    <p className="text-sm text-muted-foreground">{item.year}</p>
                                    <p className="text-lg font-semibold text-foreground">{item.event}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-6">
                        {values.map((item) => (
                            <Card key={item.title} className="gradient-border relative overflow-hidden border-0 bg-black/30">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </CardContent>
                            </Card>
                        ))}
                        <Card className="border-white/15 bg-white/5 text-sm text-muted-foreground">
                            <CardContent className="flex flex-wrap items-center gap-4 py-6">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.4em]">Trusted By</p>
                                    <p className="text-2xl font-semibold text-foreground">국토안전원 · 주요 CM사 · 공공기관</p>
                                </div>
                                <Button asChild className="ml-auto rounded-full px-6">
                                    <Link href="#contact">레퍼런스 요청</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
