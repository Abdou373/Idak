

export default function Post({ image }) {
    return (
        <div className="rounded-3xl w-fit">
            <img className="rounded-[16px_16px_0_0]" src={image} alt="" />
            <div className="px-3 py-2">
                <p className="text-sm my-1"><span className="text-lg text-red-400 font-semibold">85.000 LKR</span> /Month</p>
                <h2 className="my-2 font-bold">Luxury villa in Rego Park</h2>
                <p className="text-sm text-gray-500">3 Bethroom      |      2 Bathroom      |      2500 Square FT</p>
                <div className="flex gap-2 py-3">
                    <img className="w-11 h-11" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_UP9cSEjFLqwEVNDqWPhu9lUPLkzzaVpJw&s" alt="" />
                    <div >
                        <h4 className="font-semibold">Anne Liza</h4>
                        <p className="text-sm text-gray-400">Property Selier</p>
                    </div>
                </div>
            </div>
        </div>
    );
}