import React from "react"
import BookCard from "./BookCard";
const books = [
    {
        image: "./images-vivek-kadam/book-product-8-2-opt.jpg ",
        name: "Nulla inte adipiscing",
        type: "Books",
        price: "$329.00",
    },
    {
        image: "./images-vivek-kadam/book-product-7-2-opt.jpg",
        name: "Fusce placerat etiam",
        type: "Books",
        price: "$319.00",
    },
    {
        image: "./images-vivek-kadam/book-product-4-2-opt.jpg",
        name: "Retra sagittis vivamus",
        type: "Books",
        price: "$3289.00",
    },
 


]
const MaurisSecondSection = (props) => {
    return (
        <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-4  mt-20">

            <p className="italic leading-none text-[36px] text-[#767676] ">
                Mauris aliquet
            </p>
            <h1 className="leading-none text-[42px] ">Coming Soon</h1>
            <p className="text-[14px] text-[#767676]">There are many variations of passages of lorem ipsum available.</p>
           
            <div className="w-full flex flex-wrap md:justify-between justify-center">
                {books.map((book, id) => {
                    return (
                        <BookCard book={book} key={id} />
                    );
                })}
            </div>
        </div>
    )
};

export default MaurisSecondSection;
