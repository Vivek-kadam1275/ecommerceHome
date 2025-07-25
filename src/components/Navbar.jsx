import React, { useEffect, useState } from "react"
 import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="   lg:h-20 lg:flex lg:justify-center lg:items-center   border-b border-b-gray-200 ">
            {/* larger screen menubar */}
            <div className="lg:flex  lg:w-[90%] lg:max-w-[1400px] h-full  items-center justify-between    hidden">
                <div className="w-[75%] flex uppercase justify-between border-r  border-r-gray-200  h-full items-center text-[13px] lg:pr-8">
                    <div className="uppercase flex gap-3 flex-wrap  lg:w-[53%] lg:h-[40px]  ">
                        <Link to="#" className="flex items-center">Home <MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" />
                        </Link >
                        <Link to="#" className="flex items-center">shop <MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" />
                        </Link >
                        <Link to="#" className="flex items-center">blog<MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" />
                        </Link >
                       <Link to="#" className="flex items-center">Pages<MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" />
                       </Link >
                        <Link to="#" className="flex items-center">Elements<MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" />
                        </Link >
                        <Link to="#" className="flex items-center" >Buy
                        </Link >
                    </div>
                    <Link to="/">
                        <img src="./images-vivek-kadam/wood-logo-dark.svg" className="h-8 w-[210px]" />
                    </Link>

                    <div className="flex gap-3 lg:max-w-[362px] lg:min-w-[100px]  justify-end flex-wrap">
                        <Link to="#">faqs</Link >
                        <Link to="#" className="flex items-center">contact us <MdOutlineKeyboardArrowDown className="text-md text-[#b8cde6]" /></Link >
                    </div>
                </div>

                <div className="flex lg:w-[25%] lg:min-w-[240px]  gap-4   items-center">
                    <GoPerson className="w-7 h-7 cursor-pointer" />
                    <CiSearch className="w-7 h-7 cursor-pointer" />
                    <CiHeart className="w-7 h-7 cursor-pointer" />
                    <div className="flex gap-2 items-center ">
                        <PiShoppingCartSimple className="w-7 h-7 cursor-pointer" />
                        <span className="flex items-center justify-center ">0 /<LiaDollarSignSolid />0.00
                        </span>
                    </div>

                </div>



            </div>

            {/*  smaller screen menubar */}
            <div className="  xs:flex  lg:hidden   w-full relative ">
                <div className="w-screen flex items-center justify-between pr-2">
                    <button className="    ml-2 my-4" onClick={() => setIsMenuOpen(true)}>
                        <RxHamburgerMenu className="w-6 h-6" />
                    </button>
                    <img src="./images-vivek-kadam/wood-logo-dark.svg" className="h-8 w-[210px]" />
                    <div className="flex gap-3">
                        <CiHeart className="w-7 h-7" />
                        <PiShoppingCartSimple className="w-7 h-7 stroke-[0.5]" />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute w-[60%] right-0 z-20  h-screen bg-black/30 transition-all duration-300"

                        onClick={() => setIsMenuOpen(false)}>

                    </div>
                )}
                {isMenuOpen && (

                    <div className="fixed -top-4  left-0 w-[40%] h-full bg-white z-50 flex flex-col p-6 transition-all duration-300 gap-3">
                        {/* <div className="flex justify-between items-center mb-4">
                            <img src="./images-vivek-kadam/wood-logo-dark.svg" className="h-8" />
                             
                        </div> */}
                        <div className="flex w-full border-b py-3 flex-wrap">
                            <div className="w-1/2 text-center  bg-[#e8e8e8] p-2 cursor-pointer">Menu</div>

                            <div className="w-1/2 text-center bg-[#f5f5f5] p-2 cursor-pointer">Categories</div>
                        </div>
                        <div className="flex flex-col gap-5 text-[16px] uppercase font-medium">
                            {["Home", "Demos", "Shop", "Blog", "Portfolio", "Pages", "Wishlist", "Login / Register"].map((item, index) => (
                                <span key={index} className="border-b border-b-[#e8e8e8]  pb-2 cursor-pointer">{item}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};

export default Navbar;
