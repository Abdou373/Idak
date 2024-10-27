import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";



export default function Categories() {
    return (
        <div className="text-center mb-8 max-md:mx-4">
            <div className="flex justify-center">
                <h1 className="relative my-10 py-5 font-semibold text-4xl w-fit max-md:text-2xl chapter">Browse From Top Categories</h1>
            </div>
            <div className="flex justify-around max-md:flex-col gap-4 ">
                <button className="flex items-center gap-2 bg-gray-200 px-5 py-2 rounded-full max-md:w-full"><BiLike className="text-red-400 " />Holiday Rentals</button>
                <button className="flex items-center gap-2 bg-gray-200 px-5 py-2 rounded-full max-md:w-full"><BsHouseDoor className="text-green-500 " />Residential Spaces</button>
                <button className="flex items-center gap-2 bg-gray-200 px-5 py-2 rounded-full max-md:w-full"><AiOutlineCompass className="text-violet-500 " />Event Spaces</button>
                <button className="flex items-center gap-2 bg-gray-200 px-5 py-2 rounded-full max-md:w-full"><BsCurrencyDollar className="text-blue-400 " />Commercial Properties</button>
                <button className="flex items-center gap-2 bg-gray-200 px-5 py-2 rounded-full max-md:w-full"><BsThreeDots className="text-orange-400 " />More</button>
            </div>
        </div>
    );
}