import React from 'react'
import CustomCarousel from "../../components/CustomCarousel.jsx";
import TestimonialCard from "../../components/atom/TestimonialCard.jsx";


const Testimonial = ({testimonials}) => {
    return (
        <div className="my-14">
            <div className={'text-center'}>
                <h2 className={'font-bold text-2xl'}>What Our <span className={'text-primary'}>Students'</span> Say</h2>
            </div>
            <div className={'glide-testimonial px-4 lg:px-48 '}>

                <CustomCarousel id={'glide-testimonial'} perView={1} items={testimonials}>
                    {
                        testimonials.map((testimonial) => (
                            <TestimonialCard testimonial={testimonial} key={testimonial.id}/>
                        ))
                    }
                </CustomCarousel>

            </div>
        </div>
    )
}

export default Testimonial;
