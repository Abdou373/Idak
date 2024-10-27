
export default function Stat() {
    return (
        <div className="flex justify-between my-10 mx-20 gap-5 items-center max-md:flex-col max-md:mx-6 max-md:text-center ">
            <div className="w-1/4  max-md:w-full">
                <h2 className="font-semibold text-4xl text-wrap leading-snug">Insights and Porfomance Metrics</h2>
            </div>
            <div className="text-center w-1/4 h-56 bg-[#222] flex items-center flex-col justify-center rounded-3xl max-md:w-full">
                <h2 className="text-4xl text-[#ddd] font-semibold my-3">5000+</h2>
                <p className="text-gray-400">Total listings in the System</p>
            </div>
            <div className="text-center w-1/4 h-56 bg-[#222] flex items-center flex-col justify-center rounded-3xl max-md:w-full">
                <h2 className="text-4xl text-[#ddd] font-semibold my-3">1000+</h2>
                <p className="text-gray-400">Active Listings</p>
            </div>
            <div className="text-center w-1/4 h-56 bg-[#222] flex items-center flex-col justify-center rounded-3xl max-md:w-full">
                <h2 className="text-4xl text-[#ddd] font-semibold my-3">30+</h2>
                <p className="text-gray-400">Articles in the Blog</p>
            </div>
        </div>
    );
}