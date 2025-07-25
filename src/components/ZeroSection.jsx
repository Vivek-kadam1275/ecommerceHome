import React from "react"

const ZeroSection = (props) => {
    return (
        <div>
            <div className=" flex pt-20">
                <div className=" w-1/2 h-[680px]  bg-[url('./images-vivek-kadam/book-scr-bg-img-1-opt.jpg')] bg-cover bg-center relative "  >
                    <img src="./images-vivek-kadam/book-scr-img-1-2-opt.jpg " className="absolute -right-20 top-25" />
                </div>
                <div className="w-1/2 px-32 flex justify-center items-center">
                    <div className="flex flex-col gap-2">
                        <h3 className="w-fittext-[25px] md:text-[30px] lg:text-[36px]  italic text-[#B58352]">World bestsellers</h3>
                        <h1 className="w-fit text-2xl sm:text-[35px] md:text-[45px] lg:text-[55px] leading-none ">Below <span className="text-[#B58352]"> Zero</span><br />
                            Napier Salvador
                        </h1>
                        <p className="w-fit text-[#767676]">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className=" font-semibold flex gap-2 text-sm md:text-lg">
                            <button className="cursor-pointer border px-3 p-2 rounded-3xl uppercase bg-[#23202e] text-white"> view more</button>
                            <button className="cursor-pointer border px-3 p-2 uppercase rounded-3xl">shop now</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className=" flex  ">

                <div className="w-1/2 px-32 flex justify-center items-center">
                    <div className="flex flex-col gap-2 items-end">
                        <h3 className="w-fit    text-[25px] md:text-[30px] lg:text-[36px] italic text-[#B58352]">World bestsellers</h3>
                        <h1 className="w-fit text-2xl sm:text-[35px] md:text-[45px] lg:text-[55px] leading-none ">Below <span className="text-[#B58352]"> Zero</span><br />
                            Napier Salvador
                        </h1>
                        <p className="w-fit text-[#767676]">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                        <div className=" font-semibold flex gap-2 ">
                            <button className="cursor-pointer border px-3 p-2 rounded-3xl uppercase bg-[#23202e] text-white text-sm md:text-lg "> view more</button>
                            <button className="cursor-pointer border px-3 p-2 uppercase rounded-3xl text-sm md:text-lg">shop now</button>
                        </div>
                    </div>
                </div>
                <div className=" w-1/2 h-[680px]  bg-[url('./images-vivek-kadam/book-scr-bg-img-2-opt.jpg')] bg-cover bg-center relative "  >
                    <img src="./images-vivek-kadam/book-scr-img-2-2-opt.jpg.webp " className="absolute -left-20 top-25" />
                </div>
            </div>

        </div>
    )
};

export default ZeroSection;