import { Zap, Shield, Smartphone, Clock } from 'lucide-react';

const features = [
	{
		icon: Zap,
		title: 'Lightning Fast',
		description:
			'Keep visitors engaged—your site loads in under 2 seconds, reducing bounce rates by 40% and keeping customers on your page.',
	},
	{
		icon: Shield,
		title: 'Secure & Reliable',
		description:
			'Build customer trust instantly. SSL certificates and security features show that padlock icon—proving your business is legitimate and safe.',
	},
	{
		icon: Smartphone,
		title: 'Mobile-First Design',
		description:
			'Reach 70% more customers. Your site works flawlessly on phones where most of your audience browses—no pinching or zooming needed.',
	},
	{
		icon: Clock,
		title: 'Quick Turnaround',
		description:
			'Start getting customers in days, not months. Launch your online presence before competitors and start generating leads this month.',
	},
];

export function FeaturesSection() {
	return (
		<section className='py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30'>
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
