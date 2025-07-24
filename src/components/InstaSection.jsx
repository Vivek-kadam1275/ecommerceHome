import React from "react"

const InstaSection = (props) => {
    const images = [
        "./images-vivek-kadam/wd-inst-books-2-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-11-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-10-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-9-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-8-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-7-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-6-430x430.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-5.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-4.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-12.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-3.jpg.webp",
        "./images-vivek-kadam/wd-inst-books-1.jpg.webp",
    ]
    return (
        <div className="flex flex-wrap  w-screen mt-20 relative">
            {images.map((image, id) => {
                return (<div key={id}>

                    <img src={image} alt="" className="w-[256px] h-[256px]" />
                </div>)
            })}

            <div className="w-[300px] h-[219px] bg-white flex flex-col items-center justify-center gap-2 absolute top-[29%] left-[40%] ">
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
