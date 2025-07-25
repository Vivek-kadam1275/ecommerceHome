import React from "react"
import BookCard2 from "./BookCard2";

const books=[
    {
        image:"./images-vivek-kadam/book-3-1-opt.jpg.webp",
        name:"Hendrerit nullam sceleris",
        type:"Literature",
        price:"$279.00",

    },
     {
        image:"./images-vivek-kadam/book-7-opt.jpg.webp",
         name:"Sagittis parturient urna",
        type:"Literature",
        price:"$289.00",

    },
     {
        image:"./images-vivek-kadam/book-5-opt.jpg.webp",
         name:"Lectus adipis primis",
        type:"Literature",
        price:"$299.00",

    },
     {
        image:"./images-vivek-kadam/book-6-opt.jpg.webp",
         name:"Netus nascetur enim",
        type:"Literature",
        price:"$309.00",

    },
     {
        image:"./images-vivek-kadam/book-4-opt.jpg.webp",
         name:"Turpis quam suspend",
        type:"Literature",
        price:"$319.00",

    },
] 
const SecondBooksSection = (props) => {
  return (
    <div className="   flex justify-between items-center pt-20 text-white">

         {books.map((book,id)=>{
                return(<BookCard2 key={id} book={book}/>)
         })}
      
    </div>
  )
};

 
export default SecondBooksSection;
