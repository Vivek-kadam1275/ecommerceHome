import React from "react"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbArrowsShuffle } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-col items-center md:w-1/4 sm:1/2">

      <div className="relative group cursor-pointer w-[283px] h-[323px]">
        <img src={book.image} className="" />
        <div className=" absolute opacity-0 group-hover:opacity-100 bottom-0 w-full     group/cart  ">
           
            <span className=" group-hover/cart:hidden font-semibold text-white py-2  
            bg-[#c6a07d] text-center block w-full">Add to cart</span>
            <span className=" hidden   py-2  
            bg-[#c6a07d] w-full group-hover/cart:flex justify-center">
              <PiShoppingCartSimple className="w-7 h-7 text-white" />
            </span>
          
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 top-2 right-2 flex flex-col p-4 bg-white gap-4">
          <span>
            <TbArrowsShuffle className="w-7 h-7 stroke-[1.1]" />

          </span>
          <span> <CiSearch className="w-7 h-7" />
          </span>
          <span><CiHeart className="w-7 h-7" /></span>
        </div>
      </div>
      <p className="w-fit text-[#333333] text-[14px]">{book.name}</p>
      <p className="w-fit text-[#A5A5A5] text-[13.3px]">{book.type}</p>
      <p className="w-fit text-[#bb8d60] font-semibold">{book.price}</p>
    </div>
  )
};

export default BookCard;
