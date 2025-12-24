'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getAiRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Loader2, AlertTriangle, FileText } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
    projectDescription: z.string().min(10, {
        message: '프로젝트에 대해 최소 10자 이상 설명해주세요.',
    }),
});

export function AiAssistantForm() {
    const [recommendations, setRecommendations] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectDescription: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setError(null);
        setRecommendations([]);

        try {
            const result = await getAiRecommendations(values.projectDescription);
            if (result.recommendations) {
                setRecommendations(result.recommendations);
            } else {
                setError('추천 항목을 생성하는데 실패했습니다. 다시 시도해주세요.');
            }
        } catch (err) {
            setError('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Card className="border-white/15 bg-black/40">
                <CardContent className="space-y-6 p-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="projectDescription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-muted-foreground">
                                            <Lightbulb className="h-5 w-5 text-primary" />
                                            프로젝트 설명
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="예: 서울 도심에 20층 규모의 친환경 오피스 빌딩을 설계하고 있습니다. 주요 자재는 목재와 재활용 콘크리트를 사용하려고 합니다."
                                                className="min-h-[140px] rounded-2xl border-white/15 bg-black/40 text-base placeholder:text-muted-foreground"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full rounded-full text-base" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        추천 생성 중...
                                    </>
                                ) : (
                                    'AI 데이터 분석 결과 보기'
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
                {isLoading && (
                    <Card className="border-white/10 bg-black/30">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]" />
                                    <Skeleton className="h-4 w-[200px]" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {error && (
                    <Alert variant="destructive" className="border-red-500/30 bg-red-500/10 text-red-100">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>오류</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                {recommendations.length > 0 && (
                    <Card className="border-white/10 bg-white/5">
                        <CardContent className="p-6">
                            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                                <FileText className="h-5 w-5 text-primary" />
                                추천 자료
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {recommendations.map((rec, index) => (
                                    <Badge key={index} variant="secondary" className="rounded-full border border-white/20 bg-primary/15 px-3 py-1 text-sm text-primary">
                                        {rec}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
