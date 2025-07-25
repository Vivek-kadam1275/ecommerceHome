import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Venice Guide Mr. Segre Ramelli",
    subtitle: "World Bestsellers",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
    image: "/images-vivek-kadam/book-slider-s1-img.png.jpg",
    bg: "/images-vivek-kadam/book-bg-slider-1.jpg",
  },
  {
    title: "Escape Book Charles Fredrick",
    subtitle: "World Bestsellers",
    description:
      "Escape into the mystery and thrill of adventures with Charles Fredrick’s bestseller book series.",
    image: "/images-vivek-kadam/book-slider-s3-img.png.jpg",
    bg: "/images-vivek-kadam/book-bg-slider-2.jpg",
  },
  {
    title: "Simply Elegant Humbert Jemmy",
    subtitle: "World Bestsellers",
    description:
      "A refined collection of writing and visual storytelling by Humbert Jemmy that is truly elegant.",
    image: "/images-vivek-kadam/book-slider-s2-img.png.jpg",
    bg: "/images-vivek-kadam/book-bg-slider-3.jpg",
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToSlide = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setAnimating(false);
    }, 4000);
  };

  return (
    <section className="group relative  mx-auto   lg:mt-0 w-full h-[90vh] bg-white overflow-hidden flex items-center justify-center px-6 sm:px-12 bg-cover bg-center " style={{ backgroundImage: `url(${slides[current].bg})` }}>

      <button
        onClick={() => goToSlide("prev")}
        className="absolute left-4 z-10 bg-white/80 hover:bg-white/100  p-3 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => goToSlide("next")}
        className="absolute right-4 z-10 bg-white/80 hover:bg-white/100   p-3 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <FaChevronRight />
      </button>


      <div className="flex items-center justify-between w-full max-w-[1192px] h-full gap-6 " >

        <div className="w-1/2 flex items-center justify-center h-full transition-all duration-500 ease-in-out">
          <img
            key={slides[current].image}
            src={slides[current].image}
            alt="Book"
            className={`max-h-[80%] w-auto object-contain shadow-lg rounded transition-all duration-500 ease-in-out ${animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
          />
        </div>

        <div
          key={slides[current].title}
          className={`w-1/2 space-y-5 transition-all duration-500 ease-in-out ${animating
            ? "opacity-0 translate-y-6"
            : "opacity-100 translate-y-0"
            }`}
        >
          <p className="text-sm uppercase text-gray-500 tracking-widest">
            {slides[current].subtitle}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
            {slides[current].title}
          </h2>
          <p className="text-gray-600">{slides[current].description}</p>
          <div className="flex gap-4 mt-4 text-[10px] md:text-[12px] sm:text-sm">
            <button className="cursor-pointer px-6 py-2 bg-orange-400 text-white rounded-md  sm:rounded-full hover:bg-orange-500 ">
              Add to Cart
            </button>
            <button className="cursor-pointer px-6 py-2 border border-gray-800 text-gray-800 rounded-md  sm:rounded-full hover:bg-gray-100">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
