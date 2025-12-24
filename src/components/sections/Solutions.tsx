'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    GaugeCircle,
    GanttChartSquare,
    Users,
    ArrowRight,
    Cpu,
    Calculator,
    ShieldCheck,
    TriangleAlert,
    CalendarClock,
    ClipboardCheck,
    Search,
    HeartPulse,
    Accessibility,
    ScanSearch,
    FilePieChart,
    FileText,
    Wand2,
    FileCode
} from 'lucide-react';

const solutions = [
    {
        icon: <Wand2 className="h-6 w-6 text-primary" />,
        title: "전문가용 프롬프트 작성 도우미",
        subtitle: "Prompt Developer",
        description: "복잡한 AI 프롬프트 작성, 이제 전문 지식 없이도 가능합니다. 간단한 정보만 입력하면 30년 경험의 전문가가 최적화된 프롬프트를 완성해 드립니다. 누구나 쉽게, 전문가처럼 – 당신의 AI 활용을 한 단계 업그레이드하세요.",
        link: "https://ai-429023517087.us-west1.run.app/",
        image: "https://i.postimg.cc/8k7P95MX/image.png",
        hint: "prompt engineering"
    },
    {
        icon: <FileCode className="h-6 w-6 text-primary" />,
        title: "AI기반 프로그램 개발 도우미",
        subtitle: "Pro.md & To-Do.md Developer",
        description: "아이디어만 있으면 완성된 개발 계획서까지! 막연한 프로그램 아이디어를 구체적인 개발 로드맵으로 변환해 드립니다. 사용자 요구사항을 정확히 파악하여, 전문적인 기획서(PRD)와 실행 가능한 할일 목록(To-Do)까지 완성합니다. 개발의 첫 걸음을 확실하게 시작하세요.",
        link: "https://ai-agent-602058238272.us-west1.run.app/",
        image: "https://i.postimg.cc/PfQ8fNPX/image.png",
        hint: "program development"
    },
    {
        icon: <Cpu className="h-6 w-6 text-primary" />,
        title: "건설사업 빅 데이터 분석 시스템",
        subtitle: "CUBE: Construction Unique Bigdata Engine",
        description: "원가, 공정, 노무, 자재, 물량, 기성, 생산성 관리를 한번에, 세계 최초 6차원(5W1H) 구조의 빅데이터 엔진으로, 현존 기술 대비 1,000배 빠른 데이터 구축과 100배 향상된 분석 능력을 제공합니다.",
        link: "#",
        image: "https://i.postimg.cc/SxHzhpSY/image.png",
        hint: "data analytics"
    },
    {
        icon: <Calculator className="h-6 w-6 text-primary" />,
        title: "AI 기반 공사비 예측 시스템",
        subtitle: "Project Budget Master",
        description: "프로젝트 용도별로 수백건의 기존 공사비를 가공하여 빅데이터로 만들어서 AI에게 학습시킵니다. 최적의 머신러닝 기법을 선별하여 새로운 사업의 공사비를 95% 이상의 신뢰수준으로 예측합니다.",
        link: "https://service-498772127520.us-west1.run.app/",
        image: "https://i.postimg.cc/FKV20Nn2/image.png",
        hint: "construction budget"
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "스마트폰 기반 건설현장 안전 AI",
        subtitle: "건설현장 안전지킴이",
        description: "수만 건의 실제 사고 데이터를 학습한 AI가 현장의 잠재적 리스크를 다각도로 분석 및 예측하여, 더 안전한 작업 환경을 만드는데 기여합니다.",
        link: "https://youtu.be/gQ2bZJ318-Q",
        image: "https://i.postimg.cc/CLyCjkTf/image.png",
        hint: "construction safety"
    },
    {
        icon: <TriangleAlert className="h-6 w-6 text-primary" />,
        title: "건설현장 위험물 예측 분석 통계 시스템",
        subtitle: "위험 확률 계산기 (Risk Probability Calculator)",
        description: "국토안전원 수만건의 데이터에 기반한 건설현장 안전관리 시스템으로 현장 맞춤형 위험정보 확인하고 AI와 상담해 보세요.",
        link: "https://studio--construction-safety-insights.us-central1.hosted.app/",
        image: "https://i.postimg.cc/3NzKz3ht/image.png",
        hint: "risk analysis"
    },
    {
        icon: <CalendarClock className="h-6 w-6 text-primary" />,
        title: "건축공사 표준공기 산정 대시보드",
        subtitle: "과학적 공사기간 예측",
        description: "국토안전원 수만건의 데이터에 기반한 건설현장 안전관리 시스템으로 현장 맞춤형 위험정보 확인하고 AI와 상담해 보세요.",
        link: "https://script.google.com/macros/s/AKfycby0k-zL8sENnOgYbeHMuqw22DcZcC4b1eAFQ7H6vWzDe-74sMG6HOXAF7lHv771O_flDg/exec",
        image: "https://i.postimg.cc/3NqcBRhx/image.png",
        hint: "schedule planning"
    },
    {
        icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
        title: "프로젝트 리더 평가 시스템",
        subtitle: "Project Leader's Score Card",
        description: "다양한 평가기준에 따라 정량적으로 건설사업관리자를 평가할 수 있는 시스템으로 최고의 건설사업관리자 운영에 도움이 됩니다.",
        link: "https://script.google.com/macros/s/AKfycbwyZ-ZXDAlLi7MyCHC0pzU5aVIDJMLldnQHhMZqB9a6zFQc1H1sql6E3WQ4CEEWniHr/exec",
        image: "https://i.postimg.cc/02DNwJPj/image.png",
        hint: "leader evaluation"
    },
    {
        icon: <Search className="h-6 w-6 text-primary" />,
        title: "설계정보 검색 시스템",
        subtitle: "건축 설계 Reference Finder",
        description: "건축 설계 Reference Finder 모델은 방대하게 축적되어 온 건축설계 데이터를 효과적으로 탐색 후, 유사 과거 사업을 빠르게 추천해 주는 시스템이다.",
        link: "https://studio--archecho01.us-central1.hosted.app/",
        image: "https://i.postimg.cc/PJGjX2L4/image.png",
        hint: "architectural design"
    },
    {
        icon: <HeartPulse className="h-6 w-6 text-primary" />,
        title: "시설물 안전점검 AI 시스템",
        subtitle: "AI 안전 주치의 (AI Safety Doctor)",
        description: "시설물 안전 진단 어렵지 않습니다. 사진만 올리면 안전 지표 상세, 위험 요소 평가, 권장 조치 및 관계 법령 등을 제공해 드립니다.",
        link: "https://studio--ai-safety-eval-ohial.us-central1.hosted.app/",
        image: "https://i.postimg.cc/fbjXjrs3/image.png",
        hint: "building inspection"
    },
    {
        icon: <Accessibility className="h-6 w-6 text-primary" />,
        title: "AI기반 건축물 BF 인증 사전 검토 시뮬레이터",
        subtitle: "AI-based Preliminary Review Simulator",
        description: "복잡한 BF 인증 기준을 AI 기술을 통해 자동 검토하는 프로토타입입니다. 설계 및 시공 단계에서 발생할 수 있는 문제점을 사전에 예측하고 수정 기회를 제공함으로써, 시간과 비용을 절감하고 더 나은 건축 환경을 만드는 것을 목표로 합니다.",
        link: "https://script.google.com/macros/s/AKfycbxL08w9KbCxx_Fg4kijC74gRsMApw49V_dxpAFJNldfm4tHmDdsC49ttTB4ECoSJYmHZQ/exec",
        image: "https://i.postimg.cc/d3LqLZLZ/image.png",
        hint: "barrier-free certification"
    },
    {
        icon: <ScanSearch className="h-6 w-6 text-primary" />,
        title: "AI기반 한국형 홈인스펙션 시스템",
        subtitle: "AI-based Home Inspector",
        description: "공인된 자격을 갖춘 전문가가 주택의 구조적 안전성, 주요 설비 상태, 마감 하자 여부 등을 객관적으로 진단·평가하고, 그 결과를 '주택 상태 보고서' 형태로 제공하는 제도로 본 시스템은 AI도움을 받아 인스펙션 업무를 객관적이고 효율적으로 진행하는데 도움을 줍니다.",
        link: "https://script.google.com/macros/s/AKfycbzraHEhkV0Cqh5LM-GUbS0dlkBhg4720Dinpryl9r6_uza76g-bEh2x6YMOGZLqR7d4Dg/exec",
        image: "https://i.postimg.cc/8zNhspt1/image.png",
        hint: "home inspection"
    },
    {
        icon: <FilePieChart className="h-6 w-6 text-primary" />,
        title: "AI 기반 PDF 대시보드 생성기",
        subtitle: "AI-powered PDF Dashboard Generator",
        description: "PDF 파일을 업로드하면, AI가 그 내용을 분석하여 대시보드로 만들어 드립니다. 방대한 텍스트와 수치 속에서 핵심 데이터를 자동으로 추출하고, 이해하기 쉬운 차트와 요약으로 구성된 맞춤형 대시보드를 생성합니다.",
        link: "https://script.google.com/macros/s/AKfycbz_2B20JOOKEMi00rMKvR5ApBYNkqq8x27qf7qKdVKPl10lQ4ztZw0evy6gT0feUzR8nA/exec",
        image: "https://i.postimg.cc/tgL59cVd/image.png",
        hint: "pdf dashboard"
    },
    {
        icon: <FileText className="h-6 w-6 text-primary" />,
        title: "AI를 활용한 논문 분석",
        subtitle: "Paper Analysis using AI Agent",
        description: "Danny의 논문 분석 AI는 건설 분야 PDF 논문을 업로드하면 핵심 내용을 자동으로 요약·분석하여 제공합니다. 첨단 AI가 연구 목적, 방법론, 결과와 함께 적용 가능성, 한계점까지 종합적으로 정리해 드립니다. 복잡한 기술 문서도 직관적인 인사이트로 변환하여, 연구자와 실무자가 바로 활용할 수 있는 지식을 빠르고 정확하게 제공합니다.",
        link: "https://ai-paper-analysis-dashboard-433690731124.us-west1.run.app/",
        image: "https://i.postimg.cc/8cMK0PD1/image.png",
        hint: "paper analysis"
    }
];

