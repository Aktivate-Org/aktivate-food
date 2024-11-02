import Image from "next/image";

type RestaurantBannerProps = {
	name: string;
};

export default function RestaurantBanner({ name }: RestaurantBannerProps) {
	return (
		<div className='relative flex justify-between items-center rounded-xl h-25 overflow-hidden bg-primary text-background '>
			<div className='px-5 py-7'>
				<p>Restaurant</p>
				<p className='font-semibold'>{name}</p>
			</div>
			<div className='z-10'>
				<Image
					width={160}
					height={160}
					aria-hidden
					src='/food.svg'
					alt='bell icon'
				/>
			</div>

			<div className='absolute bottom-0 left-[10%] sm:left-[25%] w-full'>
				<Image
					width={400}
					height={400}
					aria-hidden
					src='/streak.svg'
					alt='bell icon'
				/>
			</div>
		</div>
	);
}
