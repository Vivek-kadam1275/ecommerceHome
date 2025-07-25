import React from "react"

const FooterSection2 = (props) => {
    return (
        <footer className=" ">
            <div className="w-full h-[1px] bg-[#e4e4e4]"></div>
            <div className="lg:max-w-[1192px]  mx-auto flex flex-col md:flex-row justify-between items-center py-4">
                <p className="text-center"><span className="font-semibold">WOODMART</span> <span className="text-[#767676]">© 2025 CREATED BY</span><span className="text-1xl text-red-600"> X</span><span className="font-semibold">TEMOS STUDIO</span><span className="text-[#767676]">. PREMIUM E-COMMERCE SOLUTIONS.</span>. </p>
                <img src="./images-vivek-kadam/payment.png.webp" alt="" />
            </div>
        </footer>
    )
};

export default FooterSection2;
