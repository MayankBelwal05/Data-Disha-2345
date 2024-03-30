import { Link } from "react-router-dom";


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
                        {/* <IoPlayOutline /> */}
                        <Link to='/home'>Events</Link>
                    </div>
                </div>
            </div>

        </section>
        
        {/* heroimg */}
    </div>
  )
}
