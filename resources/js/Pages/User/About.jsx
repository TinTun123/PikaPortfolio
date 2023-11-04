import React from 'react'


const About = ({aboutMe}) => {
    return (
        <div>
            <div className={'text-center mt-10 px-4'}>
                <h3 className={'text-2xl font-bold'}>About <span className={'text-primary'}>Me</span></h3>
                <p className={'max-w-2xl mx-auto text-sm'}>{aboutMe.first_description}</p>
            </div>
            <div className={'px-4 mt-10 grid grid-cols-1 gap-10 lg:gap-0 items-center lg:grid-cols-2 section'}>
                <div>
                    <img src={aboutMe.image} className={'border-8 -rotate-2 w-[100%] lg:w-[80%]'} alt=""/>
                </div>
                <div>
                    <h3 className={'text-2xl font-bold my-7'}>{aboutMe.first_title} <span
                        className={'text-primary'}>{aboutMe.second_title}</span></h3>
                    <p>{aboutMe.second_description}</p>
                </div>
            </div>
        </div>
    )
}

export default About;
