import { Link } from "react-router-dom"

export default function Menu({ hidden }) {

    return (
        <div onClick={hidden} className="w-full h-[calc(100vh-72px)] absolute -bottom-[calc(100vh-72px)] left-0 bg-black bg-opacity-65 z-10">
            <ul onClick={hidden} className="left-0 z-20 text-lg text-[--main-color] w-1/2 menu">
                <Link to="/"><li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">Home</li></Link>
                <li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">Rentals</li>
                <li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">Categories</li>
                <li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">About Us</li>
                <li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">Contact</li>
                <li className="px-14 py-2 bg-white rounded-e-xl opacity-80 hover:opacity-100 duration-300">Blog</li>
                <Link to="/signin"><li className="px-14 py-2 bg-[--main-color] text-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Sign In</li></Link>
            </ul>
        </div>
    )
}