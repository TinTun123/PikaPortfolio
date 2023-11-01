import React, {useEffect} from 'react'
import {motion} from 'framer-motion';
import {Carousel} from "flowbite-react";
import Button from "../../components/atom/Button.jsx";
import Background from '../../src/assets/background.jpg';
import AppStore from '../../src/assets/downloadFromAppStore.png';
import GooglePlay from '../../src/assets/downloadFromPlayStore.png';
import Lottie from "lottie-react";
import phone from '../../constants/phone_animation.json';
import Testing from '../../src/assets/background_image.jpg';
import CourseCard from "../../components/atom/CourseCard.jsx";
import ReviewCard from "../../components/atom/ReviewCard.jsx";
import CustomCarousel from "../../components/CustomCarousel.jsx";


const Home = ({courses, testimonials,social,sliders, texts}) => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: .5}}
            className="">
            <div className={'w-screen max-h-screen h-[100vh] '}>
                <Carousel className={'border-none h-full block'}>
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
            </section>
            <section className='glide px-4 lg:px-48 mt-16'>
                <h2 className={'text-center text-2xl font-semibold mb-10'}>Testimonials</h2>

                <CustomCarousel items={testimonials}>
                    {
                        testimonials.map((review, index) => (
                            <ReviewCard key={index} review={review}/>
                        ))
                    }
                </CustomCarousel>
            </section>
        </motion.div>
    )
}

export default Home;
