import React from 'react'
import {motion} from 'framer-motion'
import CourseCard from "../../components/atom/CourseCard.jsx";
import Input from "../../components/atom/Input.jsx";
import Paginator from "../../components/atom/Paginator.jsx";

const Course = ({courses}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .5}}
            className="">

            <div className={'px-4 lg:px-48'}>
                <div className={'my-20 text-center'}>
                    <Input className={'md:w-[80%] lg:w-[50%]'} placeholder={'Search Course'} />
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                    {
                        courses.data.map((course) => (
                            <CourseCard course={course} key={course.id}  />
                        ))
                    }
                    <div className={'col-span-full flex justify-center'}>
                        <Paginator links={courses.links} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Course;
