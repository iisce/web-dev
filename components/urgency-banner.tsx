'use client';

import { useEffect, useState } from 'react';
import { Clock, Flame } from 'lucide-react';

export function UrgencyBanner() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		// Set end date to December 31, 2025, 23:59:59
		const endDate = new Date('2025-12-31T23:59:59');

		const calculateTimeLeft = () => {
			const now = new Date();
			const difference = endDate.getTime() - now.getTime();

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border-y border-red-500/20 py-4 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-center'>
					<div className='flex items-center gap-2'>
						<Flame className='h-5 w-5 text-red-500 animate-pulse' />
						<span className='font-semibold text-sm sm:text-base'>
							🎄 End-of-Year Special Ends In:
						</span>
					</div>

					<div className='flex items-center gap-3'>
						<div className='flex flex-col items-center min-w-[60px] px-3 py-2 rounded-lg bg-card border border-red-500/20'>
							<span className='text-2xl font-bold text-red-600 dark:text-red-400'>
								{timeLeft.days}
							</span>
							<span className='text-xs text-muted-foreground'>
								Days
							</span>
						</div>
						<span className='text-xl font-bold text-muted-foreground'>
							:
						</span>
						<div className='flex flex-col items-center min-w-[60px] px-3 py-2 rounded-lg bg-card border border-red-500/20'>
							<span className='text-2xl font-bold text-red-600 dark:text-red-400'>
								{String(timeLeft.hours).padStart(2, '0')}
							</span>
							<span className='text-xs text-muted-foreground'>
								Hours
							</span>
						</div>
						<span className='text-xl font-bold text-muted-foreground'>
							:
						</span>
						<div className='flex flex-col items-center min-w-[60px] px-3 py-2 rounded-lg bg-card border border-red-500/20'>
							<span className='text-2xl font-bold text-red-600 dark:text-red-400'>
								{String(timeLeft.minutes).padStart(2, '0')}
							</span>
							<span className='text-xs text-muted-foreground'>
								Mins
							</span>
						</div>
						<span className='text-xl font-bold text-muted-foreground hidden sm:inline'>
							:
						</span>
						<div className='flex-col items-center min-w-[60px] px-3 py-2 rounded-lg bg-card border border-red-500/20 hidden sm:flex'>
							<span className='text-2xl font-bold text-red-600 dark:text-red-400'>
								{String(timeLeft.seconds).padStart(2, '0')}
							</span>
							<span className='text-xs text-muted-foreground'>
								Secs
							</span>
						</div>
					</div>
				</div>

				<div className='text-center mt-3'>
					<p className='text-xs sm:text-sm text-muted-foreground'>
						<Clock className='inline h-3 w-3 mr-1' />
						Only{' '}
						<strong className='text-foreground'>
							3 spots left
						</strong>{' '}
						for December delivery • Prices return to normal on Jan
						1st
					</p>
				</div>
			</div>
		</div>
	);
}
