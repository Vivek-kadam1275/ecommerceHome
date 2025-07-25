import React from "react"
import BookCard from "./BookCard";

const books=[
    {image:"./images-vivek-kadam/book-product-3-opt.jpg.webp",
     name:"Cubilia mi accumsan",
     type:"Books",
     price:"$299.00",
    },
     {image:"./images-vivek-kadam/book-product-2-opt.jpg.webp",
     name:"Feugiat curae nostra",
     type:"Books",
     price:"$349.00",
    },
     {image:"./images-vivek-kadam/book-product-7-opt.jpg.webp",
     name:"Senec metus convallis",
     type:"Books",
     price:"$359.00",
    },
     {image:"./images-vivek-kadam/book-product-4-opt.jpg.webp",
     name:"Consectetur mus males",
     type:"Books",
     price:"$269.00",
    },
     {image:"./images-vivek-kadam/book-product-1-opt.jpg.webp",
     name:"Cursus ridiculus hac",
     type:"Books",
     price:"$339.00",
    },
     {image:"./images-vivek-kadam/book-product-6-opt.jpg.webp",
     name:"Fusce purus aliquam",
     type:"Books",
     price:"$259.00",
    },
     {image:"./images-vivek-kadam/book-product-9-opt.jpg.webp",
     name:"Justo mauris dictumst",
     type:"Books",
     price:"$269.00",
    },
     {image:"./images-vivek-kadam/book-product-8-opt.jpg.webp",
     name:"Imperdiet vivamus",
     type:"Books",
     price:"$309.00",
    },
     

]
const MaurisSection = (props) => {
    return (
        <div className="max-w-[1192px] mx-auto flex flex-col items-center gap-4  mt-20">

            <p className="italic leading-none text-[36px] text-[#767676] ">
                Mauris blandit aliquet
            </p>
            <h1 className="leading-none text-[42px] ">Featured Releases</h1>
            <p className="text-[14px] text-[#767676]">There are many variations of passages of lorem ipsum available.</p>
            <div className="text-[16px] text-[#767676] flex gap-8">
                <button className="uppercase  underline  underline-offset-4 decoration-2 decoration-[#b58352] cursor-pointer">Biography</button>
                <button className="uppercase  hover:underline underline-offset-4 decoration-2 decoration-[#b58352] transition-all duration-700">Fantansy</button>
                <button className="uppercase  hover:underline underline-offset-4 decoration-2 decoration-[#b58352] transition-all duration-700">History</button>
            </div>
            <div className="w-full flex flex-wrap sm:justify-center">
              {books.map((book,id)=>{
                return(
                    <BookCard book={book} key={id}/> 
                );
              })}
            </div>
        </div>
    )
};

export default MaurisSection;
