import React from "react"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { TbArrowsShuffle } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";

const BookCard2 = ({ book }) => {
  return (
    <div>
      <div className="group w-[288px] h-[397px] bg-cover bg-center  cursor-pointer " style={{ backgroundImage: `url(${book.image})` }} >
        <div className=" w-full h-full hover:bg-black/40    flex items-center justify-center relative">
          <div className="hidden  group-hover:flex  flex-col justify-center items-center gap-2 cursor-grab">
            <p>{book.name}</p>
            <p>{book.type}</p>
            <p>{book.price}</p>
            <div className="group/cart w-full flex justify-center items-center  border-2">
              <button className="uppercase p-2 group-hover/cart:hidden">
                Add to Cart
              </button>
              <button className="uppercase   p-2 hidden group-hover/cart:inline-block">
                <PiShoppingCartSimple className="w-7 h-7 text-white" />
              </button>

            </div>
          </div>
          <div className="absolute opacity-0 group-hover:opacity-100 top-2 right-2">
            <span>
              <TbArrowsShuffle className="w-7 h-7 stroke-[1.1]" />

            </span>
            <span> <CiSearch className="w-7 h-7" />
            </span>
            <span><CiHeart className="w-7 h-7" /></span>
          </div>
        </div>
      </div>

    </div>
  )
};

export default BookCard2;
