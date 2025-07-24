import React from "react"
import ArticleCard from "./ArticleCard";

const articles = [
    {
        image: "./images-vivek-kadam/book-blog-img-1-1-opt.jpg.webp",
        type: "DESIGN TRENDS, INSPIRATION",
        title: "Reinterprets the classic bookshelf",
        postedBy: "S. Rogers",
    },
    {
        image: "./images-vivek-kadam/book-blog-img-2-1-opt.jpg.webp",
        type: "DESIGN TRENDS, FURNITURE",
        title: "Minimalist design furniture 2024",
        postedBy: "S. Rogers",
    },
    {
        image: "./images-vivek-kadam/book-blog-img-3-1-opt.jpg.webp",
        type: "DESIGN TRENDS, HAND MADE",
        title: "Green interior design inspiration",
        postedBy: "S. Rogers",
    },

]
const CommodoSection = (props) => {
    return (
        <div className="max-w-[1192px] mx-auto pt-20">

            <div className="flex flex-col gap-4 items-center">
                <p className="italic text-[#b58352] text-[36px] w-fit"> Commodo integer</p>
                <p className="text-2xl text-[42px] w-fit">Latest Articles
                </p>
                <p className="text-[#767676] w-fit">
                    There are many variations of passages of lorem ipsum available.
                </p>
            </div>
            <div className="flex gap-6 mt-4">
                {articles.map((article, id) => {
                    return (
                        <ArticleCard key={id} article={article} />
                    )
                })}

            </div>
        </div>
    )
};

export default CommodoSection;

