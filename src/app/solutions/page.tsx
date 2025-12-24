import { Metadata } from 'next';
import { Solutions } from '@/components/sections/Solutions';
import { AiAssistantSection } from '@/components/sections/AiAssistantSection';
import { MatrixRain } from '@/components/effects/MatrixRain';

export const metadata: Metadata = {
    title: 'Solutions | Ninetynine AI Suite',
};

export default function SolutionsPage() {
    return (
        <div className="relative space-y-16">
            <MatrixRain />
            <Solutions />
            <AiAssistantSection />
        </div>
    );
}







