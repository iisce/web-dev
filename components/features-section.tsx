import { Search, TrendingUp, Users, Sparkles } from 'lucide-react';

const features = [
	{
		icon: Search,
		title: 'SEO-Ready Website',
		description:
			'Get found on Google faster. Your website comes optimized for search engines so customers can discover your business when searching online.',
	},
	{
		icon: TrendingUp,
		title: 'Boost Your Sales',
		description:
			'Convert visitors into customers. Professional design builds trust and credibility, increasing inquiries by up to 3x compared to DIY sites.',
	},
	{
		icon: Users,
		title: 'Reach More Customers',
		description:
			'Perfect on every device. 75% of Nigerians browse on mobile—your site works flawlessly on all phones, tablets, and computers.',
	},
	{
		icon: Sparkles,
		title: 'Stand Out Online',
		description:
			'Look professional, be memorable. Custom designs that showcase your brand and make you stand out from competitors still using generic templates.',
	},
];

export function FeaturesSection() {
	return (
		<section
			id='features'
			aria-label='Features'
			className='py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance'>
						Why choose us?
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
						We deliver professional websites with everything you
						need to succeed online
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors'
						>
							<div className='h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4'>
								<feature.icon className='h-6 w-6 text-accent' />
							</div>
							<h3 className='text-xl font-semibold mb-2'>
								{feature.title}
							</h3>
							<p className='text-muted-foreground text-sm leading-relaxed'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
