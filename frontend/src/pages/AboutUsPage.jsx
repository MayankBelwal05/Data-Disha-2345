import { Link } from "react-router-dom";

import img1 from "../assets/about/events.jpg";
import img2 from "../assets/about/food.jpg";
import img3 from "../assets/about/hobby.jpg";
import img4 from "../assets/about/nature.jpg";
import img5 from "../assets/about/technology.jpg";
import TeamCards from "./TeamCards";


export default function AboutUsPage() {
  return (
    <div>
      {/* heroimg */}

      <section className="bg-cover bg-center bg-no-repeat h-[70vh]" style={{ backgroundImage: `url('https://www.gqrgm.com/wp-content/uploads/2019/03/6-Ways-Your-Business-Can-Benefit-From-Hosting-Corporate-Events.png')` }}>
            <div className='bg-black bg-opacity-80 h-full flex items-center justify-start'>
                <div className="ml-4 md:-ml-10 lg:ml-20">
                    <h2 className="text-5xl text-white font-bold">About Us</h2>
                    <div className="flex items-center gap-2 mt-3 text-xl font-medium text-primary">
                        <Link to='/' className="text-white">Home</Link>
                      
                        <Link to='/home'>Events</Link>
                    </div>
                </div>
            </div>

        </section>
        
        {/* heroimg */}
        <div >
      {/* <div >
        <div >
          <img  src={bg} alt="" />
        </div>
        <div className="-mt-[75px] md:-mt-40">
          <h2 className="text-xl md:text-4xl text-center ">About Us</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-center text-primary font-serif">
            Dream Craft Events
          </h3>
          <p className="uppercase text-center md:text-2xl">
            Make your dreams come to life
          </p>
        </div>
        
      </div> */}
      
      <div className=" p-3 space-y-7 mt-5 md:mt-20  md:max-w-6xl mx-auto">
        <h2 className="text-center text-5xl underline">
          Why choose us
        </h2>
        {/* 1 */}
        <div className="md:flex gap-5 ">
          <div className="h-full w-full ">
            <img className="h-[250px] w-[350px] rounded-full" src={img5} alt="" />
          </div>

          <div >
            <h4 className="text-3xl mb-2 mt-2 ">Original</h4>
            <p className="text-sm">
              We have the sense fresh, new and original ideas that will ensure
              the event we organize is successful, unique and memorable. And We
              are “Dream Craft Events” With our young and creative minds, we
              always ensure that we bring out outstanding events that are easily
              distinguished from other events of the same field.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="md:flex flex-row-reverse gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px] rounded-full" src={img4} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2 ">Creative</h4>
            <p>
              We are creative in every aspect of the event; planning,
              promotional and publicity as well as execution. By being creative,
              our events are more outstanding and will leave a great impact not
              just to us, but to our clients as well.
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="md:flex gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px] rounded-full" src={img1} alt="" />
          </div>
          <div className="lg:-ml-32">
            <h4 className="text-2xl mb-2 mt-2">Maticulous</h4>
            <p>
              We are very particular in every aspect of the event management to
              guarantee the event we organise runs perfectly and efficiently.guarantee the event we organise runs perfectly and efficiently.
            </p>
          </div>
        </div>
        {/* 4 */}
        <div className="md:flex gap-5 flex-row-reverse justify-center">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px] rounded-full" src={img2} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Event Services</h4>
            <p>
              With many years of experience in event organising, we understand
              that there many factors that lead to a well-organised and
              successful event. These aspects include events sponsorship, event
              marketing and promotions as well as producing event merchandising.
              Each of these aspects is managed carefully as they are the main
              components of the main event.
            </p>
          </div>
        </div>
        {/* 5 */}
        <div className="md:flex gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px] rounded-full" src={img3} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Satisfaction</h4>
            <p>
              Of course, achieving our clients’ satisfaction is what motivates
              us to bring out the best events. We believe in the strengths of
              each of our team members and we have proved to exceed our clients’
              expectations and presenting them with successful events that raved
              fantastic reviews around the world!
            </p>
          </div>
        </div>
      </div>
      {/* <Add></Add> */}
      
    </div>
    <div className="my-5"><h1 className="text-3xl lg:text-5xl font-bold text-black-300">Our Team</h1></div>
            <div className="my-5"><h1 className="text-2xl lg:text-2xl  text-slate-500">For InnovateSphere - Tech & Beyond Summit</h1></div>
    <TeamCards></TeamCards>
    </div>
  )
}
