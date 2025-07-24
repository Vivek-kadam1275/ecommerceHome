import React from "react"
import woodLogo from '../assets/wood-logo-dark.svg';
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { LiaDollarSignSolid } from "react-icons/lia";

const Navbar = (props) => {
    return (
        <div className="  lg:h-20 flex justify-center w-screen  border-b border-b-gray-200">

            <div className="flex w-11/12 h-full     items-center     ">
                <div className="w-9/12 flex uppercase justify-between border-r  border-r-gray-200 px-5 h-full items-center">
                    <div className="uppercase flex gap-3 mx-2">
                        <span >Home</span>
                        <span  >shop</span>
                        <span  >blog</span>
                        <span>Pages</span>
                        <span>Elements</span>
                        <span>Buy</span>
                    </div>
                    <img src="./images-vivek-kadam/wood-logo-dark.svg" className="h-8" />
                    <div className="flex gap-3">
                        <span>faqs</span>
                        <span>contact us</span>
                    </div>
                </div>
                <div className="w-3/12  px-5">
                    <div className="flex w-10/12 justify-around mx-auto">
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


        </div>
    )
};

export default Navbar;
