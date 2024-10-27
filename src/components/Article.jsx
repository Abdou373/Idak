export default function Article({ date, title, description, img }) {
    return (
        <div className="flex gap-2 max-md:flex-col">
            <img className="w-48 h-36 rounded-lg max-md:w-full max-md:h-auto" src={img} alt="" />
            <div className="px-2">
                <span className="text-red-500">{date}</span>
                <h3 className="font-semibold text-2xl ">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
}