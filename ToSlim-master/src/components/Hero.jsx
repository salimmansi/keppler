import styles from "../style";
import { stats } from "../constants";

import {   USAIDLogo,
  UTICALogo,
  ma3anLogo,
  FRIEDRICHLogo,
  fhiLogo,
  FAOLogo,
  CFADLogo,
  eclipse1,
  eclipse2,
  eclipse3 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {  
  return (
    <section id="home" className={` `}  >
        
        <div className="max-w-[1080px] mx-auto">
        <div className={`flex md:flex-row flex-col p-0 ${styles.paddingY} 	`  }>
    <div className={`flex-1 flex ${styles.flexCenter} basis-1/4 md:my-0 my-5 relative`}>
      
    </div>
    <div className={`flex-1 ${styles.flexStart} basis-1/2 flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className="w-full h-full object-cover backdrop-blur-sm p-7 pl-12 block rounded-lg shadow-lg px-6 py-12 md:px-12  glassifedEffectBlur 	" style={{ maxWidth: "1080px" }}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className="flex-1 font-poppins font-semibold ss:etxt-[52px] text-[52px] text-white ss:leading-[60.8px] leading-[52.8px]">
            Exciting Events Across All Tunisia With <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Kepler!</span>{" "}
          </h1>  
        </div>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          Welcome to Kepler, your gateway to unforgettable travel experiences and exciting events. Our travel agency is passionate about curating the perfect Event package tailored to your interests. 
        </p>
      </div>
    </div>
  </div>


  <div className="container px-7 py-3  mx-auto">
    <div className="flex flex-wrap -m-2 justify-center">
      <div className="p-2">
        <img src={eclipse1} className="title-font font-medium sm:text-4xl text-3xl text-gray-900"></img>
      </div>
      <div className="p-2">
        <img src={eclipse2}></img>
      </div>
      <div className="p-2">
        <img src={eclipse3}></img>
      </div>
    </div>
  </div>

  <div className="container px-7 py-3 mx-auto">
    <div className="flex flex-wrap -m-2 justify-center">
      <div className="p-2">
        <img src={UTICALogo} className="title-font font-medium sm:text-4xl text-3xl text-gray-900"></img>
      </div>
      <div className="p-2">
        <img src={ma3anLogo}></img>
      </div>
      <div className="p-2">
        <img src={USAIDLogo}></img>
      </div>
      <div className="p-2">
        <img src={FRIEDRICHLogo}></img>
      </div>
      <div className="p-2">
        <img src={fhiLogo}></img>
      </div>
      <div className="p-2">
        <img src={FAOLogo}></img>
      </div>
      <div className="p-2">
        <img src={CFADLogo}></img>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
