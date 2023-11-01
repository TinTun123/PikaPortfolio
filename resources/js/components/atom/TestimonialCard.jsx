import React from 'react';
import Course from "../../src/assets/pika_course.jpeg";

const TestimonialCard = ({testimonial}) => {
    return (
        <div
            className={"shadow-lg glide__slide slider hover:shadow-2xl px-10 py-20 rounded-2xl  text-center"}>
            <img className={'rounded-full border-8 border-primary w-[150px] h-[150px] object-cover mx-auto'} src={testimonial.image}
                 alt=""/>
            <p className={"relative py-[30px] max-w-2xl mx-auto "}><span
                className={'font-bold'}>&ldquo;</span> {testimonial.description} <span
                className={'font-bold'}>&rdquo;</span></p>
            <div className={'flex items-center justify-center gap-3 mt-5'}>
                <h3 className={'font-semibold text-xl tracking-widest'}>{testimonial.name}</h3>
            </div>
        </div>
    );
};

export default TestimonialCard;
