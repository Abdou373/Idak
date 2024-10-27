import Post from "../components/Post";
import img from "../images/pexels-pixabay-208736.jpg"


export default function Listings() {
    return (
        <div>
            <div className="text-center mx-4">
                <div className="flex justify-center">
                    <h1 className="relative my-10 p-5 font-semibold text-4xl w-fit max-md:text-2xl chapter">Featured Listings</h1>
                </div>
                <div className="flex overflow-auto text-nowrap justify-center">
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">All Iteme(5125)</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Residential Spaces(64)</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Sports Venues</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Meeting Spaces</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Vans & Buses</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Cars & SUVs</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200">Lorries & Industrial Vehicles</button>
                    <button className="py-2 px-4 hover:bg-[--second-color] hover:text-white rounded-full duration-200"><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>
            <div>
                <div className="px-10 grid grid-cols-3 my-3 gap-4 max-md:grid-cols-1">
                    <Post image={img} />
                    <Post image={img} />
                    <Post image={img} />
                    <Post image={img} />
                    <Post image={img} />
                    <Post image={img} />
                </div>
                <div className="text-center">
                    <button className="py-2 px-10 bg-[--second-color] hover:bg-[--main-color] text-white rounded-full">Load More</button>
                </div>
            </div>
        </div>

    );
}
