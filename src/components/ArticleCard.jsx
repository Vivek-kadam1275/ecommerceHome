import React from "react"
import { RxShare1 } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";

const ArticleCard = ({ article }) => {
    return (
        

        <div
            className="group w-[404px] h-[416px] relative text-white flex flex-col flex-wrap cursor-pointer  
             after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1/2 
             after:bg-gradient-to-t after:from-black after:to-transparent after:z-0 overflow-hidden "

        >
            <img src={article.image} alt="" className="absolute -z-10 group-hover:scale-105 transition-all duration-300" />
            <div className="absolute top-2 left-2 z-10">
                <p className="flex flex-col  px-4 py-1 bg-white text-black">
                    <span>23</span>
                    <span>JUL</span>
                </p>
            </div>

            <div className="h-1/2 w-full"></div>

            <div className="h-1/2 w-full flex flex-col justify-end items-center gap-4 pb-4 relative z-10">
                <p className="w-fit text-[11.2px] py-1 px-2 bg-[#ae7d5e]">{article.type}</p>
                <p className="w-fit text-[22px]">{article.title}</p>
                <p className="flex items-center w-fit gap-1 text-[#9f9f9f] text-[17px]">
                    <span>Posted by</span>
                    <img src="./images-vivek-kadam/avatar-home.jpg.webp" alt="" />
                    <span>{article.postedBy}</span>
                    <RxShare1 />
                    <FaRegMessage />
                </p>
            </div>
        </div>

    )
};

export default ArticleCard;
