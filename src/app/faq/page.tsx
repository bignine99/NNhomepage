import { Metadata } from 'next';
import { FaqSection } from '@/components/sections/FaqSection';

export const metadata: Metadata = {
    title: 'FAQ | Ninetynine Insights',
};

export default function FaqPage() {
    return (
        <div className="space-y-16">
            <FaqSection />
        </div>
    );
}







