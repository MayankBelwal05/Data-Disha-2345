import NewsLetter from "./NewsLetter";
import MagicBanner from "./magicBanner/MagicBanner";
import organizer from '../assets/organizer.jpg';
import { Link } from "react-router-dom";
import Gallery from "./gallery/gallery";



const Home = () => {
  return (
    <div>
      <MagicBanner></MagicBanner>
 {/* //organizer */}


 <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 border-4 bg-gray-200">
        <div className=' py-16 border-4'>

          <div className='flex flex-col md:flex-row md:gap-10 items-center'>
            <div className='flex-1'>
              <img className='rounded-md' src={organizer} alt="" />
            </div>
            <div className='flex-1 bg-white md:-ml-20 p-12 rounded-md'>
              <h2 className='text-2xl text-dark_01 md:text-5xl font-semibold'>Host Your Event with Us</h2>
              <p className=' my-4 text-justify text-black'>
                Dream Craft Events: Where your vision meets perfection. From corporate conferences to intimate gatherings, we specialize in flawless event management. With our expertise, let us handle the stress while you enjoy every moment. Contact us today and let&apos;s create magic together.
              </p>
              <Link to='booking'>
                <button className="bg-rose-700  px-6 py-3 rounded-md text-white uppercase">
                  Request Organizer
                </button>


              </Link>
            </div>
          </div>

        </div>


      </div>

      {/* organize end */}



    <Gallery></Gallery>
      <NewsLetter></NewsLetter>

      
    </div>
  );
};

export default Home;
