import React from 'react';
import Course from "../../src/assets/pika_course.jpeg";

const ReviewCard = ({review}) => {
    return (
        <div
            className={"shadow-lg glide__slide slider hover:shadow-2xl !h-[400px] p-7 my-3 mx-4 flex flex-col justify-between items-between rounded-2xl"}>
            <p className={"review relative py-[30px]"}>
                {review.description}
            </p>
            <div className={'flex items-center gap-3 mt-5'}>
                <img className={'rounded-full  w-[40px] h-[40px] '} src={review.image} alt=""/>
                <h3 className={'font-semibold'}>{review.name}</h3>
            </div>
        </div>
    );
};

export default ReviewCard;
