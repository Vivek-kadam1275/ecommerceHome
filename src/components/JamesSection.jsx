import React from "react"

const JamesSection = (props) => {
    return (
        <div className="max-w-[1192px] max-h-[513.8px] mx-auto px-4 py-8 flex">
            <img src="./images-vivek-kadam/book-james-brown-img.png.webp" className="w-[479px] h-[474px] px-[15px]" />
            <div className="max-w-[712.825px] flex  items-center px-[50px] ">

                <div  className="flex flex-col gap-5">
                    <h1 className="text-4xl max-w-[600px] leading-tight">“It is during our darkest moments that we must focus to see the light.”</h1>
                    <h3 className="italic ">-James Brown “70 years of my history”</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly.</p>
                    <div className=" font-semibold flex gap-2">
                        <button className="cursor-pointer border px-3 p-2 rounded-3xl uppercase bg-[#23202e] text-white"> view more</button>
                        <button className="cursor-pointer border px-3 p-2 uppercase rounded-3xl">shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JamesSection;
