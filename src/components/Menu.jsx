

export default function Menu({ hidden }) {
    return (
        <ul onClick={hidden} className="absolute -bottom-[330px] left-0 z-10 text-lg text-[--main-color] w-1/2 menu">
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Home</li>
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Rentals</li>
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Categories</li>
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">About Us</li>
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Contact</li>
            <li className="px-14 py-2 bg-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Blog</li>
            <li className="px-14 py-2 bg-[--main-color] text-white rounded-e-xl opacity-70 hover:opacity-100 duration-300">Sign In</li>
        </ul>
    )
}