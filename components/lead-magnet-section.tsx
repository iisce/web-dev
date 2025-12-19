'use client';

import { useState } from 'react';
import { Download, CheckCircle2, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function LeadMagnetSection() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !name) {
			toast.error('Please fill in all fields');
			return;
		}

		// Construct WhatsApp message
		const message = `
*Free Guide Request*

*Name:* ${name}
*Email:* ${email}

Requesting: "10 Must-Have Features for Business Websites in 2025"
    `.trim();

		const encodedMessage = encodeURIComponent(message);
		const whatsappNumber = '2348061719533';
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

		// Open WhatsApp
		window.open(whatsappUrl, '_blank');

		// Show success
		setIsSubmitted(true);
		toast.success("Request sent! We'll send your guide shortly.");

		// Reset after 5 seconds
		setTimeout(() => {
			setEmail('');
			setName('');
			setIsSubmitted(false);
		}, 5000);
	};

	return (
		<section className='py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30'>
			<div className='max-w-4xl mx-auto'>
				<div className='bg-gradient-to-br from-accent/10 via-card to-accent/5 border-2 border-accent/20 rounded-2xl overflow-hidden'>
					<div className='grid md:grid-cols-2 gap-8 p-8 lg:p-12'>
						{/* Left side - Value proposition */}
						<div className='flex flex-col justify-center'>
							<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-medium w-fit mb-4'>
								<Gift className='h-3 w-3' />
								FREE DOWNLOAD
							</div>
							<h2 className='text-3xl lg:text-4xl font-bold mb-4 text-balance'>
								Get our free website checklist
							</h2>
							<p className='text-muted-foreground mb-6 leading-relaxed'>
								Download our comprehensive guide:{' '}
								<strong>
									"10 Must-Have Features for Business Websites
									in 2025"
								</strong>
							</p>

							<ul className='space-y-3 mb-6'>
								{[
									'Essential features every business site needs',
									'Common mistakes that kill conversions',
									'Mobile optimization secrets',
									'SEO basics that actually work',
								].map((item, index) => (
									<li
										key={index}
										className='flex items-start gap-3'
									>
										<CheckCircle2 className='h-5 w-5 text-accent flex-shrink-0 mt-0.5' />
										<span className='text-sm'>{item}</span>
									</li>
								))}
							</ul>

							<p className='text-xs text-muted-foreground'>
								No spam. Just valuable insights to help your
								business grow online.
							</p>
						</div>

						{/* Right side - Form */}
						<div className='flex flex-col justify-center bg-card rounded-lg border border-border p-6 lg:p-8'>
							{!isSubmitted ? (
								<form
									onSubmit={handleSubmit}
									className='space-y-4'
								>
									<div>
										<Label
											htmlFor='lead-name'
											className='text-sm font-medium mb-2 block'
										>
											Your Name
										</Label>
										<Input
											id='lead-name'
											type='text'
											placeholder='John Doe'
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
											className='w-full'
											required
										/>
									</div>

									<div>
										<Label
											htmlFor='lead-email'
											className='text-sm font-medium mb-2 block'
										>
											Email Address
										</Label>
										<Input
											id='lead-email'
											type='email'
											placeholder='john@company.com'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
											className='w-full'
											required
										/>
									</div>

									<Button
										type='submit'
										className='w-full group'
										size='lg'
									>
										<Download className='h-4 w-4 mr-2 transition-transform group-hover:translate-y-0.5' />
										Get Free Guide Now
									</Button>

									<p className='text-xs text-center text-muted-foreground'>
										Instant access. No credit card required.
									</p>
								</form>
							) : (
								<div className='text-center py-8'>
									<div className='h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4'>
										<CheckCircle2 className='h-8 w-8 text-green-600 dark:text-green-400' />
									</div>
									<h3 className='text-xl font-semibold mb-2'>
										Request Sent!
									</h3>
									<p className='text-muted-foreground text-sm'>
										Check WhatsApp - we'll send your free
										guide right away.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
