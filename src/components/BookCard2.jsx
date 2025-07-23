import React from "react"

const BookCard2 = ({book}) => {
  return (
    <div>
        <div className="w-[288px] h-[397px] bg-cover bg-center flex  flex-col justify-center items-center gap-2"  style={{ backgroundImage: `url(${book.image})` }} >
            <p>{book.name}</p>
            <p>{book.type}</p>
            <p>{book.price}</p>
            <button className="uppercase border-2 p-2 ">
                Add to Cart
            </button>
        </div>

    </div>
  )
};

export default BookCard2;
