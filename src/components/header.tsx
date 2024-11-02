import Image from "next/image";

export default function Header() {
	return (
		<div className='flex items-center justify-between py-5'>
			{/* Left */}
			<div className='flex gap-3'>
				<Image
					aria-hidden
					src='/icons/scooter.svg'
					alt='bell icon'
					width={25}
					height={25}
				/>
				<p className='font-bold'> 72, Ogulana Drive</p>
			</div>
			{/* end left */}
			{/* Center */}
			<div className='text-center'></div>
			{/* End Center */}
			{/* Right */}
			<div className='flex justify-end items-center gap-3'>
				<Image
					aria-hidden
					src='/icons/bell.svg'
					alt='bell icon'
					width={25}
					height={25}
				/>
				<Image
					aria-hidden
					src='/icons/burger.svg'
					alt='bell icon'
					width={20}
					height={20}
				/>
			</div>
			{/* end Right */}
		</div>
	);
}
