import { Metadata } from 'next';
import { Solutions } from '@/components/sections/Solutions';
import { AiAssistantSection } from '@/components/sections/AiAssistantSection';

export const metadata: Metadata = {
    title: 'Solutions | Ninetynine AI Suite',
};

export default function SolutionsPage() {
    return (
        <div className="space-y-16">
            <Solutions />
            <AiAssistantSection />
        </div>
    );
}







