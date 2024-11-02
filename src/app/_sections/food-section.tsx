"use-client";
import { useState } from "react";

const categories = [
	{ id: "1", name: "Swallow" },
	{ id: "2", name: "Soup" },
	{ id: "3", name: "Protein" },
	{ id: "4", name: "Others" },
	// { id: "5", name: "Others" },
	// { id: "6", name: "Others" },
	// { id: "7", name: "Others" },
	// { id: "8", name: "Others" },
];

export default function FoodSection() {
	const [selectedCategory, setSelectedCategory] = useState("1");

	const selectedStyling = "text-primary border-b-[1.9px] border-b-primary";

	return (
		<div className='mt-5'>
			<div className='flex justify-between border-b border-grey-1 overflow-x-auto scroll-smooth'>
				{categories.map((category) => (
					<span
						className={`text-sm px-2 py-1 ${
							selectedCategory === category.id ? selectedStyling : "text-grey-1"
						} min-w-min text-nowrap cursor-pointer`}
						key={category.id}
						onClick={() => setSelectedCategory(category.id)}
					>
						{category.name}
					</span>
				))}
			</div>
		</div>
	);
}
