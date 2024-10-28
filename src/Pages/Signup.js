import { useNavigate } from "react-router-dom"


export default function Signup() {
    const router = useNavigate()

    function animation() {
        const elements = document.querySelectorAll(".right")
        elements.forEach((e) => {
            e.classList.replace("right", "left")
        })
        document.querySelector(".opacity-100").classList.replace("opacity-100", "opacity-0");

        setTimeout(() => {
            router("/signin")
        }, 700)
    }


    return (
        <div className="relative w-full h-[calc(100vh-72px)] p-20 max-lg:p-12">
            <div className="absolute w-full -z-10 h-1/3 rounded-full bg-[--main-color] top-0 duration-700 right"></div>
            <div className="absolute w-full -z-10 h-[34%] rounded-full bg-[--main-color] top-1/2 -translate-y-1/2 duration-500 right"></div>
            <div className="absolute w-full -z-10 h-1/3 rounded-full bg-[--main-color] bottom-0 duration-300 right"></div>
            <div className="opacity-100 duration-150">

                <div className="flex justify-between flex-row-reverse items-center ">
                    <div className="w-1/3 max-lg:w-[40%] text-center max-md:hidden">
                        <h2 className="font-bold text-3xl mb-5 mt-3">Welcome to Idak!</h2>
                        <p className="text-[#ddd] font-medium">Discover the easiest way to rent cars, houses, and everything in between.
                            Whether you need a temporary place to stay, a reliable vehicle, or specific equipment,
                            Idak is here to make it happen. Browse, book, and get exactly what you need, secure, and hassle-free.
                            We're excited to help you unlock new possibilities with each rental. Welcome to the future of renting!</p>
                    </div>
                    <form className="flex flex-col w-[40%] gap-5 max-md:w-full">
                        <h1 className="text-3xl font-semibold mb-5 ml-5">Sign Up</h1>
                        <div className="relative w-full input-groupe">
                            <input className="outline-none focus:border-2 focus:border-solid focus:border-[--second-color] text-lg px-4 py-2 w-full rounded-full duration-50" type="text" required />
                            <label className="absolute left-5 top-1/2 -translate-y-1/2 px-1 font-bold text-[#aaa] pointer-events-none duration-150">Username</label>
                        </div>
                        <div className="relative w-full input-groupe">
                            <input className="outline-none focus:border-2 focus:border-solid focus:border-[--second-color] text-lg px-4 py-2 w-full rounded-full duration-50" type="email" required />
                            <label className="absolute left-5 top-1/2 -translate-y-1/2 px-1 font-bold text-[#aaa] pointer-events-none duration-150">Email</label>
                        </div>
                        <div className="relative w-full input-groupe">
                            <input className="outline-none focus:border-2 focus:border-solid focus:border-[--second-color] text-lg px-4 py-2 w-full rounded-full duration-50" type="password" required />
                            <label className="absolute left-5 top-1/2 -translate-y-1/2 px-1 font-bold text-[#aaa] pointer-events-none duration-150">Password</label>
                        </div>
                        <button className="bg-[--second-color] hover:bg-[--main-color] text-[#ddd] mt-10 text-xl px-4 py-2 rounded-full duration-300">Sign Up</button>
                        <div className="text-center">
                            <p className="text-sm text-[#333]">I don't have an account? <span onClick={animation} className="underline text-blue-700 font-medium cursor-pointer">Sign In</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}