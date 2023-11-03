import React from 'react';



const CourseCard = ({course}) => {


    return (
        <div
            className="shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden gap-2 flex flex-col">
            <img className="w-full h-[200px] object-cover"
                 src={course.image}
                 alt="Course Image"/>
            <div className="px-5 py-5">
                <p className="text-xl font-semibold mb-6">{course.title}</p>
                <p className={'text-sm my-5'}>Instructed by {course.instructor}</p>
                <p className={'text-md font-semibold'}>{(+course.price).toLocaleString('en-US') + ' mmk'}</p>
                <div className={'text-center my-5'}>
                    <a href={course.link}  target={'_blank'}  className={'px-10 py-2 rounded-full bg-primary text-white '}>Enroll</a>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
