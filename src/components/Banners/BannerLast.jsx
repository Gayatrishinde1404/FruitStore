import React from 'react';
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';


const bgStyle = {
    backgroundImage : `url(${BannerPng})`,
    backgroundPosition : "center",
    backgroundSize : "no-repeat",
};

const BannerLast = () => {
  return (
   <section className=''>
       <div 
       style={bgStyle} 
       className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 mb-12">
           {/* Blank div */}
           <div></div>

           {/* Brand Info */}
           <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
              <motion.h1 
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase'
              >
                {/* */}
                Get Fresh Fruits Today
                </motion.h1>  
                    <motion.p 
                     variants={FadeLeft(0.7)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                    >
                      Welcome to FruitMart, where we offer a wide variety of fresh,
                       healthy, and naturally grown fruits to brighten your day.</motion.p>

                   

                      {/* Button Section */}
                    <motion.div 
                       variants={FadeLeft(0.9)}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                            Know More</button>
                    </motion.div>
            </div>
           </div>
       </div>
   </section>
  )
}

export default BannerLast;