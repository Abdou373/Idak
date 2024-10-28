import { useNavigate } from "react-router-dom";

export default function Signin() {
  const router = useNavigate()


  function animation() {
    const elements = document.querySelectorAll(".left")
    elements.forEach(e => {
      e.classList.replace("left", "right");
    });
    document.querySelector(".opacity-100").classList.replace("opacity-100", "opacity-0")
    setTimeout(() => {
      router("/signup")
    }, 700)
  }

  return (
    <div className="relative w-full h-[calc(100vh-72px)] p-20 max-lg:p-10">
      <div className="absolute w-full -z-10 h-1/3 rounded-full bg-[--main-color] top-0 left duration-700"></div>
      <div className="absolute w-full -z-10 h-[34%] rounded-full bg-[--main-color] top-1/2 -translate-y-1/2 left duration-500"></div>
      <div className="absolute w-full -z-10 h-1/3 rounded-full bg-[--main-color] bottom-0 left duration-300"></div>
      <div className="opacity-100 duration-150">

        <div className="flex justify-between items-center">
          <div className="w-1/3 text-center max-md:hidden">
            <h2 className="font-bold text-3xl mb-5 mt-3">Welcome Back to Idak!</h2>
            <p className="text-[#ddd] font-medium">We're thrilled to see you again! Dive back in and discover the perfect options for renting cars, houses, and more, all at your fingertips.
              Whether you're returning to pick up where you left off or ready to explore new listings,
              we're here to make every rental easy, convenient, and seamless.</p>
          </div>
          <form className="flex flex-col w-[40%] gap-5 max-md:w-full">
            <h1 className="text-3xl font-semibold mb-5 ml-5 max-md:text-white">Sign In</h1>
            <div className="relative w-full input-groupe groupe">
              <input className="outline-none focus:border-2 focus:border-solid focus:border-[--second-color] text-lg px-4 py-2 w-full rounded-full duration-50" type="email" required />
              <label className="absolute left-5 top-1/2 -translate-y-1/2 px-1 font-bold text-[#aaa] pointer-events-none duration-150">Email</label>
            </div>
            <div className="relative w-full input-groupe groupe">
              <input className="outline-none focus:border-2 focus:border-solid focus:border-[--second-color] text-lg px-4 py-2 w-full rounded-full duration-50" type="password" required />
              <label className="absolute left-5 top-1/2 -translate-y-1/2 px-1 font-bold text-[#aaa] pointer-events-none duration-150">Password</label>
            </div>
            <button className="bg-[--second-color] hover:bg-[--main-color] text-[#ddd] mt-10 text-xl px-4 py-2 rounded-full duration-300">Sign In</button>
            <div className="text-center">
              <p className="text-sm text-[#333]">I don't have an account? <span onClick={animation} className="underline text-blue-700 font-medium cursor-pointer">Sign Up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}