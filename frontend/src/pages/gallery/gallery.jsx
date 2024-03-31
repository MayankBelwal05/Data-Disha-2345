// import { useEffect, useState } from "react";
import img1 from "../../assets/galleryimage/img1.jpg";
import img2 from "../../assets/galleryimage/img2.jpg";
import img3 from "../../assets/galleryimage/img3.jpg";
import img4 from "../../assets/galleryimage/img4.jpg";
import img5 from "../../assets/galleryimage/img5.jpg";
import img6 from "../../assets/galleryimage/img6.jpg";
// import { FaClock } from 'react-icons/fa';

const Gallery = () => {
    // const [currentTime, setCurrentTime] = useState(new Date());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentTime(new Date());
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-2 lg:mb-16">
            <div className="my-5"><h1 className="text-3xl lg:text-5xl font-bold text-black-300">IMAGE GALLERY</h1></div>
            {/* <div className="clock">
                <FaClock />
                {currentTime.toLocaleTimeString()}
            </div> */}

            <div className="my-5"><h1 className="text-2xl lg:text-2xl  text-slate-500">For InnovateSphere - Tech & Beyond Summit</h1></div>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-2 md:p-4 hover:transform hover:scale-110 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img1} />
                    </div>
                    <div className="w-1/2 p-2 md:p-4 hover:transform hover:scale-110 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img2} />
                    </div>
                    <div className="w-full p-1 md:p-2 hover:transform hover:scale-105 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img3} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2 hover:transform hover:scale-105 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img4} />
                    </div>
                    <div className="w-1/2 p-2 md:p-4 hover:transform hover:scale-110 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img5} />
                    </div>
                    <div className="w-1/2 p-2 md:p-4 hover:transform hover:scale-110 transition-transform duration-300">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={img6} />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Gallery;
