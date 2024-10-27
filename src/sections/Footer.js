import logo from "../images/Logo.png"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Footer() {
    return (
        <div>
            <div className="flex justify-around px-4 py-2 bg-slate-100 text-gray-500 max-md:flex-col max-md:px-6 max-md:gap-7">
                <div className="w-1/4 max-md:w-full">
                    <img className="w-44 m-3" src={logo} alt="" />
                    <p className="text-lg">Sri Lanka's first & largest platform designed to create an online marketplace exclusively for RENT</p>
                    <div className="flex gap-2 justify-center mt-4">
                        <FaInstagram className="bg-[--second-color] text-white w-10 h-10 p-2 rounded-full" />
                        <FaTwitter className="bg-[--second-color] text-white w-10 h-10 p-2 rounded-full" />
                        <FaYoutube className="bg-[--second-color] text-white w-10 h-10 p-2 rounded-full" />
                        <FaFacebookF className="bg-[--second-color] text-white w-10 h-10 p-2 rounded-full" />
                        <FaLinkedinIn className="bg-[--second-color] text-white w-10 h-10 p-2 rounded-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-[--main-color] text-lg font-semibold my-2" >Navigation</h2>
                    <ul className="flex flex-col gap-2">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Terms Of Use</li>
                        <li>Privicy Policy</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[--main-color] text-lg font-semibold my-2" >Featured Locations</h2>
                    <ul className="flex flex-col gap-2">
                        <li>Kandy</li>
                        <li>Anuradhapura</li>
                        <li>Badulla</li>
                        <li>Colombo</li>
                        <li>Kaluthara</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[--main-color] text-lg font-semibold my-2" >Help</h2>
                    <ul className="flex flex-col gap-2">
                        <li>FAQ</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[--main-color] text-lg font-semibold my-2" >Subscribe to Our Newsletter</h2>
                    <p>Stay updated with the latest listings and rental tips.</p>
                    <form className="m-4">
                        <input className="w-full text-black text-lg px-5 py-2 rounded-full focus:outline-1  focus:outline-[--main-color] valid:outline-1 valid:outline-[--main-color] duration-200" type="email" placeholder="Email Address" />
                        <button className="w-full py-3 my-4 bg-[--second-color] text-[#ddd] hover:bg-[--main-color] rounded-full">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="text-center p-6 text-gray-600">
                <p>© Copyright 2024. Designed and Developed by Abd el Aziz mesbahi {`(abdoumes3539@gmail.com)`}</p>
            </div>
        </div>
    )
}