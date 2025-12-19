import { Star, Users, Globe, Award } from 'lucide-react';

const stats = [
	{
		icon: Users,
		value: '150+',
		label: 'Businesses Served',
		description: 'Happy clients across Nigeria',
	},
	{
		icon: Globe,
		value: '200+',
		label: 'Websites Built',
		description: 'And counting every week',
	},
	{
		icon: Star,
		value: '4.9/5',
		label: 'Client Rating',
		description: 'Based on 120+ reviews',
	},
	{
		icon: Award,
		value: '3 Years',
		label: 'In Business',
		description: 'Trusted since 2022',
	},
];

export function StatsSection() {
	return (
		<section className='py-16 px-4 sm:px-6 lg:px-8 bg-accent/5 border-y border-accent/20'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<div
							key={index}
							className='text-center'
						>
							<div className='inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 mb-3'>
								<stat.icon className='h-6 w-6 text-accent' />
							</div>
							<div className='text-3xl sm:text-4xl font-bold mb-1'>
								{stat.value}
							</div>
							<div className='text-sm font-semibold mb-1'>
								{stat.label}
							</div>
							<div className='text-xs text-muted-foreground'>
								{stat.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
