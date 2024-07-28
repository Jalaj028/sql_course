import { useEffect } from 'react'
import '../index.css'
import WAVES from "vanta/src/vanta.waves";
import NET from "vanta/src/vanta.net";
import MediaCard from './card';
import DropDown from './dropDown';

function LandingPage() {
    useEffect(() => {
        WAVES({
          el: '#vanta',
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          waveSpeed: 0.40
        })
      },[])
    return(
        <div className="app h-max w-full pb-5 relative">
          <div className='w-full bg-yellow-300 font-semibold'>
            <h2 className=' flex items-center justify-center h-8'>
            The Bootcamp 2.0 has been upgraded to 3.0.
            </h2>
          </div>
          <div className="pt-10 bg w-full md:h-screen h-auto pb-3" id="vanta">
            <div className=' rounded-md md:ml-10 md:w-5/12 w-11/12 mx-auto h-auto lg:h-4/5 lg:w-1/2 bg-slate-50 bg-opacity-15 backdrop-blur-md' style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", padding:"2%"}}>
              <div className='hero'>
                <h1 className='heading text-left font-semibold md:text-5xl text-4xl'><span className=' text-slate-50'>From Novice To Pro: </span> <span style={{color:"#FFDB58"}}>SQL Basics to Intermediate Course</span></h1>
                <p className='para sm:mt-12  mt-5 text-2xl text-slate-50'>With this practical beginner’s course, learn Power BI from scratch and prepare for data analyst, business analyst, or Power BI developer careers. The course offers a detailed project, giving you real organizational experience and business context.</p>
              </div>
            </div>
            <div className="md:hidden w-11/12 mx-auto mt-4" >
              <MediaCard />
            </div>
          </div>
      
         <div className='md:ml-10 md:w-5/12 lg:w-1/2 w-11/12 mx-auto h-auto'>
          <div className="learn w-full h-auto bg-gradient-to-br from-sky-400 to-teal-500 text-white p-6 rounded-lg shadow-md mt-6">
            <h1 className="text-2xl font-bold mb-4">What You Will Learn?</h1>
            <ul className="list-disc pl-6">
                <li>AI fundamentals with memorable analogies</li>
                <li>AI Know-hows with industry Use Cases</li>
                <li>AI project-management steps</li>
                <li>AI Career Options</li>
                <li>How to add AI in your career</li>
                <li>Building Online Credibility on LinkedIn</li>
            </ul>
          </div>
            <div className="pre w-full h-auto bg-gradient-to-br from-sky-400 to-teal-500 text-white p-6 rounded-lg shadow-md mt-6">
              <h1>What are the Pre-requisites?</h1>
            </div>
            <div className="pre w-full h-auto bg-gradient-to-br from-sky-400 to-teal-500 text-white p-6 rounded-lg shadow-md mt-6">
              <h1>Course Curriculum</h1>
              <DropDown />
            </div>
            <div className="pre w-full h-auto bg-gradient-to-br from-sky-400 to-teal-500 text-white p-6 rounded-lg shadow-md mt-6">
              <h1>Frequently Asked Question?</h1>
              <DropDown />
            </div>
          </div>
          <div className="md:block hidden absolute h-full w-1/2 top-0 right-0 pb-5">
            <div className="card sticky top-0 mt-16  mx-auto w-9/12" >
              <MediaCard />
            </div>
          </div>
        </div>
    )
}

export default LandingPage;