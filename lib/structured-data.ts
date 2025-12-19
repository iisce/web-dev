export const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	name: 'WebBuilder Nigeria',
	alternateName: 'WebBuilder',
	url: 'https://webbuilder-nigeria.com',
	logo: 'https://webbuilder-nigeria.com/placeholder-logo.svg',
	description:
		'Professional website development services in Nigeria. Fast, affordable, and SEO-ready websites for businesses.',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Lagos',
		addressCountry: 'NG',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+234-806-171-9533',
		contactType: 'Customer Service',
		areaServed: 'NG',
		availableLanguage: ['English'],
	},
	sameAs: [
		'https://facebook.com/webbuilder',
		'https://twitter.com/webbuilder_ng',
		'https://instagram.com/webbuilder_ng',
		'https://linkedin.com/company/webbuilder-ng',
	],
	foundingDate: '2022',
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '4.9',
		reviewCount: '120',
		bestRating: '5',
		worstRating: '1',
	},
};

export const serviceSchema = {
	'@context': 'https://schema.org',
	'@type': 'Service',
	serviceType: 'Website Development',
	provider: {
		'@type': 'Organization',
		name: 'WebBuilder Nigeria',
		url: 'https://webbuilder-nigeria.com',
	},
	areaServed: {
		'@type': 'Country',
		name: 'Nigeria',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Website Development Services',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: '1 Page Website',
					description:
						'Single professional page with contact form, mobile responsive, SSL certificate',
				},
				price: '25000',
				priceCurrency: 'NGN',
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: '2-3 Page Website',
					description:
						'Up to 3 pages with SEO optimization and social media integration',
				},
				price: '40000',
				priceCurrency: 'NGN',
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: '5-6 Page Website',
					description:
						'Up to 6 pages with advanced SEO, blog setup, and full navigation',
				},
				price: '50000',
				priceCurrency: 'NGN',
			},
		],
	},
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: 'How long does it take to build my website?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Most websites are completed within 3-10 days depending on complexity. Single-page sites can be ready in 3-5 days, while multi-page sites take 7-10 days.',
			},
		},
		{
			'@type': 'Question',
			name: 'What do I need to provide to get started?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Just your business information, logo (if you have one), content (text, images), and any specific requirements. We can help you create compelling copy and source high-quality stock images at no extra cost.',
			},
		},
		{
			'@type': 'Question',
			name: 'Is hosting included in the price?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Yes! The first year of hosting is included at a subsidized rate. After the first year, hosting costs between ₦10,000-₦15,000 annually.',
			},
		},
		{
			'@type': 'Question',
			name: 'Will my website work on mobile phones?',
			acceptedAnswer: {
				'@type': 'Answer',
				text: 'Absolutely! All our websites are built with a mobile-first approach, ensuring perfect display and functionality on smartphones, tablets, and desktop computers.',
			},
		},
		{
			'@type': 'Question',
			name: "Do I own the website after it's built?",
			acceptedAnswer: {
				'@type': 'Answer',
				text: "Yes! You own all rights to your website, including the design and content. We'll provide you with all necessary files and credentials.",
			},
		},
	],
};

export const localBusinessSchema = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	'@id': 'https://webbuilder-nigeria.com',
	name: 'WebBuilder Nigeria',
	image: 'https://webbuilder-nigeria.com/placeholder-logo.svg',
	url: 'https://webbuilder-nigeria.com',
	telephone: '+234-806-171-9533',
	priceRange: '₦25,000 - ₦50,000',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Lagos',
		addressCountry: 'NG',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: '6.5244',
		longitude: '3.3792',
	},
	openingHoursSpecification: {
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		opens: '09:00',
		closes: '18:00',
	},
	sameAs: [
		'https://facebook.com/webbuilder',
		'https://twitter.com/webbuilder_ng',
		'https://instagram.com/webbuilder_ng',
	],
};
