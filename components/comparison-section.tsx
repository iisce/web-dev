'use client';

import { Check, X, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const comparisons = [
	{
		feature: 'Timeline',
		us: '3-10 days',
		diy: 'Weeks to months',
		agency: '4-12 weeks',
	},
	{
		feature: 'Cost',
		us: '₦25k - ₦50k',
		diy: '₦0 - ₦30k/year',
		agency: '₦200k - ₦2M+',
	},
	{
		feature: 'Professional Design',
		us: true,
		diy: false,
		agency: true,
	},
	{
		feature: 'Technical Setup',
		us: true,
		diy: false,
		agency: true,
	},
	{
		feature: 'Mobile Optimized',
		us: true,
		diy: 'Limited',
		agency: true,
	},
	{
		feature: 'SEO Optimization',
		us: true,
		diy: 'Basic',
		agency: true,
	},
	{
		feature: 'Ongoing Support',
		us: 'Included',
		diy: 'Self-serve',
		agency: 'Extra cost',
	},
	{
		feature: 'Custom Features',
		us: 'Available',
		diy: 'Template-limited',
		agency: 'Full custom',
	},
	{
		feature: 'Learning Curve',
		us: 'None - we handle it',
		diy: 'Steep - DIY',
		agency: 'None',
	},
];

const renderValue = (value: string | boolean) => {
	if (value === true) {
		return <Check className='h-5 w-5 text-green-500 mx-auto' />;
	}
	if (value === false) {
		return <X className='h-5 w-5 text-red-500 mx-auto' />;
	}
	return <span className='text-sm text-center'>{value}</span>;
};

export function ComparisonSection() {
	return (
		<section className='py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4'>
						<Zap className='h-4 w-4' />
						Why we're different
					</div>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance'>
						The smart choice for your business
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
						Get professional quality without agency prices or DIY
						headaches
					</p>
				</div>

				{/* Mobile View - Cards */}
				<div className='lg:hidden space-y-6'>
					{comparisons.map((item, index) => (
						<div
							key={index}
							className='p-6 rounded-lg bg-card border border-border'
						>
							<h3 className='font-semibold text-lg mb-4'>
								{item.feature}
							</h3>
							<div className='space-y-3'>
								<div className='flex items-center justify-between p-3 rounded-md bg-accent/5 border border-accent/20'>
									<span className='text-sm font-medium'>
										Our Service
									</span>
									<div className='flex items-center justify-center min-w-[80px]'>
										{renderValue(item.us)}
									</div>
								</div>
								<div className='flex items-center justify-between p-3 rounded-md bg-secondary'>
									<span className='text-sm font-medium text-muted-foreground'>
										DIY Builders
									</span>
									<div className='flex items-center justify-center min-w-[80px]'>
										{renderValue(item.diy)}
									</div>
								</div>
								<div className='flex items-center justify-between p-3 rounded-md bg-secondary'>
									<span className='text-sm font-medium text-muted-foreground'>
										Agencies
									</span>
									<div className='flex items-center justify-center min-w-[80px]'>
										{renderValue(item.agency)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Desktop View - Table */}
				<div className='hidden lg:block overflow-hidden rounded-lg border border-border bg-card'>
					<div className='overflow-x-auto'>
						<table className='w-full'>
							<thead>
								<tr className='border-b border-border bg-secondary/50'>
									<th className='px-6 py-4 text-left text-sm font-semibold'>
										Feature
									</th>
									<th className='px-6 py-4 text-center text-sm font-semibold bg-accent/10 relative'>
										<div className='absolute inset-0 bg-accent/5 border-x-2 border-accent/20'></div>
										<span className='relative'>
											Our Service
										</span>
									</th>
									<th className='px-6 py-4 text-center text-sm font-semibold text-muted-foreground'>
										DIY Builders
									</th>
									<th className='px-6 py-4 text-center text-sm font-semibold text-muted-foreground'>
										Agencies
									</th>
								</tr>
							</thead>
							<tbody>
								{comparisons.map((item, index) => (
									<tr
										key={index}
										className={cn(
											'border-b border-border hover:bg-secondary/30 transition-colors',
											{
												'border-b-0':
													index ===
													comparisons.length - 1,
											}
										)}
									>
										<td className='px-6 py-4 text-sm font-medium'>
											{item.feature}
										</td>
										<td className='px-6 py-4 bg-accent/5 relative'>
											<div className='absolute inset-0 bg-accent/5 border-x border-accent/10'></div>
											<div className='relative flex items-center justify-center font-medium'>
												{renderValue(item.us)}
											</div>
										</td>
										<td className='px-6 py-4'>
											<div className='flex items-center justify-center text-muted-foreground'>
												{renderValue(item.diy)}
											</div>
										</td>
										<td className='px-6 py-4'>
											<div className='flex items-center justify-center text-muted-foreground'>
												{renderValue(item.agency)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className='mt-12 text-center'>
					<p className='text-sm text-muted-foreground mb-4'>
						Ready to get started? No technical knowledge required.
					</p>
					<button
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors'
					>
						Start Your Project Today
					</button>
				</div>
			</div>
		</section>
	);
}
