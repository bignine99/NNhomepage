import { Metadata } from 'next';
import { FaqSection } from '@/components/sections/FaqSection';
import { MatrixRain } from '@/components/effects/MatrixRain';

export const metadata: Metadata = {
    title: 'FAQ | Ninetynine Insights',
};

export default function FaqPage() {
    return (
        <div className="relative space-y-16">
            <MatrixRain />
            <FaqSection />
        </div>
    );
}







