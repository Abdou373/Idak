import { IoAdd } from "react-icons/io5";
import logo from "../images/Logo.png";
import Menu from "../components/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex justify-around items-center w-screen px-3 py-4 shadow-[0_0_10px_0_gray] max-md:justify-between">
      <div>
        <img className="w-24 h-auto" src={logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-6 font-light p-0 max-md:hidden text-lg">
          <Link to="/"><li>Home</li></Link>
          <li>Rentals</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex items-center">

        {open && <AiOutlineClose onClick={() => setOpen(false)} className="md:hidden w-6 h-6 mr-4" />}
        {!open && <FiMenu onClick={() => setOpen(true)} className="md:hidden w-6 h-6 mr-4" />}
        <Link to={'/signin'} className="max-md:hidden text-[--main-color] py-2 px-5 hover:bg-[--main-color] hover:text-white duration-200 rounded-full"><i className="bi bi-person"></i> Sing in</Link>
        <button className="bg-[--second-color] text-white px-5 py-2 cursor-pointer rounded-3xl ml-1 flex items-center gap-1 hover:bg-[--main-color] duration-200"><IoAdd /> Post Listing</button>
      </div>
      {open && <Menu hidden={() => setOpen(false)} />}
    </header>
  );
}

