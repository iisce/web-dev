import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://webbuilder-nigeria.com';
	const currentDate = new Date();

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/#features`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#pricing`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/#comparison`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#faq`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}
