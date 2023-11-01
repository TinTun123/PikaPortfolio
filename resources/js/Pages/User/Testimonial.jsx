import React from 'react'
import {motion} from "framer-motion";
import CustomCarousel from "../../components/CustomCarousel.jsx";
import TestimonialCard from "../../components/atom/TestimonialCard.jsx";


const Testimonial = ({testimonials}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .3}}
            className="my-14">
            <div className={'text-center'}>
                <h2 className={'font-bold text-2xl'}>What Our <span className={'text-primary'}>Students'</span> Say</h2>
            </div>
            <div className={'glide px-4 lg:px-48 '}>

                <CustomCarousel perView={1} items={testimonials}>
                    {
                        testimonials.map((testimonial) => (
                            <TestimonialCard testimonial={testimonial} key={testimonial.id}/>
                        ))
                    }
                </CustomCarousel>

            </div>
        </motion.div>
    )
}

export default Testimonial;
