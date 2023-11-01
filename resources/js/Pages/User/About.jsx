import React from 'react'
import {motion} from "framer-motion";
import Pika from '../../src/assets/pika.jpeg';


const About = ({aboutMe}) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
            transition={{duration: .5}}
        >
            <div className={'text-center mt-10 px-4'}>
                <h3 className={'text-2xl font-bold'}>About <span className={'text-primary'}>Me</span></h3>
                <p className={'max-w-2xl mx-auto text-sm'}>{aboutMe.first_description}</p>
            </div>
            <div className={'px-4 mt-10 grid grid-cols-1 gap-10 lg:gap-0 items-center lg:grid-cols-2 lg:px-48'}>
                <div>
                    <img src={aboutMe.image} className={'border-8 -rotate-2 w-[100%] lg:w-[80%]'} alt=""/>
                </div>
                <div>
                    <h3 className={'text-2xl font-bold my-7'}>{aboutMe.first_title} <span className={'text-primary'}>{aboutMe.second_title}</span></h3>
                    <p>{aboutMe.second_description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default About;
