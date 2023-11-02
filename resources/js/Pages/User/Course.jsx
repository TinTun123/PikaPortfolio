import React, {useEffect, useState} from 'react'
import CourseCard from "../../components/atom/CourseCard.jsx";
import Input from "../../components/atom/Input.jsx";
import Paginator from "../../components/atom/Paginator.jsx";
import {debounce} from "lodash";
import {router, usePage} from "@inertiajs/react";

const Course = ({courses,filters}) => {
    const [search, setSearch] = useState(filters.search ?? '');

    const dynamicParams = () => {
        let params = {};
        if (search) {
            params.search = search;
        }
        return params;
    }

    const fetchCourses = debounce(function () {
        router.get((route('course')),
            dynamicParams(),
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    }, 300);

    useEffect(()=> {
        fetchCourses();
    },[search]);


    return (
        <div>
            <div className={'px-4 lg:px-48'}>
                <div className={'my-20 text-center'}>
                    <Input value={search} onChange={e => setSearch(e.target.value)} className={'md:w-[80%] lg:w-[50%]'}
                           placeholder={'Search Course'}/>
                </div>
                {
                    courses.data.length === 0 &&
                    <div className={'text-center'}>
                        <h2 className={'text-xl'}>No Course Found.</h2>
                    </div>
                }
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                    {
                        courses.data.map((course) => (
                            <CourseCard course={course} key={course.id}/>
                        ))
                    }
                    <div className={'col-span-full flex justify-center'}>
                        <Paginator links={courses.links}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course;
