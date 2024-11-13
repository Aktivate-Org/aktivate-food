import Image from "next/image";

type FoodItemProps = {
	name: string;
	// id: string;
	price: string;
};
export default function FoodItem({ name, price }:FoodItemProps) {
	return (
		<div>
			<div className = "flex  rounded-2xl h-34 w-34 relative " >
				<Image className="rounded-2xl"
					width={100}
					height={100}
					aria-hidden
					src='/semolina.png'
					alt='semo'
				/>
				<Image className="rounded-full max-w-[60px] max-h-[60px] absolute top-8 left-16"
					width={60}
					height={60}
					aria-hidden
					src='/add.svg'
					alt='add button'
				/>
			</div>
			{name}
			{price}
		</div>
	);
}