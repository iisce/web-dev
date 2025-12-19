'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
	{
		question: 'How long does it take to build my website?',
		answer: "Most websites are completed within 3-10 days depending on complexity. Single-page sites can be ready in 3-5 days, while multi-page sites take 7-10 days. We'll give you a specific timeline after discussing your requirements.",
	},
	{
		question: 'What do I need to provide to get started?',
		answer: "Just your business information, logo (if you have one), content (text, images), and any specific requirements. Don't have content ready? We can help you create compelling copy and source high-quality stock images at no extra cost.",
	},
	{
		question: 'Is hosting included in the price?',
		answer: "Yes! The first year of hosting is included at a subsidized rate. After the first year, hosting costs between ₦10,000-₦15,000 annually depending on your site's needs. We handle all technical aspects, so you don't have to worry about anything.",
	},
	{
		question: 'Will my website work on mobile phones?',
		answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring perfect display and functionality on smartphones, tablets, and desktop computers. Over 70% of web traffic comes from mobile, so this is our top priority.',
	},
	{
		question: "Can I update the website myself after it's built?",
		answer: 'Yes! We can set up a simple content management system for an additional fee, allowing you to make basic updates. Alternatively, we offer affordable maintenance packages where we handle all updates for you. Most clients prefer this hassle-free option.',
	},
	{
		question: 'What if I need changes after the website is live?',
		answer: 'We offer a 14-day revision period after launch where minor tweaks are free. After that, we provide ongoing support and maintenance at reasonable hourly rates. Most updates are quick and inexpensive.',
	},
	{
		question: 'Do you provide domain registration?',
		answer: "Yes, we can register your domain (.com, .ng, etc.) as part of the setup process. Domain costs are separate and typically range from ₦5,000-₦15,000 per year depending on the extension. We'll help you choose the perfect domain name.",
	},
	{
		question: 'Will my website be optimized for Google?',
		answer: 'Yes! Basic SEO (Search Engine Optimization) is included in all packages. This includes proper page structure, meta tags, sitemap generation, and mobile optimization. For advanced SEO strategies and content marketing, we offer additional services.',
	},
	{
		question: 'Can you integrate booking systems or payment gateways?',
		answer: 'Absolutely! We can integrate contact forms, booking calendars, Paystack/Flutterwave payment systems, WhatsApp chat buttons, and more. These integrations are available as add-ons and pricing depends on complexity.',
	},
	{
		question: 'What happens if something breaks on my website?',
		answer: 'We provide free technical support for the first 30 days to fix any bugs or issues. After that, you can opt for our maintenance plan (₦5,000-₦10,000/month) which includes monitoring, security updates, backups, and priority support.',
	},
	{
		question: "Do I own the website after it's built?",
		answer: "Yes! You own all rights to your website, including the design and content. We'll provide you with all necessary files and credentials. You're free to move to another hosting provider or developer at any time, though we hope you'll stay with us!",
	},
	{
		question: "What if I'm not satisfied with the final result?",
		answer: "Your satisfaction is our priority. We include multiple revision rounds during development to ensure you're happy with the design and functionality. We work closely with you throughout the process to avoid surprises at launch.",
	},
];

export function FAQSection() {
	return (
		<section className='py-24 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4'>
						<HelpCircle className='h-4 w-4' />
						Got questions?
					</div>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance'>
						Frequently Asked Questions
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
						Everything you need to know about our website building
						service
					</p>
				</div>

				<div className='bg-card rounded-lg border border-border p-6 sm:p-8'>
					<Accordion
						type='single'
						collapsible
						className='w-full space-y-4'
					>
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className='border border-border rounded-lg px-6 data-[state=open]:bg-accent/5'
							>
								<AccordionTrigger className='text-left hover:no-underline py-4 font-semibold'>
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className='text-muted-foreground pb-4 leading-relaxed'>
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className='mt-12 text-center p-6 rounded-lg bg-secondary/50 border border-border'>
					<h3 className='text-xl font-semibold mb-2'>
						Still have questions?
					</h3>
					<p className='text-muted-foreground mb-4'>
						Can't find what you're looking for? Reach out to us
						directly.
					</p>
					<button
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors'
					>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	);
}
