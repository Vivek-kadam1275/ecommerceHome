import React from "react"
import { MdMailOutline } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { BsCursorFill } from "react-icons/bs";

const FooterSection1 = (props) => {
    return (
        <footer class="bg-white w-[1192px] mx-auto mt-20">
            <div class="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between text-sm">

                <div className="flex gap-3 flex-wrap">
                    <div class="w-full sm:w-[306px] h-[226px] space-y-4">
                        <div class="text-2xl font-bold flex items-center gap-2">
                            <img src="./images-vivek-kadam/wood-logo-dark.svg" alt="" />
                        </div>
                        <p class="text-gray-600">
                            Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.
                        </p>
                        <ul class="space-y-2 text-gray-600">
                            <li class="flex items-start gap-2">
                                <BsCursorFill />
                                <span>451 Wall Street, UK, London</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <MdPhoneAndroid />
                                <span>Phone: (064) 332-1233</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <MdMailOutline />Fax: <span>(099) 453-1357</span>
                            </li>
                        </ul>
                    </div>


                    <div class="w-full sm:w-[276px] h-[207px] space-y-4">
                        <h4 class="font-semibold text-lg">Recent Posts</h4>
                        <div class="flex gap-3  border-b-1 border-b-gray-200 pb-3">
                            <img src="./images-vivek-kadam/blog-11-75x65.jpg" class="w-16 h-16 object-cover" alt="" />
                            <div className="flex flex-col gap-1">
                                <p class="text-sm font-medium">A companion for extra sleeping</p>
                                <p class="text-xs text-gray-500">July 23, 2016 · 1 Comment</p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <img src="./images-vivek-kadam/blog-12-75x65.jpg" class="w-16 h-16 object-cover" alt="" />
                            <div className="flex flex-col gap-1">
                                <p class="text-sm font-medium">Outdoor seating collection inspiration</p>
                                <p class="text-xs text-gray-500">July 23, 2016 · 1 Comment</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="w-full sm:w-[174px] h-[235px] space-y-4">
                    <h4 class="font-semibold text-lg">Our Stores</h4>
                    <ul class="space-y-1 text-gray-600">
                        <li>New York</li>
                        <li>London SF</li>
                        <li>Edinburgh</li>
                        <li>Los Angeles</li>
                        <li>Chicago</li>
                        <li>Las Vegas</li>
                    </ul>
                </div>

                <div class="w-full sm:w-[174px] h-[235px] space-y-4">
                    <h4 class="font-semibold text-lg">Useful Links</h4>
                    <ul class="space-y-1 text-gray-600">
                        <li>Privacy Policy</li>
                        <li>Returns</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                        <li>Latest News</li>
                        <li>Our Sitemap</li>
                    </ul>
                </div>

                <div class="w-full sm:w-[174px] h-[235px] space-y-4">
                    <h4 class="font-semibold text-lg">Footer Menu</h4>
                    <ul class="space-y-1 text-gray-600">
                        <li>Instagram profile</li>
                        <li>New Collection</li>
                        <li>Woman Dress</li>
                        <li>Contact Us</li>
                        <li>Latest News</li>
                        <li><em>Purchase Theme</em></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};

export default FooterSection1;
