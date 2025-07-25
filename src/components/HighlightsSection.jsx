import { useState, useEffect } from "react";
import { FaBook, FaUndo, FaCalendarAlt, FaTabletAlt } from "react-icons/fa";



const features = [
    {
        image: "./images-vivek-kadam/book-pencil-svg.svg",
        title: "TextBooks",
        desc: "The point of using lorem ipsum is that it has a more-or-less normal.",
    },
    {
        image: "./images-vivek-kadam/book-book-svg.svg",
        title: "EasyReturns",
        desc: "Predefined chunks as necessary, making this the first true generator.",
    },
    {
        image: "./images-vivek-kadam/book-books-svg.svg",
        title: "BookFairs",
        desc: "Contrary to popular belief, lorem ipsum is not simply random text.",
    },
    {
        image: "./images-vivek-kadam/book-laptop-svg.svg",
        title: "E-Reading",
        desc: "Making this the first true generator on the Internet. It uses a dictionary.",
    },
];

const features2 = [


    {
        bg: "/images-vivek-kadam/book-category-img-1-opt.jpg",
        title: "writing",
        thought: ["Self-Publishing", "And Book Printing"],
        desc: "There are many variations of passages of lorem ipsum available, but the majority."

    },
    {
        bg: "/images-vivek-kadam/book-category-img-2-opt.jpg",
        title: "COLLECTING",
        thought: ["New, Rare And", "Out-of-Print Books"],
        desc: "When an unknown printer took a galley of type and scrambled it to make a type."

    },
    {
        bg: "/images-vivek-kadam/book-category-img-3-opt.jpg",
        title: "COMMUNITY",
        thought: ["Where Books", "And People Meet"],
        desc: "Many desktop publishing packages and web page editors now use lorem ipsum as their."

    },
]

export default function HighlightsSection() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    // const nextSlide = () => {
    //     setFade(true);
    //     setTimeout(() => {
    //         setCurrent((prev) => (prev + 1) % slides.length);
    //         setFade(false);
    //     }, 400);
    // };



    return (
        <div className="max-w-[1192px] w-10/12 mx-auto  py-10 bg-white flex flex-col items-center gap-12">




            <div className="w-full       flex flex-wrap justify-between px-4">
                {features.map((feat, index) => (
                    <div
                        key={index}
                        className="flex "
                    >
                        <div className="flex flex-col items-center min-w-[230px] max-w-[305px] h-[215.6px]   text-[14px]  px-[23px] gap-[8px]   transition-all duration-300 justify-center">
                            <div className="rounded-full bg-[#f3f4f6]  w-[96px] h-[96px] flex items-center justify-center">
                                <img src={feat.image} className=" w-[40px] h-[40px]     " />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 w-fit">{feat.title}</h3>
                            <p className="text-gray-600 text-sm text-center w-[219px]">{feat.desc}</p>
                            <p className="uppercase underline  underline-offset-4 decoration-2 decoration-[#b58352] cursor-pointer">read more</p>

                        </div>
                        {index <= 2 ? <div className="h-full w-[1px] bg-[#efefef]"></div> : <div className=""></div>}
                    </div>
                ))}
            </div>

            <div className="w-[1192px]  flex flex-wrap px-4 justify-between gap-1 ">

                {features2.map((feat, index) => {


                    return (
                        <div className="w-[370px] h-[500px] overflow-hidden" key={index}>
                            <div className={`group bg-cover bg-center p-6 w-[370px] h-[500px] cursor-pointer  relative`}>
                                <img
                                    src={feat.bg}
                                    alt=""
                                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110  "
                                />
                                <div key={index} className=" flex  flex-col items-center w-full h-full text-center justify-center px-4 gap-4 border  bg-white/80 backdrop-blur-[2px] ">
                                    <p className="text-[#af7f61] uppercase font-bold">{feat.title} </p>
                                    <p className="font-semibold text-2xl text-center">
                                        {feat.thought.map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                    <p className="text-[14px] text-[#767676]">{feat.desc}</p>
                                    <p className="uppercase underline  underline-offset-4 decoration-2 decoration-[#b58352] cursor-pointer">read more</p>

                                </div>
                            </div>


                        </div>
                    )

                })}
            </div>


        </div>
    );
}
