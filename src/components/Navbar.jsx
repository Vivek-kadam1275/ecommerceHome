import React, { useEffect } from "react"
import woodLogo from '../assets/wood-logo-dark.svg';
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = (props) => {
    useEffect(()=>{
        console.log(window.innerWidth)
    },[]);
    return (
        <div className="  lg:h-20 flex justify-center    border-b border-b-gray-200">

            <div className="flex  lg:w-[1400px] h-full  items-center justify-between    ">
                <div className="w-[75%] flex uppercase justify-between border-r  border-r-gray-200  h-full items-center text-[13px] lg:pr-8">
                    <div className="uppercase flex gap-3 flex-wrap  lg:w-[53%] lg:h-[40px]  ">
                        <span className="flex items-center">Home <MdOutlineKeyboardArrowDown />
                        </span >
                        <span className="flex items-center">shop <MdOutlineKeyboardArrowDown />
                        </span>
                        <span className="flex items-center">blog<MdOutlineKeyboardArrowDown />
                        </span>
                        <span className="flex items-center">Pages<MdOutlineKeyboardArrowDown />
                        </span>
                        <span className="flex items-center">Elements<MdOutlineKeyboardArrowDown />
                        </span>
                        <span className="flex items-center" >Buy 
                        </span>
                    </div>
                    <img src="./images-vivek-kadam/wood-logo-dark.svg" className="h-8 w-[210px]" />
                    <div className="flex gap-3 lg:max-w-[362px] lg:min-w-[100px]  justify-end flex-wrap">
                        <span>faqs</span>
                        <span>contact us</span>
                    </div>
                </div>
                 
                <div className="flex lg:w-[20%] lg:min-w-[280px]  gap-4  flex-wrap">
                        <GoPerson className="w-7 h-7" />
                        <CiSearch className="w-7 h-7" />
                        <CiHeart className="w-7 h-7" />
                        <div className="flex gap-2">
                            <PiShoppingCartSimple className="w-7 h-7" />
                            <span className="flex items-center">0 /<LiaDollarSignSolid />0.00
                            </span>
                        </div>

                </div>

                 

            </div>


        </div>
    )
};

export default Navbar;
