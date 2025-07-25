import React from "react"
import { FaRegMessage } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const InstaSection = (props) => {
    const images = [
        {
            image: "./images-vivek-kadam/wd-inst-books-2-430x430.jpg.webp",
            likes: "2605",
            comments: "689",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-11-430x430.jpg.webp",
            likes: "6645",
            comments: "743",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-10-430x430.jpg.webp",
            likes: "1917",
            comments: "743",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-9-430x430.jpg.webp",
            likes: "1917",
            comments: "837",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-8-430x430.jpg.webp",
            likes: "9421",
            comments: "148",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-7-430x430.jpg.webp",
            likes: "8496",
            comments: "516",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-6-430x430.jpg.webp",
            likes: "9671",
            comments: "661",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-5.jpg.webp",
            likes: "3945",
            comments: "347",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-4.jpg.webp",
            likes: "5791",
            comments: "800",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-12.jpg.webp",
            likes: "8062",
            comments: "795",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-3.jpg.webp",
            likes: "5927",
            comments: "513",

        },
        {
            image: "./images-vivek-kadam/wd-inst-books-1.jpg.webp",
            likes: "6777",
            comments: "717",

        },










    ]
    return (
        <div className="flex  flex-wrap  lg:w-screen mt-20 relative h-auto">
            {images.map((image, index) => {
                return (<div key={index} className="cursor-pointer group relative md:w-1/4 lg:w-1/6 lg:h-1/6 sm:w-1/2 sm:h-1/2">

                    <img src={image.image} alt="" className=" " />
                    <div className="absolute top-0 left-0 bottom-0 right-0 z-20 group-hover:bg-black/40 "> </div>
                    <div className="absolute bottom-2 w-[80%] hidden group-hover:flex z-40 text-white justify-between mx-4">
                        <p className="flex items-center gap-2"><CiHeart className="w-7 h-7" /><span>{image.likes}</span></p>
                        <p className="flex items-center gap-2"><FaRegMessage /> <span>{image.comments}</span></p>
                    </div>
                </div>)
            })}

            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center ">

                <div className="w-[300px] h-[219px] bg-white flex flex-col items-center justify-center gap-2  ">
                    <h1 className="w-fit text-[#242424] text-[18px]">INSTAGRAM</h1>
                    <p className="w-fit text-[#c4c4c4] text-[12px]">@WOOD_BOOKS</p>
                    <p className="max-w-[240px] text-center text-[#7d7d7d] text-[14px] ">
                        Porttitor adipiscing a velmus lacinia parturient adipiscing lobortis vestibulum lacinia class.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default InstaSection;
