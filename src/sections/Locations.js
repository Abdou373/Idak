
export default function Locations() {
    return (
        <div className="mx-20 max-md:mx-4">
            <div className="flex justify-center">
                <h1 className="relative my-10 p-5 font-semibold text-4xl w-fit max-md:text-2xl chapter">Featured Locations</h1>
            </div>
            <div className="grid grid-cols-[20%_1fr_20%] gap-6 max-md:grid-cols-1">
                <img className="h-full rounded-xl max-md:w-full" src="https://media.istockphoto.com/id/1178773961/photo/mihintale-in-anuradhapura.jpg?s=612x612&w=0&k=20&c=o8khB9AGw0tYglYTvBM1ZDARqGr6c627dQXjVgVRdkY=" alt="" />
                <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                    <img className="h-[24vh] w-full rounded-xl max-md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsPY6DX3hyxTB9AGPXy-poqrOrXnvy5Q_HYA&s" alt="" />
                    <img className="h-[24vh] w-full rounded-xl max-md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3rISPyank4JpAgTC7cDZn6tLTKWWOM8lCw&s" alt="" />
                    <img className="h-[24vh] w-full rounded-xl max-md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjy_Ex9ArSlu-XY4iVGeN_JwXCbrerskAS8Q&s" alt="" />
                    <img className="h-[24vh] w-full rounded-xl max-md:h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4Pb-VCUmoNgJa0hQpIyrfehSFEwaKh71aA&s" alt="" />
                </div>
                <img className="h-full rounded-xl max-md:w-full" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b6/09/8a/caption.jpg?w=1200&h=-1&s=1" alt="" />
            </div>
        </div>
    );
}