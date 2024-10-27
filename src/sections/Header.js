import { IoAdd } from "react-icons/io5";
import logo from "../images/Logo.png";
import { FiMenu } from "react-icons/fi";
import Menu from "../components/Menu";
import { useState } from "react";


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex justify-around items-center w-screen px-3 py-4 max-md:justify-between">
      <div>
        <img className="w-24 h-auto" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-6 font-light p-0 max-md:hidden text-lg">
          <a href="/home"><li>Home</li></a>
          <li>Rentals</li>
          <li>Categories</li>
          <li>About Us</li>
          <a href="Contact"><li>Contact</li></a>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex items-center">
        <FiMenu onClick={() => open ? setOpen(false) : setOpen(true)} className="md:hidden w-6 h-6 mr-4" />
        <button className="max-md:hidden text-[--main-color] py-2 px-5 hover:bg-[--main-color] hover:text-white duration-200 rounded-full"><i className="bi bi-person"></i> Sing in</button>
        <button className="bg-[--second-color] text-white px-5 py-2 cursor-pointer rounded-3xl ml-1 flex items-center gap-1 hover:bg-[--main-color] duration-200"><IoAdd /> Post Listing</button>
      </div>
      {open && <Menu hidden={() => setTimeout(() => { setOpen(false) }, 200)} />}
    </header>
  );
}

