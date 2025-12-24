'use client';

import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail } from '@/app/actions';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: '이름을 입력해주세요.' }),
    email: z.string().email({ message: '올바른 이메일 주소를 입력해주세요.' }),
    company: z.string().min(2, { message: '회사명을 입력해주세요.' }),
    message: z.string().min(10, { message: '문의 내용을 10자 이상 입력해주세요.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
    const { toast } = useToast();
    const [serverError, setServerError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            company: '',
            message: '',
        },
    });

    const handleSubmit = (values: ContactFormValues) => {
        setServerError(null);
        startTransition(async () => {
            try {
                const result = await sendContactEmail(values);

                if (result?.success) {
                    toast({
                        title: '문의가 접수되었습니다.',
                        description: '담당자가 확인 후 연락드리겠습니다.',
                    });
                    form.reset();
                } else {
                    const message = result?.message ?? '메일 발송 중 알 수 없는 오류가 발생했습니다.';
                    setServerError(message);
                    toast({
                        title: '메일 발송에 실패했습니다.',
                        description: message,
                        variant: 'destructive',
                    });
                }
            } catch (error) {
                console.error('handleSubmit error', error);
                const fallbackMessage = '서버와 통신하는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
                setServerError(fallbackMessage);
                toast({
                    title: '메일 발송에 실패했습니다.',
                    description: fallbackMessage,
                    variant: 'destructive',
                });
            }
        });
    };

    return (
        <section id="contact" className="py-20 sm:py-28">
            <div className="container space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-semibold sm:text-4xl">문의하기</h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                        건설의 새로운 미래를 여는 (주)나인티나인에 궁금한 점이 있으신가요? AI 기반 빅데이터 솔루션 도입, 기술 파트너십, 기타 문의사항에 대해 언제든 편하게 연락 주십시오. 고객의 비즈니스에 데이터의 가치를 더해드릴 최고의 파트너가 되겠습니다.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <Card className="border-white/15 bg-black/40">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold">문의 양식</CardTitle>
                            <CardDescription className="text-muted-foreground">서비스 도입 및 파트너십 관련 문의사항을 작성해주세요.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>이름</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="이름" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>이메일</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="이메일" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>회사명</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="회사명" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>문의 내용</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="문의 내용" className="min-h-[120px]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {serverError && (
                                        <Alert variant="destructive">
                                            <AlertTitle>전송 실패</AlertTitle>
                                            <AlertDescription>{serverError}</AlertDescription>
                                        </Alert>
                                    )}
                                    <Button type="submit" className="w-full rounded-full text-base" variant="default" disabled={isPending}>
                                        {isPending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                전송 중…
                                            </>
                                        ) : (
                                            '문의 메일 보내기'
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <div className="glass-panel space-y-8 border-white/20 bg-black/30 p-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Contact</p>
                            <p className="text-2xl font-semibold">Curated AI Transformation</p>
                            <p className="text-sm text-muted-foreground">
                                맞춤형 PoC와 운영 컨설팅을 통해 도입 리스크를 최소화합니다. NDA 기반의 심층 미팅을 예약해 주세요.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="rounded-full bg-primary/15 p-3 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Email</p>
                                    <p className="text-lg font-semibold text-foreground">bignine99@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="rounded-full bg-primary/15 p-3 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="text-muted-foreground">
                                    <p className="text-sm uppercase tracking-[0.35em]">Tel</p>
                                    <p className="font-semibold text-foreground">02-949-9910</p>
                                    <p>Fax: 02-949-9950</p>
                                    <p>Mobile: 010-4160-1876</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="rounded-full bg-primary/15 p-3 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div className="text-muted-foreground">
                                    <p className="text-sm uppercase tracking-[0.35em]">Address</p>
                                    <p>서울특별시 노원구 월계로 370 희성프라자 312 (우: 01905)</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                            Response SLA 4H · Priority Support Available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
