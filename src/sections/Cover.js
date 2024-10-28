import cover from "../images/360_F_667595118_KYL0XIz8g6SiCz3w062JYYFW0cnZz9nn.jpg"
import { CiSearch } from "react-icons/ci";

export default function Cover() {
    return (
        <div className="relative mt-5 h-[600px] w-full">
            <img className="absolute top-0 left-0 w-full h-full -z-10" src={cover} alt="" />
            <div className="pt-24 text-center max-md:flex max-md:items-center max-md:flex-col max-md:w-full">
                <div className="max-md:w-1/2">
                    <h1 className="mb-5 text-5xl font-bold max-md:text-3xl">Discover Your <span className="text-[--main-color]">Perfect Rental</span></h1>
                    <p className="text-2xl max-md:text-lg">Rent Cars,Houses,and Items in Just a Few Clicks</p>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="flex gap-3 justify-center mt-5">
                        <button className="hover:opacity-100 hover:bg-[--main-color] hover:text-white bg-slate-50 px-5 py-1 rounded-full duration-300 opacity-70">Places</button>
                        <button className="hover:opacity-100 hover:bg-[--main-color] hover:text-white bg-slate-50 px-5 py-1 rounded-full duration-300 opacity-70">Rides</button>
                        <button className="hover:opacity-100 hover:bg-[--main-color] hover:text-white bg-slate-50 px-5 py-1 rounded-full duration-300 opacity-70">Things</button>
                    </div>
                    <form className="mt-10 relative w-4/5">
                        <input className="text-xl mt-0 p-5 w-full border-none rounded-full opacity-70 outline-none max-md:py-2 max-md:px-4 max-md:text-lg" placeholder="Search for cars,houses,and more..." type="text" />
                        <button className="absolute bottom-1/2 translate-y-1/2 right-3 h-11 w-11 flex justify-center items-center rounded-full duration-300 opacity-70 hover:opacity-100 text-white bg-[--main-color] max-md:hidden"><CiSearch className="w-full h-full p-2" /></button>
                        <button className="flex items-center justify-center gap-4 w-full bg-[--main-color] my-5 px-4 py-2  text-lg text-[#ddd] rounded-full font-semibold hover:bg-[--second-color] md:hidden"><CiSearch className="w-7 h-7" />Search Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}