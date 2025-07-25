import React from "react"

const TypewriterSection = (props) => {
    return (
        <div className="max-w-[1192px] mx-auto pt-20 md:flex flex flex-col md:flex-row justify-center items-center  gap-4">

            <div className=" w-[80%] overflow-hidden flex ">
                <img src="./images-vivek-kadam/book-typewriter-img-left.png" alt="" className="w-1/2" />

                <div className=" bg-[#000000] w-1/2 text-white relative overflow-hidden -z-20 flex flex-col justify-center  px-8">
                    <img src="./images-vivek-kadam/book-quotes-2.svg" alt="" className="absolute w-fit    object-contain  pointer-events-none -z-10 right-0 top-30" />
                    <div className="flex flex-col relative z-10 gap-4  ">
                        <p className="text-[#bfbfbf] text-[18px]">BECOME OUR PARTNER</p>
                        <p className="text-[40px] leading-none">Self-<span className="text-[#b58352]">Publishing</span> <br /> And Book Printing</p>
                        <p className="text-[#bdbdbf]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even.</p>

                        <p className="uppercase  cursor-pointer underline  underline-offset-4 decoration-2 decoration-[#bdbdbf] ">read more</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-[20%] gap-4 ">

                 
                    <img src="./images-vivek-kadam/book-typewriter-right-1-opt.jpg.webp" alt="" className=""/>
                    <img src="./images-vivek-kadam/book-typewriter-right-2-opt.jpg.webp" alt="" />
                

            </div>

        </div>
    )
};

export default TypewriterSection;
