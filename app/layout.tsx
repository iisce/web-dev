import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';
import './globals.css';
import { organizationSchema, localBusinessSchema } from '@/lib/structured-data';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://webbuilder-nigeria.com'),
	title: {
		default:
			'WebBuilder Nigeria | Professional Website Development | Affordable Websites in 3-10 Days',
		template: '%s | WebBuilder Nigeria',
	},
	description:
		'Get a professional, SEO-ready website for your Nigerian business. Fast delivery in 3-10 days. Mobile-optimized, secure, affordable. From ₦25,000. Free consultation. Trusted by 150+ businesses.',
	keywords: [
		'website development Nigeria',
		'affordable website design Lagos',
		'professional website builder',
		'cheap website Nigeria',
		'business website Lagos',
		'website design Nigeria',
		'mobile responsive website',
		'SEO website Nigeria',
		'small business website',
		'website development Lagos',
		'website builder Nigeria',
		'professional web design',
		'ecommerce website Nigeria',
		'website hosting Nigeria',
	],
	authors: [{ name: 'WebBuilder Nigeria' }],
	creator: 'WebBuilder Nigeria',
	publisher: 'WebBuilder Nigeria',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: 'website',
		locale: 'en_NG',
		url: 'https://webbuilder-nigeria.com',
		siteName: 'WebBuilder Nigeria',
		title: 'Professional Website Development in Nigeria | Fast & Affordable',
		description:
			'Get a professional website for your business in just 3-10 days. Mobile-optimized, SEO-ready, and secure. Starting from ₦25,000. Trusted by 150+ Nigerian businesses.',
		images: [
			{
				url: '/placeholder.svg',
				width: 1200,
				height: 630,
				alt: 'WebBuilder Nigeria - Professional Website Development',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Professional Website Development in Nigeria | WebBuilder',
		description:
			'Get your business online in 3-10 days. Professional, mobile-friendly websites from ₦25,000. Free consultation available.',
		images: ['/placeholder.svg'],
		creator: '@webbuilder_ng',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
	},
	alternates: {
		canonical: 'https://webbuilder-nigeria.com',
	},
	category: 'technology',
	generator: 'v0.app',
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessSchema),
					}}
				/>
			</head>
			<body className={`font-sans antialiased`}>
				{children}
				<Toaster position='top-center' />
				<Analytics />
			</body>
		</html>
	);
}
