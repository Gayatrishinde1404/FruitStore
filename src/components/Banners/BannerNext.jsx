import React from 'react';
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

const BannerNext = () => {
  return (
   <section>
       <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        

           {/* Brand Info */}
           <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
              <motion.h1 
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='text-3xl lg:text-6xl font-bold uppercase'>
                {/* */}
                Online Store
                </motion.h1>  
                    <motion.p 
                     variants={FadeUp(0.7)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                    >
                      Experience hassle-free shopping with our online fruit shop,
                       offering fresh, quality fruits delivered straight to your doorstep with ease.</motion.p>

                     <motion.p
                     variants={FadeUp(0.9)}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     >Order fruits online anytime, enjoy fast delivery, 
                     and savor freshness with just a few clicks.</motion.p>

                      {/* Button Section */}
                    <motion.div 
                       variants={FadeUp(1.1)}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       className='flex justify-center md:justify-start'>
                        <button className='primary-btn'>
                            Download The App</button>
                    </motion.div>
            </div>
           </div>
         
           {/* Banner Images */}
           <div className='flex justify-center items-center'>
            <motion.img 
             initial={{ opacity: 0, x: 200, rotate: 75 }}
             whileInView={{ opacity: 1, x: 0, rotate:0 }}
             transition={{ duration: 1, delay: 0.2}}
             viewport={{ once: true }}
            src={BannerPng} 
            alt=''
            className='w-[300] md:max-w[400px] h-full object-cover drop-shadow'/>
           </div>
       </div>
   </section>
  )
}

export default BannerNext;