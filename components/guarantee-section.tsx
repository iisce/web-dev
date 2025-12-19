'use client';

import { Shield, CheckCircle2, Clock, RefreshCw } from 'lucide-react';

const guarantees = [
	{
		icon: Shield,
		title: 'Money-Back Guarantee',
		description:
			'Not happy? Get a full refund within 14 days of delivery—no questions asked.',
	},
	{
		icon: CheckCircle2,
		title: 'Unlimited Revisions',
		description:
			"We'll keep refining until you're 100% satisfied with your website design.",
	},
	{
		icon: Clock,
		title: 'On-Time Delivery',
		description:
			'Get your website by the promised date or receive a 20% discount.',
	},
	{
		icon: RefreshCw,
		title: '30-Day Free Support',
		description:
			'Any bugs or technical issues fixed completely free for the first month.',
	},
];

export function GuaranteeSection() {
	return (
		<section
			id='guarantee'
			aria-label='Our Guarantees'
			className='py-24 px-4 sm:px-6 lg:px-8'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm mb-4'>
						<Shield className='h-4 w-4' />
						100% Risk-Free
					</div>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance'>
						Our iron-clad guarantee
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
						We take on all the risk so you can invest with
						confidence. Your satisfaction is our top priority.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
					{guarantees.map((guarantee, index) => (
						<div
							key={index}
							className='p-6 rounded-lg bg-card border-2 border-border hover:border-green-500/50 transition-colors'
						>
							<div className='flex items-start gap-4'>
								<div className='h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0'>
									<guarantee.icon className='h-6 w-6 text-green-600 dark:text-green-400' />
								</div>
								<div>
									<h3 className='text-lg font-semibold mb-2'>
										{guarantee.title}
									</h3>
									<p className='text-muted-foreground text-sm leading-relaxed'>
										{guarantee.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center p-8 rounded-lg bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border border-accent/20'>
					<p className='text-lg font-semibold mb-2'>
						Still unsure? We get it.
					</p>
					<p className='text-muted-foreground max-w-2xl mx-auto'>
						Building a website is a big decision. That's why we've
						removed all the risk. Try our service completely
						risk-free. If you're not thrilled with the results,
						we'll refund every naira. No hassle, no hard feelings.
					</p>
				</div>
			</div>
		</section>
	);
}
