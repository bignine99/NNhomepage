import { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
    title: 'Contact | Ninetynine AI Consulting',
};

export default function ContactPage() {
    return (
        <div className="space-y-16">
            <ContactSection />
        </div>
    );
}







