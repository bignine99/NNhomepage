import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';
import { MatrixRain } from '@/components/effects/MatrixRain';

export const metadata: Metadata = {
    title: 'Contact | Ninetynine AI Consulting',
};

export default function ContactPage() {
    return (
        <div className="relative space-y-16">
            <MatrixRain />
            <ContactSection />
        </div>
    );
}







