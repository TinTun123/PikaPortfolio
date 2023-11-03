import React, {useEffect} from 'react'
import {Carousel} from "flowbite-react";
import Button from "../../components/atom/Button.jsx";
import AppStore from '../../src/assets/downloadFromAppStore.png';
import GooglePlay from '../../src/assets/downloadFromPlayStore.png';
import Lottie from "lottie-react";
import phone from '../../constants/phone_animation.json';
import CourseCard from "../../components/atom/CourseCard.jsx";
import ReviewCard from "../../components/atom/ReviewCard.jsx";
import CustomCarousel from "../../components/CustomCarousel.jsx";

const Left = () => {
    return (
        <svg
            className="rotate-[180deg]"
            width="21"
            height="28"
            viewBox="0 0 21 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.97043 0.692613L19.5311 16.2071C19.7158 16.3918 19.8469 16.5919 19.9245 16.8074C20.0021 17.0229 20.0403 17.2537 20.039 17.5C20.039 17.7463 20.0002 17.9771 19.9227 18.1926C19.8451 18.4081 19.7146 18.6082 19.5311 18.7929L3.97044 34.3536C3.53948 34.7845 3.00078 35 2.35434 35C1.7079 35 1.15382 34.7691 0.692074 34.3074C0.230333 33.8456 -0.00053802 33.3069 -0.000538074 32.6913C-0.000538128 32.0756 0.230333 31.5369 0.692073 31.0752L14.2673 17.5L0.692071 3.9248C0.261113 3.49384 0.0456324 2.96254 0.0456324 2.33087C0.0456323 1.69921 0.276503 1.15312 0.738246 0.692613C1.19999 0.230871 1.73868 1.59987e-06 2.35434 1.54605e-06C2.96999 1.49223e-06 3.50869 0.230871 3.97043 0.692613Z"
                fill="#f24406"
            />
        </svg>
    )
}

const Right = () => {
    return (
        <svg
            width="21"
            height="28"
            viewBox="0 0 21 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.97043 0.692613L19.5311 16.2071C19.7158 16.3918 19.8469 16.5919 19.9245 16.8074C20.0021 17.0229 20.0403 17.2537 20.039 17.5C20.039 17.7463 20.0002 17.9771 19.9227 18.1926C19.8451 18.4081 19.7146 18.6082 19.5311 18.7929L3.97044 34.3536C3.53948 34.7845 3.00078 35 2.35434 35C1.7079 35 1.15382 34.7691 0.692074 34.3074C0.230333 33.8456 -0.00053802 33.3069 -0.000538074 32.6913C-0.000538128 32.0756 0.230333 31.5369 0.692073 31.0752L14.2673 17.5L0.692071 3.9248C0.261113 3.49384 0.0456324 2.96254 0.0456324 2.33087C0.0456323 1.69921 0.276503 1.15312 0.738246 0.692613C1.19999 0.230871 1.73868 1.59987e-06 2.35434 1.54605e-06C2.96999 1.49223e-06 3.50869 0.230871 3.97043 0.692613Z"
                fill="#f24406"
            />
        </svg>
    );
}

const Home = ({courses, testimonials, social, sliders, texts}) => {

    return (
        <div>
            <div className={'w-screen max-h-screen h-[100vh] '}>
                <Carousel pauseOnHover={true} indicators={false} leftControl={<Left />} rightControl={<Right/>} className={'border-none h-full block'}>
                    {
                        sliders.map((slider) => (
                            <div key={slider.id} style={{
                                backgroundImage: `url(${slider.image})`,
                                backgroundSize: 'cover',
                                width: '100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'top',
                            }}
                                 className="h-full flex justify-center items-end bg-gray-400 dark:bg-gray-700 dark:text-white">
                                <div className={'mb-24'}>
                                    {
                                        slider.has_button &&
                                        <Button><a href={slider.button_link} target={'_blank'}>{slider.button_text}</a></Button>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            <div className={'mt-16'}>
                <h2 className={'text-center text-2xl font-semibold mb-5'}>Out Digital Tool</h2>
                <section className={'h-fit grid grid-cols-1 lg:grid-cols-2 items-center px-4  lg:px-48'}>
                    <div className={'flex flex-col gap-5 lg:p-0'}>
                        <p className={'p-0 lg:pr-14 text-lg '}>{texts.digital_text}</p>
                        <div className={'flex gap-3 '}>
                            <a href={social.appstore} target={'_blank'}>
                                <img className={'w-[120px]'} src={AppStore} alt=""/>
                            </a>
                            <a href={social.playstore} target={'_blank'}>
                                <img className={'w-[120px]'} src={GooglePlay} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className={'hidden lg:inline-block'}>
                        <Lottie animationData={phone} loop={true}/>
                    </div>
                </section>
            </div>
            <section className={'mt-16'}>
                <h2 className={'text-center text-2xl font-semibold'}>Courses</h2>
                <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-48 gap-10 py-20'}>
                    {
                        courses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))
                    }
                </div>
                <div className={'flex justify-center'}>
                    <Button href={route('course')} className={'mx-auto'}>See More</Button>
                </div>
            </section>
            <section className='glide-home px-4 lg:px-48 mt-16'>
                <h2 className={'text-center text-2xl font-semibold mb-10'}>Testimonials</h2>

                <CustomCarousel id={'glide-home'} items={testimonials} perView={2}>
                    {
                        testimonials.map((review, index) => (
                            <ReviewCard key={index} review={review}/>
                        ))
                    }
                </CustomCarousel>
            </section>
        </div>
    )
}

export default Home;
