import React from "react"

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
        <div className="flex flex-wrap  w-screen mt-20 relative">
            {images.map((image, index) => {
                return (<div key={index} className="cursor-pointer group relative">

                    <img src={image.image} alt="" className="w-[256px] h-[256px] " />
                    <div className="absolute top-0 left-0 bottom-0 right-0 z-20 group-hover:bg-black/40 "> </div>
                    <div className="absolute bottom-2 w-[80%] hidden group-hover:flex z-40 text-white justify-between mx-4">
                        <p>{image.likes}</p>
                        <p>{image.comments}</p>
                    </div>
                </div>)
            })}

            <div className="w-[300px] h-[219px] bg-white flex flex-col items-center justify-center gap-2 absolute top-[29%] left-[40%] z-40">
                <h1 className="w-fit text-[#242424] text-[18px]">INSTAGRAM</h1>
                <p className="w-fit text-[#c4c4c4] text-[12px]">@WOOD_BOOKS</p>
                <p className="max-w-[240px] text-center text-[#7d7d7d] text-[14px] ">
                    Porttitor adipiscing a velmus lacinia parturient adipiscing lobortis vestibulum lacinia class.
                </p>
            </div>
        </div>
    )
};

export default InstaSection;