const targetCustomers = [
    {
        icon: <GaugeCircle className="h-8 w-8 text-primary" />,
        title: "건설사",
        description: "데이터 기반의 과학적 사업관리를 통해 경쟁력 강화",
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "시행사",
        description: "과거 데이터 자산화를 통한 미래 사업 예측 정확도 향상",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "PM/CM 기업 및 공공기관",
        description: "리스크 예측 및 관리, 데이터 활용 부가가치 창출",
    },
];


export function Solutions() {
    return (
        <section id="solutions" className="py-20 sm:py-28">
            <div className="container space-y-14">
                <div className="space-y-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                        AI Suite
                    </div>
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        빅데이터 기반 건설 전문가 <span className="text-primary">AI Agent</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        독자적인 6차원 온톨로지 CUBE를 통해 비정형 건설 데이터를 AI 학습이 가능한 지식 그래프로 재구성합니다.
                        자연어로 질의하고 전문가 인사이트를 즉시 수신하는 대화형 운영 환경을 제공합니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {solutions.map((solution, index) => (
                        <Card key={index} className="group flex flex-col overflow-hidden border-white/15 bg-black/30">
                            <div className="relative w-full overflow-hidden rounded-t-3xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <img src={solution.image} alt={solution.title} className="h-52 w-full object-cover" data-ai-hint={solution.hint} />
                            </div>
                            <CardHeader className="space-y-2">
                                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                    {solution.icon}
                                    <span>{solution.subtitle}</span>
                                </div>
                                <CardTitle className="text-2xl">{solution.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex grow flex-col justify-between space-y-6">
                                <p className="text-sm text-muted-foreground">{solution.description}</p>
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                                    <span>{solution.hint}</span>
                                    <span className="inline-flex items-center gap-1 text-primary">
                                        For Decision Makers
                                    </span>
                                </div>
                            </CardContent>
                            <div className="border-t border-white/10 p-6">
                                <Button asChild variant="link" className="h-auto p-0 text-sm text-primary">
                                    <Link href={solution.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                        For More Information <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="glass-panel space-y-10 p-10">
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold sm:text-3xl">타겟 고객 및 기대 효과</h3>
                        <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                            데이터 기반의 신속하고 정확한 의사결정, 비용 절감, 리스크 예측 등 건설 가치사슬 전반의 KPI를 향상합니다.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {targetCustomers.map((customer, index) => (
                            <Card key={index} className="border-white/10 bg-black/30">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    {customer.icon}
                                    <CardTitle>{customer.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{customer.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
