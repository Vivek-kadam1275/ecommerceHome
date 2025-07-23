import React from "react"

const BookCard = ({book}) => {
  return (
    <div className="flex flex-col items-center">
        
        <img src={book.image} className="w-[283px] h-[323px]"/>
        <p className="w-fit text-[#333333] text-[14px]">{book.name}</p>
        <p className="w-fit text-[#A5A5A5] text-[13.3px]">{book.type}</p>
        <p className="w-fit text-[#bb8d60] font-semibold">{book.price}</p>
    </div>
  )
};

export default BookCard;
