'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
	{
		name: '1 Page Website',
		price: '25,000',
		total: '100,000',
		features: [
			'Single professional page',
			'Contact form included',
			'Mobile responsive',
			'SSL certificate',
			'Fast loading speed',
		],
	},
	{
		name: '2-3 Page Website',
		price: '40,000',
		total: '115,000',
		featured: true,
		features: [
			'Up to 3 pages',
			'Contact & about pages',
			'Mobile responsive',
			'SSL certificate',
			'SEO optimized',
			'Social media integration',
		],
	},
	{
		name: '5-6 Page Website',
		price: '50,000',
		total: '125,000',
		features: [
			'Up to 6 pages',
			'Full navigation menu',
			'Mobile responsive',
			'SSL certificate',
			'Advanced SEO',
			'Social media integration',
			'Blog setup (optional)',
		],
	},
];

export function PricingSection() {
	return (
		<section
			id='pricing'
			aria-label='Pricing Plans'
			className='py-24 px-4 sm:px-6 lg:px-8'
		>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance'>
						Simple, transparent pricing
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
						One-time build cost. No hidden fees. First year hosting
						included at subsidized rate.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
					{packages.map((pkg, index) => (
						<div
							key={index}
							className={`relative p-8 rounded-lg border ${
								pkg.featured
									? 'border-accent bg-card shadow-lg shadow-accent/20'
									: 'border-border bg-card'
							}`}
						>
							{pkg.featured && (
								<div className='absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium'>
									Most Popular
								</div>
							)}
							<h3 className='text-xl font-bold mb-2'>
								{pkg.name}
							</h3>
							<div className='mb-6'>
								<span className='text-4xl font-bold'>
									₦{pkg.price}
								</span>
								<span className='text-muted-foreground text-sm ml-2'>
									(build only)
								</span>
							</div>
							<ul className='space-y-3 mb-8'>
								{pkg.features.map((feature, featureIndex) => (
									<li
										key={featureIndex}
										className='flex items-start gap-3'
									>
										<Check className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
										<span className='text-sm text-muted-foreground'>
											{feature}
										</span>
									</li>
								))}
							</ul>
							<Button
								className='w-full'
								variant={pkg.featured ? 'default' : 'outline'}
								onClick={() =>
									document
										.getElementById('contact')
										?.scrollIntoView({ behavior: 'smooth' })
								}
							>
								Get Started
							</Button>
						</div>
					))}
				</div>

				<div className='bg-secondary/50 rounded-lg p-6 sm:p-8 border border-border'>
					<h3 className='text-xl font-bold mb-4'>
						Hosting + Domain + SSL (Managed by Us)
					</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<div className='flex items-start gap-4'>
							<div className='h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0'>
								<span className='text-xl font-bold text-accent'>
									1
								</span>
							</div>
							<div>
								<div className='font-semibold mb-1'>
									First Year (Subsidized)
								</div>
								<div className='text-3xl font-bold mb-1'>
									₦75,000
								</div>
								<div className='text-sm text-muted-foreground'>
									Includes domain, hosting & SSL
								</div>
							</div>
						</div>
						<div className='flex items-start gap-4'>
							<div className='h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0'>
								<span className='text-xl font-bold'>2+</span>
							</div>
							<div>
								<div className='font-semibold mb-1'>
									Yearly Renewal
								</div>
								<div className='text-3xl font-bold mb-1'>
									₦170,000
								</div>
								<div className='text-sm text-muted-foreground'>
									Standard annual rate
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
