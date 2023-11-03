import React, {useState} from 'react'
import Button from "./atom/Button";
import {HiBars3BottomRight} from "react-icons/hi2";
import {RxCross1} from "react-icons/rx";
import Logo from '../src/assets/pika_logo_with_text.jpg';
import {Link} from '@inertiajs/react';

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Class',
        path: '/course'
    },
    {
        name: 'Testimonials',
        path: '/testimonial'
    },
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const activeLinkClass = 'border-none sm:border border-t-0 border-b-primary border-b-[3px] text-primary border-l-0';
    return (
        <div className="flex px-2 lg:px-48 sticky z-[10] top-0 bg-white py-4 justify-between items-center shadow-lg ">
            <div className="text-xl">
                <Link href={'/'}><img src={Logo} className={'w-[70px]'} alt="" /></Link>
            </div>
            {/*mobile */}
            <ul className={`text-md sm:hidden absolute py-3 flex flex-col justify-center transition-all duration-300 top-[73px] left-0 bg-white w-full z-10 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
                {
                    links.map(link => (
                        <li onClick={()=> setIsOpen(false)} key={link.name}
                            className={`border-r-0 text-center font-[600] p-2 ${window.location.pathname === link.path && activeLinkClass}`}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <ul className="gap-5 text-md hidden sm:flex">
                {
                    links.map(link => (
                        <li key={link.name}
                            className={`border-r-0 font-[600] p-1 ${window.location.pathname === link.path && activeLinkClass}`}>
                            <Link className={'hover:text-primary'} href={link.path}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className={'flex items-center gap-2'}>
                <Button href={route('contact')}>
                    Contact Us
                </Button>
                <div onClick={() => setIsOpen(!isOpen)} className={'block sm:hidden cursor-pointer'}>
                    {
                        isOpen ? (
                            <RxCross1 className={'text-4xl'}/>
                        ) : (
                            <HiBars3BottomRight className={'text-4xl'}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;
