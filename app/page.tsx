import { HeroSection } from '@/components/hero-section';
import { PricingSection } from '@/components/pricing-section';
import { FeaturesSection } from '@/components/features-section';
import { ContactSection } from '@/components/contact-section';
import { ComparisonSection } from '@/components/comparison-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { StatsSection } from '@/components/stats-section';
import { GuaranteeSection } from '@/components/guarantee-section';
import { LeadMagnetSection } from '@/components/lead-magnet-section';

export default function Page() {
	return (
		<main className='min-h-screen'>
			<HeroSection />
			<StatsSection />
			<FeaturesSection />
			<PricingSection />
			<ComparisonSection />
			<GuaranteeSection />
			<LeadMagnetSection />
			<FAQSection />
			<ContactSection />
			<Footer />
		</main>
	);
}
