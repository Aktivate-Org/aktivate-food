"use client";
import Header from "@/components/header";
import RestaurantBanner from "@/components/restaurant-banner";
import FoodSection from "./_sections/food-section";

// import Image from "next/image";
{
	/* <Image
						aria-hidden
						src='/globe.svg'
						alt='Globe icon'
						width={16}
						height={16}
					/> */
}

export default function Home() {
	return (
		<div className=''>
			<Header />
			<RestaurantBanner name='Yakoyo' />
			<FoodSection />
		</div>
	);
}
