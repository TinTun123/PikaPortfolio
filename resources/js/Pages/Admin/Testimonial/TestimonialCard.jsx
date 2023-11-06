import React from 'react';
import {Link} from "@inertiajs/react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";

const TestimonialCard = ({testimonial, handleTestimonialDelete}) => {

    return (
        <div className={' w-full p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5'}>
            <div className={'flex flex-col gap-5 w-full justify-between'}>
                <div>
                    <div className={'flex items-center gap-4 my-2'}>
                        <img className={'w-10 h-10 rounded-full'} src={testimonial.image} alt=""/>
                        <h3 className={'font-semibold text-xl'}>{testimonial.name}</h3>
                    </div>
                    <p>{testimonial.description}</p>
                </div>
                <div className={'flex justify-end'}>
                    <div className={'flex gap-5'}>
                        <Link href={route('admin.testimonial.edit', testimonial.id)} className={'text-2xl '}>
                            <AiOutlineEdit/>
                        </Link>
                        <button onClick={() => handleTestimonialDelete(testimonial.id)}
                                className={'text-2xl text-primary'}>
                            <AiOutlineDelete/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
