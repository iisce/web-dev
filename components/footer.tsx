import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
	services: [
		{ name: 'Single Page Website', href: '#pricing' },
		{ name: 'Multi-Page Website', href: '#pricing' },
		{ name: 'E-commerce Sites', href: '#contact' },
		{ name: 'Website Maintenance', href: '#contact' },
	],
	company: [
		{ name: 'About Us', href: '#' },
		{ name: 'Our Work', href: '#' },
		{ name: 'Testimonials', href: '#' },
		{ name: 'Contact', href: '#contact' },
	],
	resources: [
		{ name: 'FAQ', href: '#faq' },
		{ name: 'Blog', href: '#' },
		{ name: 'Support', href: '#contact' },
		{ name: 'Privacy Policy', href: '#' },
	],
};

const socialLinks = [
	{ icon: Facebook, href: '#', label: 'Facebook' },
	{ icon: Twitter, href: '#', label: 'Twitter' },
	{ icon: Instagram, href: '#', label: 'Instagram' },
	{ icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			aria-label='Site Footer'
			className='bg-secondary/30 border-t border-border'
		>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Main Footer Content */}
				<div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
					{/* Brand Section */}
					<div className='lg:col-span-2'>
						<div className='flex items-center gap-2 mb-4'>
							<div className='h-8 w-8 rounded-lg bg-accent flex items-center justify-center'>
								<span className='text-accent-foreground font-bold text-lg'>
									W
								</span>
							</div>
							<span className='text-xl font-bold'>
								WebBuilder
							</span>
						</div>
						<p className='text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed'>
							Professional, fast, and affordable websites for
							businesses ready to establish their online presence.
							Build your digital future with us.
						</p>
						<div className='space-y-3'>
							<a
								href='tel:+2348061719533'
								className='flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								<Phone className='h-4 w-4' />
								<span>+234 806 171 9533</span>
							</a>
							<a
								href='mailto:hello@webbuilder.com'
								className='flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								<Mail className='h-4 w-4' />
								<span>hello@webbuilder.com</span>
							</a>
							<div className='flex items-start gap-3 text-sm text-muted-foreground'>
								<MapPin className='h-4 w-4 mt-0.5 flex-shrink-0' />
								<span>Lagos, Nigeria</span>
							</div>
						</div>
					</div>

					{/* Services */}
					<div>
						<h3 className='font-semibold mb-4 text-sm uppercase tracking-wider'>
							Services
						</h3>
						<ul className='space-y-3'>
							{footerLinks.services.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-sm text-muted-foreground hover:text-foreground transition-colors'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='font-semibold mb-4 text-sm uppercase tracking-wider'>
							Company
						</h3>
						<ul className='space-y-3'>
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-sm text-muted-foreground hover:text-foreground transition-colors'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='font-semibold mb-4 text-sm uppercase tracking-wider'>
							Resources
						</h3>
						<ul className='space-y-3'>
							{footerLinks.resources.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className='text-sm text-muted-foreground hover:text-foreground transition-colors'
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className='py-6 border-t border-border'>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
						<div className='flex items-center gap-6 order-2 sm:order-1'>
							<p className='text-sm text-muted-foreground'>
								© {currentYear} WebBuilder. All rights reserved.
							</p>
							<div className='hidden sm:flex items-center gap-4'>
								<Link
									href='#'
									className='text-xs text-muted-foreground hover:text-foreground transition-colors'
								>
									Terms
								</Link>
								<Link
									href='#'
									className='text-xs text-muted-foreground hover:text-foreground transition-colors'
								>
									Privacy
								</Link>
							</div>
						</div>

						<div className='flex items-center gap-4 order-1 sm:order-2'>
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									aria-label={social.label}
									className='h-9 w-9 rounded-lg bg-secondary hover:bg-accent/10 border border-border hover:border-accent/50 flex items-center justify-center transition-colors'
								>
									<social.icon className='h-4 w-4' />
								</a>
							))}
						</div>
					</div>

					{/* Mobile Terms & Privacy */}
					<div className='flex sm:hidden items-center justify-center gap-4 mt-4'>
						<Link
							href='#'
							className='text-xs text-muted-foreground hover:text-foreground transition-colors'
						>
							Terms of Service
						</Link>
						<span className='text-muted-foreground'>•</span>
						<Link
							href='#'
							className='text-xs text-muted-foreground hover:text-foreground transition-colors'
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
