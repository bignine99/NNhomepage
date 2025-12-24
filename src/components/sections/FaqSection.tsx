import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "솔루션 도입을 위해 AI나 빅데이터 전문 인력을 채용해야 하나요?",
        answer: "(주)나인티나인의 솔루션은 복잡한 AI 알고리즘과 빅데이터 처리 기술을 백엔드에 내재화하고, 사용자는 가장 익숙한 Excel 환경에서 결과를 확인하고 분석할 수 있도록 설계되었습니다. 별도의 코딩 지식이나 전문 교육 없이도 현장 엔지니어와 본사 관리자가 마우스 클릭만으로 고도화된 데이터 분석 업무를 수행할 수 있습니다."
    },
    {
        question: "비정형화된 과거 프로젝트 문서들도 데이터로 활용할 수 있나요?",
        answer: "물론입니다. (주)나인티나인의 핵심 경쟁력 중 하나인 RAG(Retrieval-Augmented Generation)와 Vector DB 기술이 제안서, VE 보고서, 품질 및 안전관리 문서, 설계 도서 등 흩어져 있는 비정형 데이터를 AI가 학습 가능한 Vector DB로 자동 가공합니다. 이를 통해 잠들어 있던 경험 자산을 미래 프로젝트 의사결정을 위한 핵심 지식으로 즉시 변환해 드립니다."
    },
    {
        question: "방대한 양의 건설 데이터를 구축하는 데 시간이 오래 걸리지 않나요?",
        answer: "자체 개발한 CUBE 기술과 자동화 모듈은 수작업 대비 1,000배 이상의 속도로 DB를 구축합니다. 내역서, 공정표, 도면 등의 원천 정보를 온톨로지 기반 자연어로 자동 동기화하여 처리하므로 프로젝트 규모가 클수록 기존 방식과는 비교할 수 없는 데이터 처리 속도와 효율성을 경험하실 수 있습니다."
    },
    {
        question: "구체적인 도입 비용과 범위는 어떻게 되나요?",
        answer: "고객사의 보유 데이터 규모, RAG 학습 범위, 맞춤형 개발 요구사항 등에 따라 유동적입니다. 단순 소프트웨어 구매가 아니라 데이터 파이프라인을 구축하는 과정이므로 '문의하기'를 통해 연락 주시면 데이터 성숙도를 진단하고 최적의 효율을 낼 수 있는 맞춤형 견적과 로드맵을 제시해 드립니다."
    },
    {
        question: "서로 다른 양식의 내역서와 공정표를 어떻게 통합하여 분석하나요?",
        answer: "(주)나인티나인의 CUBE 기술은 수량산출서, 내역서, 공정표 데이터를 자연어 기반으로 동기화합니다. 서로 다른 문서 간 연관 관계를 AI가 문맥적으로 이해하여 연결하므로 별도의 복잡한 코드 맵핑 없이도 통합 관리가 가능하며, 공사비와 일정이 유기적으로 연계된 5D 분석 환경을 제공합니다."
    },
    {
        question: "현장 관리에 필수적인 5W1H 정보는 어떻게 제공되나요?",
        answer: "원천 정보의 온톨로지 분석을 통해 누가(Who), 언제(When), 어디서(Where), 무엇을(What), 얼마만큼(How much) 수행해야 하는지 자동으로 추출하고 정렬합니다. 관리자는 이 정보를 바탕으로 자재 투입량, 필요 인력, 기성 청구 시점, 생산성 분석 등을 직관적으로 파악해 선제적인 공정 관리와 원가 관리를 수행할 수 있습니다."
    },
    {
        question: "설계사나 CM사 입장에서는 어떤 이점이 있나요?",
        answer: "설계사는 과거 유사 프로젝트의 설계 정보, LCC, 친환경 데이터를 즉시 참조해 최적의 설계를 도출할 수 있고 CM사는 시공 단계에서 발생할 수 있는 리스크를 과거 VE 및 안전 관리 데이터를 기반으로 사전에 예측하고 방지할 수 있습니다. 프로젝트 전 단계에서 신속하고 정확한 의사결정을 지원하는 지능형 파트너 역할을 수행합니다."
    },
]

export function FaqSection() {
    return (
        <section id="faq" className="py-20 sm:py-28">
            <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="glass-panel space-y-6 border-white/20 bg-black/30 p-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">FAQ</p>
                    <h2 className="text-3xl font-semibold sm:text-4xl">자주 묻는 질문</h2>
                    <p className="text-muted-foreground">
                        데이터 파이프라인 구축부터 AI 운영 전략까지, 가장 많이 받은 질문을 요약했습니다.
                        추가 문의는 언제든지 도입 컨설턴트에게 연결해 드립니다.
                    </p>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-muted-foreground">
                        <p className="text-xs uppercase tracking-[0.35em]">Response SLA</p>
                        <p className="mt-2 text-2xl font-semibold text-foreground">평균 4시간 이내</p>
                        <p className="mt-1">전담 어카운트 매니저와 AI PM 팀이 직접 대응합니다.</p>
                    </div>
                    <Button asChild className="rounded-full px-6">
                        <a href="#contact">전문가에게 바로 문의</a>
                    </Button>
                </div>
                <div className="glass-panel border-white/15 bg-black/30 p-8">
                    <Accordion type="single" collapsible className="w-full divide-y divide-white/10">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={item.question} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
