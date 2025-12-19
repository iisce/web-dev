'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UrgencyBanner } from './urgency-banner';

export function HeroSection() {
	return (
		<section className='relative min-h-screen grid grid-rows-[1fr_auto]  overflow-hidden'>
			{/* Grid background */}
			<div className='absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] px-4 sm:px-6 lg:px-8' />

			<div className='relative z-10 max-w-6xl mx-auto text-center pt-[10svh] pb-16'>
				<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-8'>
					<span className='relative flex h-2 w-2'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
						<span className='relative inline-flex rounded-full h-2 w-2 bg-accent'></span>
					</span>
					End-of-Year Special Offer
				</div>

				<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance'>
					Build your online presence <br />
					<span className='bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent'>
						before the new year
					</span>
				</h1>

				<p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed'>
					Professional, fast, and affordable websites. Everything
					handled for you—from design to deployment. Mobile-friendly,
					secure, and delivered in days.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button
						size='lg'
						className='w-full sm:w-auto text-base group'
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Get Started Today
						<ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
					</Button>
					<Button
						size='lg'
						variant='outline'
						className='w-full sm:w-auto text-base bg-transparent'
						onClick={() =>
							document
								.getElementById('pricing')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						View Pricing
					</Button>
				</div>

				<div className='mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground'>
					<div className='flex items-center gap-2'>
						<div className='h-1 w-1 rounded-full bg-accent' />
						<span>3-10 days delivery</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-1 w-1 rounded-full bg-accent' />
						<span>No monthly fees</span>
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-1 w-1 rounded-full bg-accent' />
						<span>Offer ends Dec 31st</span>
					</div>
				</div>
			</div>

			<div className='w-full'>
				<UrgencyBanner />
			</div>
		</section>
	);
}
