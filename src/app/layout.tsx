import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Ninetynine Hub | AI-Powered Construction Big Data',
    description: 'NINETYNINE: AI 기반 건설 빅데이터 분석 전문 기업. CUBE 엔진, AI 안전사고 예측, 건축 레퍼런스 검색, 건설 AI 어시스턴트 솔루션.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
            </head>
            <body className="font-body">
                <div className="flex min-h-screen flex-col bg-background text-foreground">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                <Toaster />
            </body>
        </html>
    );
}
