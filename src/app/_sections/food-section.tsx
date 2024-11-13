"use-client";
import FoodItem from "@/components/food-item";
import { useState } from "react";

const categories = [
	{ id: "1", name: "Swallow" },
	{ id: "2", name: "Soup" },
	{ id: "3", name: "Protein" },
	{ id: "4", name: "Others" },
	{ id: "5", name: "Others" },
	// { id: "6", name: "Others" },
	// { id: "7", name: "Others" },
	// { id: "8", name: "Others" },
];



const food = [
	{ id: "1", name: "Semo", price: "300", category: "1" },
	{ id: "2", name: "Eba", price: "300",  category: "1" },
	{ id: "3", name: "Pounded Yam", price: "500",  category: "1" },
	{ id: "4", name: "Amala", price: "300",  category: "1"},
	{ id: "5", name: "Oha Soup", price: "500", category: "2" },
	{ id: "6", name: "Edikakaikong", price: "500", category: "2" },
	{ id: "7", name: "Efo Elegusi", price: "500", category: "2" },
	{ id: "8", name: "Black Amala", price: "300", category: "3" },
	{ id: "9", name: "Wheat", price: "300", category: "1" },
	{ id: "10", name: "Oatmeal Fufu", price: "300", category: "1" },
];



export default function FoodSection() {
	const [selectedCategory, setSelectedCategory] = useState("1");

	const selectedStyling = "text-primary border-b-[1.9px] border-b-primary";
	const filteredFood = food.filter((food) => food.category === selectedCategory)

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
			<div className = "flex flex-wrap gap-10 mt-5 mx-auto">
				{filteredFood.map((food) => (
					<FoodItem key={food.id} name={food.name} price={food.price}/>
				))}
			</div>

		</div>
	);
}
